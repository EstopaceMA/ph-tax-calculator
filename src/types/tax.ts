export interface TaxBracket {
  min: number;
  max: number;
  rate: number;
  baseAmount: number;
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
