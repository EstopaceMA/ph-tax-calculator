import { TaxpayerCategory } from '../types/directory';

export const TAXPAYER_CATEGORIES: TaxpayerCategory[] = [
  {
    id: 'individuals',
    name: 'Individuals',
    description: 'Tax obligations for individual taxpayers',
    icon: 'User',
    subcategories: [
      {
        id: 'employed',
        name: 'Employed Individuals',
        description: 'Employees receiving compensation from employers',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Tax on compensation income',
            rate: '0% - 35%',
            frequency: 'monthly',
            dueDate: 'Withheld by employer'
          },
          {
            type: 'Annual Income Tax Return',
            description: 'Annual filing for certain income levels',
            frequency: 'annually',
            dueDate: 'April 15'
          }
        ],
        forms: ['BIR Form 1700', 'BIR Form 2316'],
        deadlines: [
          {
            description: 'Annual Income Tax Return',
            date: 'April 15',
            frequency: 'annually',
            form: 'BIR Form 1700'
          }
        ],
        requirements: [
          'Tax Identification Number (TIN)',
          'Certificate of Employment',
          'BIR Form 2316 (Certificate of Compensation Payment)',
          'Valid identification documents'
        ],
        examples: [
          'Office workers',
          'Government employees',
          'Teachers',
          'Healthcare workers'
        ]
      },
      {
        id: 'self-employed',
        name: 'Self-Employed Individuals',
        description: 'Individuals engaged in business or practice of profession',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Tax on business income',
            rate: '8% or graduated rates',
            frequency: 'quarterly',
            dueDate: 'Monthly/Quarterly'
          },
          {
            type: 'Percentage Tax',
            description: 'Alternative to VAT for smaller businesses',
            rate: '3%',
            frequency: 'quarterly'
          },
          {
            type: 'VAT',
            description: 'For businesses with gross sales > ₱3M',
            rate: '12%',
            frequency: 'monthly'
          }
        ],
        forms: ['BIR Form 1701', 'BIR Form 2551Q', 'BIR Form 2550M'],
        deadlines: [
          {
            description: 'Monthly VAT Declaration',
            date: '20th of following month',
            frequency: 'monthly',
            form: 'BIR Form 2550M'
          },
          {
            description: 'Quarterly Income Tax Return',
            date: 'Last day of month following quarter',
            frequency: 'quarterly',
            form: 'BIR Form 1701Q'
          }
        ],
        requirements: [
          'Business registration',
          'TIN registration',
          'Books of accounts',
          'Official receipts',
          'Mayor\'s permit'
        ],
        examples: [
          'Online sellers',
          'Freelance consultants',
          'Small retail shop owners',
          'Service providers'
        ]
      },
      {
        id: 'professionals',
        name: 'Professionals',
        description: 'Licensed professionals in private practice',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Tax on professional income',
            rate: '8% or graduated rates',
            frequency: 'quarterly'
          },
          {
            type: 'Percentage Tax',
            description: 'Alternative to VAT',
            rate: '3%',
            frequency: 'quarterly'
          },
          {
            type: 'Professional Tax',
            description: 'Local government tax',
            frequency: 'annually'
          }
        ],
        forms: ['BIR Form 1701', 'BIR Form 2551Q'],
        deadlines: [
          {
            description: 'Quarterly Income Tax Return',
            date: 'Last day of month following quarter',
            frequency: 'quarterly',
            form: 'BIR Form 1701Q'
          }
        ],
        requirements: [
          'Professional license',
          'TIN registration',
          'Professional ID',
          'Books of accounts',
          'Official receipts'
        ],
        examples: [
          'Doctors',
          'Lawyers',
          'Engineers',
          'Accountants',
          'Architects'
        ]
      },
      {
        id: 'freelancers',
        name: 'Freelancers',
        description: 'Independent contractors and gig workers',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Tax on freelance income',
            rate: '8% or graduated rates',
            frequency: 'quarterly'
          },
          {
            type: 'Percentage Tax',
            description: 'For those not VAT-registered',
            rate: '3%',
            frequency: 'quarterly'
          }
        ],
        forms: ['BIR Form 1701', 'BIR Form 2551Q'],
        deadlines: [
          {
            description: 'Quarterly Income Tax Return',
            date: 'Last day of month following quarter',
            frequency: 'quarterly',
            form: 'BIR Form 1701Q'
          }
        ],
        requirements: [
          'TIN registration',
          'Books of accounts (simplified)',
          'Official receipts',
          'Valid ID'
        ],
        examples: [
          'Graphic designers',
          'Writers',
          'Web developers',
          'Virtual assistants',
          'Content creators'
        ]
      }
    ]
  },
  {
    id: 'corporations',
    name: 'Corporations',
    description: 'Tax obligations for corporate entities',
    icon: 'Building',
    subcategories: [
      {
        id: 'domestic-corporations',
        name: 'Domestic Corporations',
        description: 'Corporations organized under Philippine law',
        obligations: [
          {
            type: 'Corporate Income Tax',
            description: 'Tax on corporate income',
            rate: '25%',
            frequency: 'annually',
            dueDate: 'April 15'
          },
          {
            type: 'Minimum Corporate Income Tax',
            description: 'Minimum tax based on gross income',
            rate: '2%',
            frequency: 'annually'
          },
          {
            type: 'VAT',
            description: 'Value-added tax on sales',
            rate: '12%',
            frequency: 'monthly'
          },
          {
            type: 'Withholding Taxes',
            description: 'Various withholding tax obligations',
            frequency: 'monthly'
          }
        ],
        forms: ['BIR Form 1702', 'BIR Form 2550M', 'BIR Form 1601C'],
        deadlines: [
          {
            description: 'Annual Corporate Income Tax Return',
            date: 'April 15',
            frequency: 'annually',
            form: 'BIR Form 1702'
          },
          {
            description: 'Monthly VAT Declaration',
            date: '20th of following month',
            frequency: 'monthly',
            form: 'BIR Form 2550M'
          }
        ],
        requirements: [
          'SEC registration',
          'TIN registration',
          'Audited financial statements',
          'Corporate books and records',
          'Board resolutions'
        ],
        examples: [
          'Manufacturing companies',
          'Trading corporations',
          'Service companies',
          'Holding companies'
        ]
      },
      {
        id: 'foreign-corporations',
        name: 'Foreign Corporations',
        description: 'Foreign corporations doing business in the Philippines',
        obligations: [
          {
            type: 'Corporate Income Tax',
            description: 'Tax on Philippine-sourced income',
            rate: '30%',
            frequency: 'annually'
          },
          {
            type: 'Branch Profit Remittance Tax',
            description: 'Tax on profits remitted abroad',
            rate: '15%',
            frequency: 'as-needed'
          }
        ],
        forms: ['BIR Form 1702', 'BIR Form 1702-EX'],
        deadlines: [
          {
            description: 'Annual Corporate Income Tax Return',
            date: 'April 15',
            frequency: 'annually',
            form: 'BIR Form 1702'
          }
        ],
        requirements: [
          'SEC license to transact business',
          'TIN registration',
          'Audited financial statements',
          'Transfer pricing documentation'
        ],
        examples: [
          'Foreign branch offices',
          'Multinational subsidiaries',
          'Regional headquarters'
        ]
      }
    ]
  },
  {
    id: 'msmes',
    name: 'MSMEs',
    description: 'Micro, Small, and Medium Enterprises',
    icon: 'Store',
    subcategories: [
      {
        id: 'micro-enterprises',
        name: 'Micro Enterprises',
        description: 'Very small businesses with minimal operations',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Simplified tax computation',
            rate: '8% on gross sales',
            frequency: 'quarterly'
          },
          {
            type: 'Percentage Tax',
            description: 'Alternative to VAT',
            rate: '3%',
            frequency: 'quarterly'
          }
        ],
        forms: ['BIR Form 1701Q', 'BIR Form 2551Q'],
        deadlines: [
          {
            description: 'Quarterly Income Tax Return',
            date: 'Last day of month following quarter',
            frequency: 'quarterly',
            form: 'BIR Form 1701Q'
          }
        ],
        requirements: [
          'Business registration',
          'TIN registration',
          'Simplified books of accounts',
          'Barangay clearance'
        ],
        examples: [
          'Sari-sari stores',
          'Street vendors',
          'Home-based businesses',
          'Single proprietorships'
        ]
      },
      {
        id: 'small-medium-enterprises',
        name: 'Small & Medium Enterprises',
        description: 'Growing businesses with structured operations',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Corporate or individual rates',
            rate: '25% or graduated rates',
            frequency: 'annually'
          },
          {
            type: 'VAT',
            description: 'For businesses with sales > ₱3M',
            rate: '12%',
            frequency: 'monthly'
          }
        ],
        forms: ['BIR Form 1701/1702', 'BIR Form 2550M'],
        deadlines: [
          {
            description: 'Annual Income Tax Return',
            date: 'April 15',
            frequency: 'annually'
          }
        ],
        requirements: [
          'DTI/SEC registration',
          'TIN registration',
          'Complete books of accounts',
          'Financial statements'
        ],
        examples: [
          'Manufacturing SMEs',
          'Tech startups',
          'Restaurant chains',
          'Construction companies'
        ]
      }
    ]
  },
  {
    id: 'ngos-cooperatives',
    name: 'NGOs / Cooperatives',
    description: 'Non-profit organizations and cooperatives',
    icon: 'Heart',
    subcategories: [
      {
        id: 'ngos',
        name: 'Non-Governmental Organizations',
        description: 'Non-profit organizations serving public interest',
        obligations: [
          {
            type: 'Income Tax Exemption',
            description: 'Generally exempt from income tax',
            rate: 'Exempt',
            frequency: 'annually'
          },
          {
            type: 'Unrelated Business Income Tax',
            description: 'Tax on commercial activities',
            rate: '30%',
            frequency: 'annually'
          }
        ],
        forms: ['BIR Form 1702-EX'],
        deadlines: [
          {
            description: 'Annual Information Return',
            date: 'April 15',
            frequency: 'annually',
            form: 'BIR Form 1702-EX'
          }
        ],
        requirements: [
          'SEC registration as non-stock corporation',
          'Tax exemption certificate',
          'TIN registration',
          'Annual financial reports'
        ],
        examples: [
          'Charitable institutions',
          'Educational foundations',
          'Religious organizations',
          'Environmental groups'
        ]
      },
      {
        id: 'cooperatives',
        name: 'Cooperatives',
        description: 'Member-owned organizations for mutual benefit',
        obligations: [
          {
            type: 'Income Tax',
            description: 'Special rates for cooperatives',
            rate: '10% on net surplus',
            frequency: 'annually'
          },
          {
            type: 'Cooperative Development Authority Tax',
            description: 'CDA annual registration fee',
            frequency: 'annually'
          }
        ],
        forms: ['BIR Form 1702-CF'],
        deadlines: [
          {
            description: 'Annual Income Tax Return',
            date: 'April 15',
            frequency: 'annually',
            form: 'BIR Form 1702-CF'
          }
        ],
        requirements: [
          'CDA registration',
          'TIN registration',
          'Cooperative bylaws',
          'Member records'
        ],
        examples: [
          'Credit cooperatives',
          'Agricultural cooperatives',
          'Multi-purpose cooperatives',
          'Transport cooperatives'
        ]
      }
    ]
  }
];