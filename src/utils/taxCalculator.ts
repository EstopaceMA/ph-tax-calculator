import { TaxBracket, ContributionRates, TaxCalculation } from '../types/tax';

// 2025 Philippines Tax Brackets (BIR)
// reference: https://www.bir.gov.ph/income-tax
export const TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 250000, rate: 0, baseAmount: 0 },
  { min: 250000, max: 400000, rate: 0.20, baseAmount: 0 },
  { min: 400000, max: 800000, rate: 0.25, baseAmount: 30000 },
  { min: 800000, max: 2000000, rate: 0.30, baseAmount: 130000 },
  { min: 2000000, max: 8000000, rate: 0.32, baseAmount: 490000 },
  { min: 8000000, max: Infinity, rate: 0.35, baseAmount: 2410000 }
];

// 2025 Contribution Rates
export const CONTRIBUTION_RATES: ContributionRates = {
  sss: {
    employeeRate: 0.05, // 5.0%
    employerRate: 0.095, // 9.5%
    minSalary: 4000,
    maxSalary: 35000
  },
  philHealth: {
    rate: 0.05, // 5% (2.5% employee + 2.5% employer)
    minPremium: 550,
    maxPremium: 5500
  },
  pagibig: {
    lowRate: 0.01, // 1%
    highRate: 0.02, // 2%
    threshold: 1500,
    maxContribution: 300
  }
};

export function calculateSSS(monthlySalary: number): number {
  const salaryForSSS = Math.min(Math.max(monthlySalary, CONTRIBUTION_RATES.sss.minSalary), CONTRIBUTION_RATES.sss.maxSalary);
  return salaryForSSS * CONTRIBUTION_RATES.sss.employeeRate;
}

export function calculatePhilHealth(monthlySalary: number): number {
  const premium = monthlySalary * (CONTRIBUTION_RATES.philHealth.rate / 2); // Employee portion only
  return Math.min(Math.max(premium, CONTRIBUTION_RATES.philHealth.minPremium / 2), CONTRIBUTION_RATES.philHealth.maxPremium / 2);
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
