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

export type TaxType =
  | 'compensation'
  | 'vat';

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
  }
];
