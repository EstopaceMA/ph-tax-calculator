import { TaxRate } from '../types/directory';

export const TAX_RATES: TaxRate[] = [
  {
    category: 'Income Tax',
    type: 'Individual Income Tax (Compensation)',
    description: 'Progressive tax rates for employees and compensation earners',
    effectiveDate: 'January 1, 2025',
    rates: [
      { min: 0, max: 250000, rate: 0, baseAmount: 0, description: 'Tax-free bracket' },
      { min: 250000, max: 400000, rate: 0.20, baseAmount: 0, description: '20% on excess over ₱250,000' },
      { min: 400000, max: 800000, rate: 0.25, baseAmount: 30000, description: '₱30,000 + 25% on excess over ₱400,000' },
      { min: 800000, max: 2000000, rate: 0.30, baseAmount: 130000, description: '₱130,000 + 30% on excess over ₱800,000' },
      { min: 2000000, max: 8000000, rate: 0.32, baseAmount: 490000, description: '₱490,000 + 32% on excess over ₱2,000,000' },
      { min: 8000000, rate: 0.35, baseAmount: 2410000, description: '₱2,410,000 + 35% on excess over ₱8,000,000' }
    ]
  },
  {
    category: 'Income Tax',
    type: 'Corporate Income Tax',
    description: 'Tax rates for domestic and foreign corporations',
    effectiveDate: 'July 1, 2020',
    rates: [
      { min: 0, rate: 0.25, description: 'Domestic corporations (25%)' },
      { min: 0, rate: 0.30, description: 'Foreign corporations (30%)' }
    ]
  },
  {
    category: 'Income Tax',
    type: 'Minimum Corporate Income Tax (MCIT)',
    description: 'Minimum tax based on gross income for corporations',
    effectiveDate: 'Current',
    rates: [
      { min: 0, rate: 0.02, description: '2% of gross income (starting 4th year of operation)' }
    ]
  },
  {
    category: 'Business Tax',
    type: 'Value Added Tax (VAT)',
    description: 'Tax on sale of goods and services',
    effectiveDate: 'Current',
    rates: [
      { min: 0, rate: 0.12, description: 'Standard VAT rate (12%)' },
      { min: 0, rate: 0.00, description: 'Zero-rated transactions' },
      { min: 0, rate: 0.00, description: 'VAT-exempt transactions' }
    ]
  },
  {
    category: 'Business Tax',
    type: 'Percentage Tax',
    description: 'Alternative to VAT for smaller businesses',
    effectiveDate: 'Current',
    rates: [
      { min: 0, rate: 0.03, description: '3% of gross quarterly sales/receipts' }
    ]
  },
  {
    category: 'Business Tax',
    type: 'Simplified Income Tax (8% Rate)',
    description: 'Optional simplified tax computation for eligible taxpayers',
    effectiveDate: 'Current',
    rates: [
      { min: 0, max: 3000000, rate: 0.08, description: '8% of gross sales/receipts (for businesses with gross sales ≤ ₱3M)' }
    ]
  },
  {
    category: 'Withholding Tax',
    type: 'Creditable Withholding Tax',
    description: 'Tax withheld on various payments to suppliers and service providers',
    effectiveDate: 'Current',
    rates: [
      { min: 0, rate: 0.01, description: 'Professional fees, rentals of real property (1%)' },
      { min: 0, rate: 0.015, description: 'Gross payments to general professional partnerships (1.5%)' },
      { min: 0, rate: 0.02, description: 'Payments to contractors, suppliers of goods (2%)' },
      { min: 0, rate: 0.05, description: 'Income payments to resident aliens (5%)' },
      { min: 0, rate: 0.10, description: 'Professional fees to individuals (10%)' },
      { min: 0, rate: 0.15, description: 'Income payments to non-resident aliens (15%)' }
    ]
  },
  {
    category: 'Withholding Tax',
    type: 'Final Withholding Tax',
    description: 'Final tax on passive income',
    effectiveDate: 'Current',
    rates: [
      { min: 0, rate: 0.20, description: 'Interest from bank deposits, royalties (20%)' },
      { min: 0, rate: 0.10, description: 'Cash dividends from domestic corporations (10%)' },
      { min: 0, rate: 0.15, description: 'Cash dividends to non-resident foreign corporations (15%)' },
      { min: 0, rate: 0.25, description: 'Interest from foreign currency deposits (25%)' }
    ]
  },
  {
    category: 'Other Taxes',
    type: 'Capital Gains Tax',
    description: 'Tax on gains from sale of capital assets',
    effectiveDate: 'Current',
    rates: [
      { min: 0, rate: 0.06, description: 'Sale of real property (6%)' },
      { min: 0, rate: 0.15, description: 'Sale of shares not listed in stock exchange (15%)' }
    ]
  },
  {
    category: 'Other Taxes',
    type: 'Donor\'s Tax',
    description: 'Tax on gifts and donations',
    effectiveDate: 'Current',
    rates: [
      { min: 0, max: 250000, rate: 0, description: 'Exempt (up to ₱250,000)' },
      { min: 250000, rate: 0.06, description: '6% on excess over ₱250,000' }
    ]
  },
  {
    category: 'Other Taxes',
    type: 'Estate Tax',
    description: 'Tax on inherited property',
    effectiveDate: 'Current',
    rates: [
      { min: 0, max: 5000000, rate: 0.06, description: '6% (up to ₱5,000,000)' },
      { min: 5000000, rate: 0.12, description: '12% (exceeding ₱5,000,000)' }
    ]
  },
  {
    category: 'Contributions',
    type: 'SSS Contributions',
    description: 'Social Security System contributions for employees',
    effectiveDate: '2025',
    rates: [
      { min: 4000, max: 35000, rate: 0.05, description: 'Employee contribution (5.0%)' },
      { min: 4000, max: 35000, rate: 0.095, description: 'Employer contribution (9.5%)' }
    ]
  },
  {
    category: 'Contributions',
    type: 'PhilHealth Contributions',
    description: 'Philippine Health Insurance Corporation contributions',
    effectiveDate: '2025',
    rates: [
      { min: 0, rate: 0.025, description: 'Employee contribution (2.5% of salary)' },
      { min: 0, rate: 0.025, description: 'Employer contribution (2.5% of salary)' }
    ]
  },
  {
    category: 'Contributions',
    type: 'Pag-IBIG Contributions',
    description: 'Home Development Mutual Fund contributions',
    effectiveDate: '2025',
    rates: [
      { min: 0, max: 1500, rate: 0.01, description: 'Employee contribution (1% for salary ≤ ₱1,500)' },
      { min: 1500, rate: 0.02, description: 'Employee contribution (2% for salary > ₱1,500), max ₱300' },
      { min: 0, max: 1500, rate: 0.02, description: 'Employer contribution (2% for salary ≤ ₱1,500)' },
      { min: 1500, rate: 0.02, description: 'Employer contribution (2% for salary > ₱1,500), max ₱300' }
    ]
  }
];