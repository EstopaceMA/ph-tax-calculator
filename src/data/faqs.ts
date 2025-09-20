import { FAQ } from '../types/directory';

export const FAQS: FAQ[] = [
  // General Tax Questions
  {
    id: 'what-is-tin',
    question: 'What is a TIN and how do I get one?',
    questionFil: 'Ano ang TIN at paano ko makakakuha?',
    answer: 'A Tax Identification Number (TIN) is a unique number assigned by the BIR to identify taxpayers. To get a TIN, you need to register with the BIR by submitting the appropriate registration form (1901 for individuals, 1902 for corporations) along with required documents to your assigned Revenue District Office (RDO).',
    answerFil: 'Ang Tax Identification Number (TIN) ay natatanging numero na ibinibigay ng BIR para sa mga nagbabayad ng buwis. Para makakuha ng TIN, kailangan mong mag-register sa BIR sa pamamagitan ng pagsusumite ng tamang registration form (1901 para sa mga indibidwal, 1902 para sa mga korporasyon) kasama ang mga kinakailangang dokumento sa inyong assigned Revenue District Office (RDO).',
    category: 'general',
    tags: ['TIN', 'registration', 'BIR'],
    relatedForms: ['1901', '1902']
  },
  {
    id: 'vat-vs-percentage-tax',
    question: 'What\'s the difference between VAT and percentage tax?',
    questionFil: 'Ano ang pagkakaiba ng VAT at percentage tax?',
    answer: 'VAT (Value Added Tax) is a 12% tax on goods and services for businesses with annual gross sales exceeding ₱3 million. Percentage tax is a 3% tax on gross quarterly sales for businesses not registered for VAT (annual sales ≤ ₱3 million). You cannot be subject to both taxes simultaneously.',
    answerFil: 'Ang VAT (Value Added Tax) ay 12% na buwis sa mga goods at services para sa mga negosyong may taunang gross sales na higit sa ₱3 milyon. Ang percentage tax ay 3% na buwis sa gross quarterly sales para sa mga negosyong hindi naka-register para sa VAT (taunang sales ≤ ₱3 milyon). Hindi ka maaaring subject sa dalawang buwis na ito nang sabay-sabay.',
    category: 'business',
    tags: ['VAT', 'percentage tax', 'business tax'],
    relatedForms: ['2550M', '2551Q']
  },
  {
    id: 'when-file-annual-return',
    question: 'When should I file my annual income tax return?',
    questionFil: 'Kailan ko dapat i-file ang annual income tax return ko?',
    answer: 'Annual income tax returns must be filed by April 15 of the year following the taxable year. For example, your 2024 income tax return should be filed by April 15, 2025. If the deadline falls on a weekend or holiday, it is extended to the next business day.',
    answerFil: 'Ang annual income tax returns ay dapat i-file bago mag-April 15 ng taong sumunod sa taxable year. Halimbawa, ang inyong 2024 income tax return ay dapat i-file bago mag-April 15, 2025. Kung ang deadline ay nakatapat sa weekend o holiday, ito ay na-extend sa susunod na business day.',
    category: 'individual',
    tags: ['annual return', 'deadline', 'filing'],
    relatedForms: ['1700', '1701', '1702']
  },
  {
    id: 'withholding-tax-explained',
    question: 'What is withholding tax and who pays it?',
    questionFil: 'Ano ang withholding tax at sino ang nagbabayad nito?',
    answer: 'Withholding tax is tax deducted at source from payments made to individuals or businesses. The payor (employer, client, or business) withholds the tax and remits it to the BIR on behalf of the payee. There are different types: creditable withholding tax (can be claimed as tax credit) and final withholding tax (final tax on passive income).',
    answerFil: 'Ang withholding tax ay buwis na nakakaltas sa pinagmulan ng mga bayad sa mga indibidwal o negosyo. Ang nagbabayad (employer, client, o negosyo) ang nangakaltas ng buwis at nagrremit nito sa BIR para sa taong tumatanggap ng bayad. May iba\'t ibang uri: creditable withholding tax (maaaring gamitin bilang tax credit) at final withholding tax (final na buwis sa passive income).',
    category: 'withholding',
    tags: ['withholding tax', 'creditable', 'final', 'employer'],
    relatedForms: ['1601C', '1601E', '1601F']
  },
  {
    id: 'sss-philhealth-pagibig-rates',
    question: 'What are the current contribution rates for SSS, PhilHealth, and Pag-IBIG?',
    questionFil: 'Ano ang kasalukuyang contribution rates para sa SSS, PhilHealth, at Pag-IBIG?',
    answer: 'For 2025: SSS - Employee contributes 5%, employer contributes 9.5% (based on salary brackets from ₱4,000 to ₱35,000). PhilHealth - 2.5% each for employee and employer (minimum ₱550/month, maximum ₱5,500/month). Pag-IBIG - 1% for salaries ≤₱1,500, 2% for salaries >₱1,500 (maximum ₱300/month each).',
    answerFil: 'Para sa 2025: SSS - Ang empleyado ay nag-aambag ng 5%, ang employer ay 9.5% (base sa salary brackets mula ₱4,000 hanggang ₱35,000). PhilHealth - 2.5% bawat isa para sa empleyado at employer (minimum ₱550/buwan, maximum ₱5,500/buwan). Pag-IBIG - 1% para sa sweldo na ≤₱1,500, 2% para sa sweldo na >₱1,500 (maximum ₱300/buwan bawat isa).',
    category: 'contributions',
    tags: ['SSS', 'PhilHealth', 'Pag-IBIG', 'contributions', 'rates'],
    relatedForms: ['2316']
  },
  {
    id: 'tax-exemptions-deductions',
    question: 'What are the common tax exemptions and deductions available?',
    questionFil: 'Ano ang mga karaniwang tax exemptions at deductions na available?',
    answer: 'Common exemptions include: 13th month pay and bonuses up to ₱90,000, SSS/GSIS benefits, compensation for damages, life insurance proceeds. Common deductions include: mandatory contributions (SSS, PhilHealth, Pag-IBIG), union dues, professional fees and licenses. Additional deductions may apply for business expenses if you\'re self-employed.',
    answerFil: 'Mga karaniwang exemptions: 13th month pay at bonuses hanggang ₱90,000, SSS/GSIS benefits, compensation para sa damages, life insurance proceeds. Mga karaniwang deductions: mandatory contributions (SSS, PhilHealth, Pag-IBIG), union dues, professional fees at licenses. Maaaring may karagdagang deductions para sa business expenses kung self-employed kayo.',
    category: 'individual',
    tags: ['exemptions', 'deductions', '13th month', 'benefits'],
    relatedForms: ['1700', '1701']
  },
  {
    id: 'quarterly-vs-annual-filing',
    question: 'What\'s the difference between quarterly and annual tax filing?',
    questionFil: 'Ano ang pagkakaiba ng quarterly at annual tax filing?',
    answer: 'Quarterly filing (every 3 months) is required for self-employed individuals and businesses to pay taxes on current income. Annual filing is a summary of the entire year\'s income and taxes. Quarterly payments are credited against your annual tax liability. If you paid more quarterly than your annual tax, you may get a refund.',
    answerFil: 'Ang quarterly filing (bawat 3 buwan) ay kinakailangan para sa mga self-employed at negosyo para magbayad ng buwis sa kasalukuyang kita. Ang annual filing ay buod ng buong taong kita at buwis. Ang quarterly payments ay naka-credit sa inyong annual tax liability. Kung mas marami kayong nabayad quarterly kaysa sa annual tax ninyo, maaari kayong makatanggap ng refund.',
    category: 'business',
    tags: ['quarterly', 'annual', 'filing', 'self-employed'],
    relatedForms: ['1701Q', '1701', '1702Q', '1702']
  },
  {
    id: 'capital-gains-tax-real-property',
    question: 'How is capital gains tax computed on sale of real property?',
    questionFil: 'Paano kinokompute ang capital gains tax sa pagbebenta ng real property?',
    answer: 'Capital gains tax on sale of real property is 6% of the gross selling price or fair market value, whichever is higher. This tax must be paid within 30 days from the date of sale and is a requirement for transferring the title. The tax is separate from income tax and is final.',
    answerFil: 'Ang capital gains tax sa pagbebenta ng real property ay 6% ng gross selling price o fair market value, alinman ang mas mataas. Ang buwis na ito ay dapat bayaran sa loob ng 30 araw mula sa petsa ng pagbebenta at kinakailangan para sa paglilipat ng title. Ang buwis na ito ay hiwalay sa income tax at final na.',
    category: 'property',
    tags: ['capital gains', 'real property', 'sale', '6%'],
    relatedForms: ['1706']
  },
  {
    id: 'bir-form-2316-explained',
    question: 'What is BIR Form 2316 and when do I need it?',
    questionFil: 'Ano ang BIR Form 2316 at kailan ko ito kailangan?',
    answer: 'BIR Form 2316 is the Certificate of Compensation Payment/Tax Withheld issued by your employer. It shows your total compensation for the year and taxes withheld. You need this form when filing your annual income tax return, applying for loans, or for employment verification. Employers must provide this by January 31.',
    answerFil: 'Ang BIR Form 2316 ay Certificate of Compensation Payment/Tax Withheld na inisyu ng inyong employer. Ipinapakita nito ang inyong kabuuang compensation para sa taon at mga buwis na nakaltas. Kailangan ninyo ang form na ito kapag nag-file ng annual income tax return, nag-apply ng loan, o para sa employment verification. Ang mga employer ay dapat magbigay nito bago mag-January 31.',
    category: 'individual',
    tags: ['2316', 'certificate', 'compensation', 'employer'],
    relatedForms: ['2316', '1700']
  },
  {
    id: 'vat-registration-requirement',
    question: 'When am I required to register for VAT?',
    questionFil: 'Kailan ako required na mag-register para sa VAT?',
    answer: 'You are required to register for VAT when your annual gross sales or receipts exceed ₱3 million. You must register within 10 days after meeting this threshold. Once VAT-registered, you cannot revert to percentage tax unless your annual sales fall below ₱1.5 million for two consecutive years.',
    answerFil: 'Kailangan ninyong mag-register para sa VAT kapag ang inyong taunang gross sales o receipts ay lumalagpas sa ₱3 milyon. Dapat kayong mag-register sa loob ng 10 araw pagkatapos maabot ang threshold na ito. Kapag naka-VAT register na kayo, hindi na kayo makakabalik sa percentage tax maliban kung ang inyong taunang sales ay bumaba sa ₱1.5 milyon ng dalawang magkakasunod na taon.',
    category: 'business',
    tags: ['VAT registration', '3 million', 'threshold', 'requirement'],
    relatedForms: ['1903']
  },
  {
    id: 'penalties-late-filing',
    question: 'What are the penalties for late filing of tax returns?',
    questionFil: 'Ano ang mga penalties sa late filing ng tax returns?',
    answer: 'Penalties for late filing include: 25% surcharge on the tax due for filing one day to 30 days late, 50% surcharge for filing more than 30 days late, plus 20% interest per annum on the unpaid amount. There\'s also a compromise penalty that may be lower if you voluntarily file before audit.',
    answerFil: 'Mga penalties para sa late filing: 25% surcharge sa tax due para sa pag-file ng isang araw hanggang 30 araw na late, 50% surcharge para sa pag-file ng mahigit 30 araw na late, plus 20% interest per annum sa hindi nabayarang halaga. May compromise penalty din na maaaring mas mababa kung kusang mag-file bago ma-audit.',
    category: 'general',
    tags: ['penalties', 'late filing', 'surcharge', 'interest'],
    relatedForms: ['1700', '1701', '1702']
  }
];