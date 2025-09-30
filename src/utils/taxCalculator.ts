import { TaxCalculation, CustomsCalculation } from '../types/tax';
import { TAX_BRACKETS, SSS_BRACKETS, CONTRIBUTION_RATES, VAT_RATE, } from '../data/taxRules';

export function calculateSSS(monthlySalary: number): number {
  const bracket = SSS_BRACKETS.find(bracket =>
    monthlySalary >= bracket.rangeOfCompensation.min &&
    monthlySalary <= bracket.rangeOfCompensation.max
  );

  // Return found bracket or fallback to highest bracket
  return bracket?.employeeAmountOfContribution.total ??
    SSS_BRACKETS[SSS_BRACKETS.length - 1].employeeAmountOfContribution.total;
}

export function calculatePhilHealth(monthlySalary: number): number {
  const incomeCeiling = 100000; // DOH/BIR-mandated ceiling
  const cappedSalary = Math.min(monthlySalary, incomeCeiling);
  const employeeShare = (CONTRIBUTION_RATES.philHealth.rate / 2);
  return cappedSalary * employeeShare;
}

export function calculatePagibig(monthlySalary: number): number {
  const rate = monthlySalary <= CONTRIBUTION_RATES.pagibig.threshold
    ? CONTRIBUTION_RATES.pagibig.lowRate
    : CONTRIBUTION_RATES.pagibig.highRate;

  return Math.min(monthlySalary * rate, CONTRIBUTION_RATES.pagibig.maxContribution);
}

export function calculateIncomeTax(annualTaxableIncome: number): number {
  for (const bracket of TAX_BRACKETS) {
    if (annualTaxableIncome <= bracket.max) {
      const excess = Math.max(0, annualTaxableIncome - bracket.min);
      return bracket.baseAmount + (excess * bracket.rate);
    }
  }
  return 0;
}

export function getTaxBracketDescription(annualTaxableIncome: number): string {
  for (const bracket of TAX_BRACKETS) {
    if (annualTaxableIncome <= bracket.max) {
      if (bracket.rate === 0) {
        return '0% Tax Rate';
      }
      return `${(bracket.rate * 100).toFixed(0)}% Tax Rate`;
    }
  }
  return '';
}

export function calculateTax(monthlySalary: number): TaxCalculation {
  const grossSalary = monthlySalary;
  const annualSalary = monthlySalary * 12;

  const sssContribution = calculateSSS(monthlySalary);
  const philHealthContribution = calculatePhilHealth(monthlySalary);
  const pagibigContribution = calculatePagibig(monthlySalary);
  const totalContributions = sssContribution + philHealthContribution + pagibigContribution;

  const taxableIncome = monthlySalary - totalContributions;
  const annualTaxableIncome = taxableIncome * 12;

  const annualTax = calculateIncomeTax(annualTaxableIncome);
  const monthlyTax = annualTax / 12;

  const netSalary = monthlySalary - totalContributions - monthlyTax;
  const taxBracket = getTaxBracketDescription(annualTaxableIncome);

  return {
    grossSalary,
    annualSalary,
    sssContribution,
    philHealthContribution,
    pagibigContribution,
    totalContributions,
    taxableIncome,
    annualTaxableIncome,
    monthlyTax,
    annualTax,
    netSalary,
    taxBracket
  };
}

export function calculateVAT(amount: number, isVATInclusive: boolean = false): { vatAmount: number; netAmount: number; grossAmount: number } {
  if (isVATInclusive) {
    const netAmount = amount / (1 + VAT_RATE);
    const vatAmount = amount - netAmount;
    return {
      vatAmount,
      netAmount,
      grossAmount: amount
    };
  } else {
    const vatAmount = amount * VAT_RATE;
    const grossAmount = amount + vatAmount;
    return {
      vatAmount,
      netAmount: amount,
      grossAmount
    };
  }
}


export function calculateCustomsDuty(params: {
  fobFcaValue: number;
  freight: number;
  exchangeRate: number;
  rateOfDuty: number;
  isDangerousCargo?: boolean;
  brokerageFee?: number;
  exciseTaxRate?: number;
}): CustomsCalculation {
  const {
    fobFcaValue,
    freight,
    exchangeRate,
    rateOfDuty,
    isDangerousCargo = false,
    brokerageFee = 0,
    exciseTaxRate = 0
  } = params;

  // Calculate insurance (2% for general cargo, 4% for dangerous cargo)
  const insuranceRate = isDangerousCargo ? 0.04 : 0.02;
  const insurance = fobFcaValue * insuranceRate;

  // Calculate total dutiable value in foreign currency
  const totalDutiableValueForeign = fobFcaValue + freight + insurance;

  // Convert to PHP
  const totalDutiableValuePHP = totalDutiableValueForeign * exchangeRate;

  // Calculate customs duty
  const customsDuty = totalDutiableValuePHP * (rateOfDuty / 100);

  // Calculate excise tax (if applicable)
  const exciseTax = exciseTaxRate > 0 ? totalDutiableValuePHP * (exciseTaxRate / 100) : 0;

  // Fixed charges based on BOC tax estimator
  const importProcessingCharge = 250;
  const birDocumentaryStampTax = 30;
  const customsDocumentaryStamp = 100;

  // Calculate total landed cost
  const totalLandedCost = totalDutiableValuePHP + customsDuty + exciseTax +
    brokerageFee + importProcessingCharge +
    birDocumentaryStampTax + customsDocumentaryStamp;

  // Calculate VAT (12% of total landed cost)
  const vat = totalLandedCost * VAT_RATE;

  // Calculate total tax amount
  const totalTaxAmount = customsDuty + vat + exciseTax + importProcessingCharge +
    birDocumentaryStampTax + customsDocumentaryStamp;

  return {
    goods: {
      ahtnCode: '',
      description: '',
      rateOfDuty
    },
    dutiableValue: {
      fobFcaValue,
      freight,
      insurance,
      totalDutiableValueForeign,
      exchangeRate,
      totalDutiableValuePHP
    },
    charges: {
      customsDuty,
      exciseTax,
      brokerageFee,
      importProcessingCharge,
      birDocumentaryStampTax,
      customsDocumentaryStamp,
      totalLandedCost
    },
    summary: {
      customsDuty,
      vat,
      exciseTax,
      importProcessingCharge,
      birDocumentaryStampTax,
      customsDocumentaryStamp,
      totalTaxAmount
    }
  };
}
