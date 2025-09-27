export interface TaxBracket {
  min: number;
  max: number;
  rate: number;
  baseAmount: number;
}

export interface SSSBracket {
  rangeOfCompensation: { min: number; max: number };
  monthlySalaryCredit: { regularSS: number; mpf: number; total: number };
  employerAmountOfContribution: { regularSS: number; mpf: number; ec: number; total: number };
  employeeAmountOfContribution: { regularSS: number; mpf: number; total: number };
  totalContribution: number;
}

export interface ContributionRates {
  sss: {
    employeeRate: number;
    employerRate: number;
    minSalary: number;
    maxSalary: number;
  };
  philHealth: {
    rate: number;
    minPremium: number;
    maxPremium: number;
  };
  pagibig: {
    lowRate: number;
    highRate: number;
    threshold: number;
    maxContribution: number;
  };
}

export interface TaxCalculation {
  grossSalary: number;
  annualSalary: number;
  sssContribution: number;
  philHealthContribution: number;
  pagibigContribution: number;
  totalContributions: number;
  taxableIncome: number;
  annualTaxableIncome: number;
  monthlyTax: number;
  annualTax: number;
  netSalary: number;
  taxBracket: string;
}

export interface TariffItem {
  ahtn: string;
  description: string;
  rate: number;
}

export interface CustomsCalculation {
  goods: {
    ahtnCode: string;
    description: string;
    rateOfDuty: number;
  };
  dutiableValue: {
    fobFcaValue: number;
    freight: number;
    insurance: number;
    totalDutiableValueForeign: number;
    exchangeRate: number;
    totalDutiableValuePHP: number;
  };
  charges: {
    customsDuty: number;
    exciseTax: number;
    brokerageFee: number;
    importProcessingCharge: number;
    birDocumentaryStampTax: number;
    customsDocumentaryStamp: number;
    totalLandedCost: number;
  };
  summary: {
    customsDuty: number;
    vat: number;
    exciseTax: number;
    importProcessingCharge: number;
    birDocumentaryStampTax: number;
    customsDocumentaryStamp: number;
    totalTaxAmount: number;
  };
}

export type TaxType =
  | 'compensation'
  | 'vat'
  | 'customs';

export interface TaxTypeInfo {
  id: TaxType;
  name: string;
  description: string;
  rate?: string;
  applicableTo: string;
}

export const TAX_TYPES: TaxTypeInfo[] = [
  {
    id: 'compensation',
    name: 'Compensation Income Tax',
    description: 'Tax on salaries, wages, and other compensation from employment',
    rate: '0% - 35%',
    applicableTo: 'Employees and workers'
  },
  {
    id: 'vat',
    name: 'Value Added Tax (VAT)',
    description: 'Tax on sale of goods and services',
    rate: '12%',
    applicableTo: 'VAT-registered businesses'
  },
  {
    id: 'customs',
    name: 'Customs Duty & Import Tax (Beta)',
    description: 'BOC Tax Estimator for imported goods via express couriers',
    rate: 'Variable',
    applicableTo: 'Importers and express shipments'
  }
];
