import { BIRForm } from '../types/directory';

export const BIR_FORMS: BIRForm[] = [
  // Individual Forms
  {
    formNumber: '1700',
    title: 'Annual Income Tax Return',
    description: 'Annual income tax return for individual taxpayers earning purely compensation income',
    category: 'individual',
    frequency: 'annually',
    dueDate: 'April 15',
    applicableTo: ['Employees', 'Pensioners'],
    instructions: [
      'Gather all BIR Form 2316 from employers',
      'Compute total compensation income',
      'Determine allowable deductions',
      'Calculate tax due or refund',
      'File online via eBIRForms or manually'
    ],
    relatedForms: ['2316', '1701']
  },
  {
    formNumber: '1701',
    title: 'Annual Income Tax Return (Mixed Income)',
    description: 'Annual income tax return for individuals with business/professional income',
    category: 'individual',
    frequency: 'annually',
    dueDate: 'April 15',
    applicableTo: ['Self-employed', 'Professionals', 'Business owners'],
    instructions: [
      'Prepare books of accounts and financial statements',
      'Compute gross income from all sources',
      'Determine allowable business deductions',
      'Calculate taxable income and tax due',
      'Submit together with supporting documents'
    ],
    relatedForms: ['1701Q', '2551Q']
  },
  {
    formNumber: '1701Q',
    title: 'Quarterly Income Tax Return',
    description: 'Quarterly income tax return for individuals with business/professional income',
    category: 'individual',
    frequency: 'quarterly',
    dueDate: 'Last day of month following quarter',
    applicableTo: ['Self-employed', 'Professionals', 'Business owners'],
    instructions: [
      'Compute quarterly gross income',
      'Apply applicable tax rate (8% or graduated)',
      'Deduct creditable withholding taxes',
      'Pay any balance due',
      'File within deadline to avoid penalties'
    ],
    relatedForms: ['1701', '2551Q']
  },
  {
    formNumber: '2316',
    title: 'Certificate of Compensation Payment/Tax Withheld',
    description: 'Certificate issued by employers showing compensation paid and taxes withheld',
    category: 'individual',
    frequency: 'annually',
    dueDate: 'January 31',
    applicableTo: ['All employees'],
    instructions: [
      'Employer prepares certificate for each employee',
      'Shows total compensation for the year',
      'Indicates taxes withheld by employer',
      'Used by employees for annual tax filing',
      'Must be provided by January 31'
    ],
    relatedForms: ['1700', '1601C']
  },

  // Business Forms
  {
    formNumber: '1702',
    title: 'Annual Income Tax Return (Corporation)',
    description: 'Annual income tax return for domestic and foreign corporations',
    category: 'business',
    frequency: 'annually',
    dueDate: 'April 15',
    applicableTo: ['Domestic corporations', 'Foreign corporations'],
    instructions: [
      'Prepare audited financial statements',
      'Compute taxable income',
      'Apply corporate income tax rate (25% or 30%)',
      'Consider minimum corporate income tax',
      'Submit with complete supporting documents'
    ],
    relatedForms: ['1702Q', '1702-EX']
  },
  {
    formNumber: '1702Q',
    title: 'Quarterly Income Tax Return (Corporation)',
    description: 'Quarterly income tax return for corporations',
    category: 'business',
    frequency: 'quarterly',
    dueDate: 'Last day of month following quarter',
    applicableTo: ['All corporations'],
    instructions: [
      'Compute quarterly taxable income',
      'Apply current income tax rate',
      'Consider prior year\'s minimum tax',
      'Pay quarterly installment',
      'File return within deadline'
    ],
    relatedForms: ['1702']
  },
  {
    formNumber: '2550M',
    title: 'Monthly Value Added Tax Declaration',
    description: 'Monthly VAT return for VAT-registered taxpayers',
    category: 'business',
    frequency: 'monthly',
    dueDate: '20th of following month',
    applicableTo: ['VAT-registered businesses'],
    instructions: [
      'Summarize all VAT-able sales for the month',
      'Compute output VAT (12% of sales)',
      'Summarize all VAT-able purchases',
      'Compute input VAT from purchases',
      'Determine net VAT payable or excess credits'
    ],
    relatedForms: ['2550Q', '2551Q']
  },
  {
    formNumber: '2550Q',
    title: 'Quarterly Value Added Tax Declaration',
    description: 'Quarterly summary of monthly VAT declarations',
    category: 'business',
    frequency: 'quarterly',
    dueDate: '25th day of month following quarter',
    applicableTo: ['VAT-registered businesses'],
    instructions: [
      'Consolidate monthly VAT declarations',
      'Reconcile with books of accounts',
      'Verify input tax claims',
      'Submit quarterly summary',
      'Ensure consistency with monthly filings'
    ],
    relatedForms: ['2550M']
  },
  {
    formNumber: '2551Q',
    title: 'Quarterly Percentage Tax Return',
    description: 'Quarterly percentage tax return for non-VAT registered businesses',
    category: 'business',
    frequency: 'quarterly',
    dueDate: 'Last day of month following quarter',
    applicableTo: ['Non-VAT registered businesses'],
    instructions: [
      'Compute gross quarterly sales/receipts',
      'Apply 3% percentage tax rate',
      'Deduct allowable tax credits',
      'Pay net percentage tax due',
      'Maintain supporting sales records'
    ],
    relatedForms: ['1701Q']
  },

  // Withholding Tax Forms
  {
    formNumber: '1601C',
    title: 'Monthly Remittance Return of Income Tax Withheld',
    description: 'Monthly return for creditable withholding tax on compensation',
    category: 'withholding',
    frequency: 'monthly',
    dueDate: '10th of following month',
    applicableTo: ['All employers', 'Withholding agents'],
    instructions: [
      'List all employees and compensation paid',
      'Compute withholding tax per employee',
      'Summarize total taxes withheld',
      'Remit taxes withheld to BIR',
      'Submit return with payment'
    ],
    relatedForms: ['1601E', '2316']
  },
  {
    formNumber: '1601E',
    title: 'Monthly Remittance Return of Expanded Withholding Tax',
    description: 'Monthly return for expanded withholding tax on various payments',
    category: 'withholding',
    frequency: 'monthly',
    dueDate: '10th of following month',
    applicableTo: ['Withholding agents', 'Government agencies', 'Large corporations'],
    instructions: [
      'Identify all payments subject to EWT',
      'Apply appropriate withholding tax rates',
      'Prepare detailed list of payees',
      'Compute total taxes withheld',
      'Remit and file within deadline'
    ],
    relatedForms: ['1601C', '1601F']
  },
  {
    formNumber: '1601F',
    title: 'Monthly Remittance Return of Final Tax Withheld',
    description: 'Monthly return for final withholding tax on passive income',
    category: 'withholding',
    frequency: 'monthly',
    dueDate: '10th of following month',
    applicableTo: ['Banks', 'Financial institutions', 'Withholding agents'],
    instructions: [
      'Identify payments of passive income',
      'Apply final withholding tax rates',
      'Prepare payee information',
      'Compute total final taxes withheld',
      'Submit return with tax payment'
    ],
    relatedForms: ['1601E']
  },

  // Registration Forms
  {
    formNumber: '1901',
    title: 'Application for Registration',
    description: 'Application for TIN and registration for individuals',
    category: 'registration',
    frequency: 'as-needed',
    applicableTo: ['New individual taxpayers'],
    instructions: [
      'Accomplish application form completely',
      'Attach required supporting documents',
      'Submit to appropriate RDO',
      'Pay registration fee if applicable',
      'Receive TIN and certificate of registration'
    ],
    relatedForms: ['1902', '1903']
  },
  {
    formNumber: '1902',
    title: 'Application for Registration (Corporation)',
    description: 'Application for TIN and registration for corporations',
    category: 'registration',
    frequency: 'as-needed',
    applicableTo: ['New corporations'],
    instructions: [
      'Submit SEC certificate of incorporation',
      'Accomplish registration form',
      'Provide corporate documents',
      'Pay registration fees',
      'Receive corporate TIN'
    ],
    relatedForms: ['1901', '1903']
  },
  {
    formNumber: '1903',
    title: 'Application for Registration (Partnership)',
    description: 'Application for TIN and registration for partnerships',
    category: 'registration',
    frequency: 'as-needed',
    applicableTo: ['Partnerships'],
    instructions: [
      'Submit partnership agreement',
      'Accomplish application form',
      'Provide partner information',
      'Pay applicable fees',
      'Obtain partnership TIN'
    ],
    relatedForms: ['1901', '1902']
  },

  // Other Important Forms
  {
    formNumber: '0605',
    title: 'Payment Form',
    description: 'General payment form for various BIR payments',
    category: 'other',
    frequency: 'as-needed',
    applicableTo: ['All taxpayers'],
    instructions: [
      'Indicate type of tax payment',
      'Specify taxable period',
      'Enter amount to be paid',
      'Present to authorized agent bank',
      'Keep validated copy as proof'
    ]
  },
  {
    formNumber: '1706',
    title: 'Capital Gains Tax Return',
    description: 'Return for capital gains tax on sale of real property',
    category: 'other',
    frequency: 'as-needed',
    dueDate: '30 days from sale',
    applicableTo: ['Sellers of real property'],
    instructions: [
      'Determine gross selling price',
      'Compute capital gains tax (6%)',
      'Prepare supporting documents',
      'File within 30 days of sale',
      'Pay tax before transfer of title'
    ]
  },
  {
    formNumber: '1801',
    title: 'Donor\'s Tax Return',
    description: 'Return for donor\'s tax on gifts and donations',
    category: 'other',
    frequency: 'as-needed',
    dueDate: '30 days from donation',
    applicableTo: ['Donors'],
    instructions: [
      'Determine fair market value of gift',
      'Apply donor\'s tax rates',
      'Prepare deed of donation',
      'File within 30 days',
      'Pay tax before transfer'
    ]
  },
  {
    formNumber: '1802',
    title: 'Estate Tax Return',
    description: 'Return for estate tax on inherited property',
    category: 'other',
    frequency: 'as-needed',
    dueDate: '1 year from death',
    applicableTo: ['Heirs', 'Estate administrators'],
    instructions: [
      'Inventory all estate assets',
      'Determine gross estate value',
      'Compute allowable deductions',
      'Apply estate tax rates',
      'File within one year of death'
    ]
  }
];