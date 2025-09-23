import { TaxBracket, ContributionRates, SSSBracket } from '../types/tax';

// 2025 TRAIN Tax Brackets
// reference: https://ntrc.gov.ph/images/train/Tax-Changes-You-Need-to-Know-under-RA-10963.pdf
export const TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 250000, rate: 0.00, baseAmount: 0 },
  { min: 250000, max: 400000, rate: 0.15, baseAmount: 0 },
  { min: 400000, max: 800000, rate: 0.20, baseAmount: 22500 },
  { min: 800000, max: 2000000, rate: 0.25, baseAmount: 102500 },
  { min: 2000000, max: 8000000, rate: 0.30, baseAmount: 402500 },
  { min: 8000000, max: Number.MAX_SAFE_INTEGER, rate: 0.35, baseAmount: 2202500 }
];



// SSS Contribution Table 2025 (Effective January 2025)
// reference: https://www.sss.gov.ph/wp-content/uploads/2024/12/CI-2024-006-Publication.pdf
// reference2: https://www.sss.gov.ph/wp-content/uploads/2024/12/Cir-2024-006-Employers-scaled.jpg
export const SSS_BRACKETS: SSSBracket[] = [
  {
    rangeOfCompensation: { min: 0, max: 5249.99 },
    monthlySalaryCredit: { regularSS: 5000, mpf: 0, total: 5000 },
    employerAmountOfContribution: { regularSS: 500, mpf: 0, ec: 10, total: 510 },
    employeeAmountOfContribution: { regularSS: 250, mpf: 0, total: 250 },
    totalContribution: 760
  },
  {
    rangeOfCompensation: { min: 5250, max: 5749.99 },
    monthlySalaryCredit: { regularSS: 5500, mpf: 0, total: 5500 },
    employerAmountOfContribution: { regularSS: 550, mpf: 0, ec: 10, total: 560 },
    employeeAmountOfContribution: { regularSS: 275, mpf: 0, total: 275 },
    totalContribution: 835
  },
  {
    rangeOfCompensation: { min: 5750, max: 6249.99 },
    monthlySalaryCredit: { regularSS: 6000, mpf: 0, total: 6000 },
    employerAmountOfContribution: { regularSS: 600, mpf: 0, ec: 10, total: 610 },
    employeeAmountOfContribution: { regularSS: 300, mpf: 0, total: 300 },
    totalContribution: 910
  },
  {
    rangeOfCompensation: { min: 6250, max: 6749.99 },
    monthlySalaryCredit: { regularSS: 6500, mpf: 0, total: 6500 },
    employerAmountOfContribution: { regularSS: 650, mpf: 0, ec: 10, total: 660 },
    employeeAmountOfContribution: { regularSS: 325, mpf: 0, total: 325 },
    totalContribution: 985
  },
  {
    rangeOfCompensation: { min: 6750, max: 7249.99 },
    monthlySalaryCredit: { regularSS: 7000, mpf: 0, total: 7000 },
    employerAmountOfContribution: { regularSS: 700, mpf: 0, ec: 10, total: 710 },
    employeeAmountOfContribution: { regularSS: 350, mpf: 0, total: 350 },
    totalContribution: 1060
  },
  {
    rangeOfCompensation: { min: 7250, max: 7749.99 },
    monthlySalaryCredit: { regularSS: 7500, mpf: 0, total: 7500 },
    employerAmountOfContribution: { regularSS: 750, mpf: 0, ec: 10, total: 760 },
    employeeAmountOfContribution: { regularSS: 375, mpf: 0, total: 375 },
    totalContribution: 1135
  },
  {
    rangeOfCompensation: { min: 7750, max: 8249.99 },
    monthlySalaryCredit: { regularSS: 8000, mpf: 0, total: 8000 },
    employerAmountOfContribution: { regularSS: 800, mpf: 0, ec: 10, total: 810 },
    employeeAmountOfContribution: { regularSS: 400, mpf: 0, total: 400 },
    totalContribution: 1210
  },
  {
    rangeOfCompensation: { min: 8250, max: 8749.99 },
    monthlySalaryCredit: { regularSS: 8500, mpf: 0, total: 8500 },
    employerAmountOfContribution: { regularSS: 850, mpf: 0, ec: 10, total: 860 },
    employeeAmountOfContribution: { regularSS: 425, mpf: 0, total: 425 },
    totalContribution: 1285
  },
  {
    rangeOfCompensation: { min: 8750, max: 9249.99 },
    monthlySalaryCredit: { regularSS: 9000, mpf: 0, total: 9000 },
    employerAmountOfContribution: { regularSS: 900, mpf: 0, ec: 10, total: 910 },
    employeeAmountOfContribution: { regularSS: 450, mpf: 0, total: 450 },
    totalContribution: 1360
  },
  {
    rangeOfCompensation: { min: 9250, max: 9749.99 },
    monthlySalaryCredit: { regularSS: 9500, mpf: 0, total: 9500 },
    employerAmountOfContribution: { regularSS: 950, mpf: 0, ec: 10, total: 960 },
    employeeAmountOfContribution: { regularSS: 475, mpf: 0, total: 475 },
    totalContribution: 1435
  },
  {
    rangeOfCompensation: { min: 9750, max: 10249.99 },
    monthlySalaryCredit: { regularSS: 10000, mpf: 0, total: 10000 },
    employerAmountOfContribution: { regularSS: 1000, mpf: 0, ec: 10, total: 1010 },
    employeeAmountOfContribution: { regularSS: 500, mpf: 0, total: 500 },
    totalContribution: 1510
  },
  {
    rangeOfCompensation: { min: 10250, max: 10749.99 },
    monthlySalaryCredit: { regularSS: 10500, mpf: 0, total: 10500 },
    employerAmountOfContribution: { regularSS: 1050, mpf: 0, ec: 10, total: 1060 },
    employeeAmountOfContribution: { regularSS: 525, mpf: 0, total: 525 },
    totalContribution: 1585
  },
  {
    rangeOfCompensation: { min: 10750, max: 11249.99 },
    monthlySalaryCredit: { regularSS: 11000, mpf: 0, total: 11000 },
    employerAmountOfContribution: { regularSS: 1100, mpf: 0, ec: 10, total: 1110 },
    employeeAmountOfContribution: { regularSS: 550, mpf: 0, total: 550 },
    totalContribution: 1660
  },
  {
    rangeOfCompensation: { min: 11250, max: 11749.99 },
    monthlySalaryCredit: { regularSS: 11500, mpf: 0, total: 11500 },
    employerAmountOfContribution: { regularSS: 1150, mpf: 0, ec: 10, total: 1160 },
    employeeAmountOfContribution: { regularSS: 575, mpf: 0, total: 575 },
    totalContribution: 1735
  },
  {
    rangeOfCompensation: { min: 11750, max: 12249.99 },
    monthlySalaryCredit: { regularSS: 12000, mpf: 0, total: 12000 },
    employerAmountOfContribution: { regularSS: 1200, mpf: 0, ec: 10, total: 1210 },
    employeeAmountOfContribution: { regularSS: 600, mpf: 0, total: 600 },
    totalContribution: 1810
  },
  {
    rangeOfCompensation: { min: 12250, max: 12749.99 },
    monthlySalaryCredit: { regularSS: 12500, mpf: 0, total: 12500 },
    employerAmountOfContribution: { regularSS: 1250, mpf: 0, ec: 10, total: 1260 },
    employeeAmountOfContribution: { regularSS: 625, mpf: 0, total: 625 },
    totalContribution: 1885
  },
  {
    rangeOfCompensation: { min: 12750, max: 13249.99 },
    monthlySalaryCredit: { regularSS: 13000, mpf: 0, total: 13000 },
    employerAmountOfContribution: { regularSS: 1300, mpf: 0, ec: 10, total: 1310 },
    employeeAmountOfContribution: { regularSS: 650, mpf: 0, total: 650 },
    totalContribution: 1960
  },
  {
    rangeOfCompensation: { min: 13250, max: 13749.99 },
    monthlySalaryCredit: { regularSS: 13500, mpf: 0, total: 13500 },
    employerAmountOfContribution: { regularSS: 1350, mpf: 0, ec: 10, total: 1360 },
    employeeAmountOfContribution: { regularSS: 675, mpf: 0, total: 675 },
    totalContribution: 2035
  },
  {
    rangeOfCompensation: { min: 13750, max: 14249.99 },
    monthlySalaryCredit: { regularSS: 14000, mpf: 0, total: 14000 },
    employerAmountOfContribution: { regularSS: 1400, mpf: 0, ec: 10, total: 1410 },
    employeeAmountOfContribution: { regularSS: 700, mpf: 0, total: 700 },
    totalContribution: 2110
  },
  {
    rangeOfCompensation: { min: 14250, max: 14749.99 },
    monthlySalaryCredit: { regularSS: 14500, mpf: 0, total: 14500 },
    employerAmountOfContribution: { regularSS: 1450, mpf: 0, ec: 10, total: 1460 },
    employeeAmountOfContribution: { regularSS: 725, mpf: 0, total: 725 },
    totalContribution: 2185
  },
  {
    rangeOfCompensation: { min: 14750, max: 15249.99 },
    monthlySalaryCredit: { regularSS: 15000, mpf: 0, total: 15000 },
    employerAmountOfContribution: { regularSS: 1500, mpf: 0, ec: 30, total: 1530 },
    employeeAmountOfContribution: { regularSS: 750, mpf: 0, total: 750 },
    totalContribution: 2280
  },
  {
    rangeOfCompensation: { min: 15250, max: 15749.99 },
    monthlySalaryCredit: { regularSS: 15500, mpf: 0, total: 15500 },
    employerAmountOfContribution: { regularSS: 1550, mpf: 0, ec: 30, total: 1580 },
    employeeAmountOfContribution: { regularSS: 775, mpf: 0, total: 775 },
    totalContribution: 2355
  },
  {
    rangeOfCompensation: { min: 15750, max: 16249.99 },
    monthlySalaryCredit: { regularSS: 16000, mpf: 0, total: 16000 },
    employerAmountOfContribution: { regularSS: 1600, mpf: 0, ec: 30, total: 1630 },
    employeeAmountOfContribution: { regularSS: 800, mpf: 0, total: 800 },
    totalContribution: 2430
  },
  {
    rangeOfCompensation: { min: 16250, max: 16749.99 },
    monthlySalaryCredit: { regularSS: 16500, mpf: 0, total: 16500 },
    employerAmountOfContribution: { regularSS: 1650, mpf: 0, ec: 30, total: 1680 },
    employeeAmountOfContribution: { regularSS: 825, mpf: 0, total: 825 },
    totalContribution: 2505
  },
  {
    rangeOfCompensation: { min: 16750, max: 17249.99 },
    monthlySalaryCredit: { regularSS: 17000, mpf: 0, total: 17000 },
    employerAmountOfContribution: { regularSS: 1700, mpf: 0, ec: 30, total: 1730 },
    employeeAmountOfContribution: { regularSS: 850, mpf: 0, total: 850 },
    totalContribution: 2580
  },
  {
    rangeOfCompensation: { min: 17250, max: 17749.99 },
    monthlySalaryCredit: { regularSS: 17500, mpf: 0, total: 17500 },
    employerAmountOfContribution: { regularSS: 1750, mpf: 0, ec: 30, total: 1780 },
    employeeAmountOfContribution: { regularSS: 875, mpf: 0, total: 875 },
    totalContribution: 2655
  },
  {
    rangeOfCompensation: { min: 17750, max: 18249.99 },
    monthlySalaryCredit: { regularSS: 18000, mpf: 0, total: 18000 },
    employerAmountOfContribution: { regularSS: 1800, mpf: 0, ec: 30, total: 1830 },
    employeeAmountOfContribution: { regularSS: 900, mpf: 0, total: 900 },
    totalContribution: 2730
  },
  {
    rangeOfCompensation: { min: 18250, max: 18749.99 },
    monthlySalaryCredit: { regularSS: 18500, mpf: 0, total: 18500 },
    employerAmountOfContribution: { regularSS: 1850, mpf: 0, ec: 30, total: 1880 },
    employeeAmountOfContribution: { regularSS: 925, mpf: 0, total: 925 },
    totalContribution: 2805
  },
  {
    rangeOfCompensation: { min: 18750, max: 19249.99 },
    monthlySalaryCredit: { regularSS: 19000, mpf: 0, total: 19000 },
    employerAmountOfContribution: { regularSS: 1900, mpf: 0, ec: 30, total: 1930 },
    employeeAmountOfContribution: { regularSS: 950, mpf: 0, total: 950 },
    totalContribution: 2880
  },
  {
    rangeOfCompensation: { min: 19250, max: 19749.99 },
    monthlySalaryCredit: { regularSS: 19500, mpf: 0, total: 19500 },
    employerAmountOfContribution: { regularSS: 1950, mpf: 0, ec: 30, total: 1980 },
    employeeAmountOfContribution: { regularSS: 975, mpf: 0, total: 975 },
    totalContribution: 2955
  },
  {
    rangeOfCompensation: { min: 19750, max: 20249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 0, total: 20000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 0, ec: 30, total: 2030 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 0, total: 1000 },
    totalContribution: 3030
  },
  {
    rangeOfCompensation: { min: 20250, max: 20749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 500, total: 20500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 50, ec: 30, total: 2080 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 25, total: 1025 },
    totalContribution: 3105
  },
  {
    rangeOfCompensation: { min: 20750, max: 21249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 1000, total: 21000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 100, ec: 30, total: 2130 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 50, total: 1050 },
    totalContribution: 3180
  },
  {
    rangeOfCompensation: { min: 21250, max: 21749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 1500, total: 21500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 150, ec: 30, total: 2180 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 75, total: 1075 },
    totalContribution: 3255
  },
  {
    rangeOfCompensation: { min: 21750, max: 22249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 2000, total: 22000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 200, ec: 30, total: 2230 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 100, total: 1100 },
    totalContribution: 3330
  },
  {
    rangeOfCompensation: { min: 22250, max: 22749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 2500, total: 22500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 250, ec: 30, total: 2280 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 125, total: 1125 },
    totalContribution: 3405
  },
  {
    rangeOfCompensation: { min: 22750, max: 23249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 3000, total: 23000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 300, ec: 30, total: 2330 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 150, total: 1150 },
    totalContribution: 3480
  },
  {
    rangeOfCompensation: { min: 23250, max: 23749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 3500, total: 23500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 350, ec: 30, total: 2380 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 175, total: 1175 },
    totalContribution: 3555
  },
  {
    rangeOfCompensation: { min: 23750, max: 24249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 4000, total: 24000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 400, ec: 30, total: 2430 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 200, total: 1200 },
    totalContribution: 3630
  },
  {
    rangeOfCompensation: { min: 24250, max: 24749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 4500, total: 24500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 450, ec: 30, total: 2480 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 225, total: 1225 },
    totalContribution: 3705
  },
  {
    rangeOfCompensation: { min: 24750, max: 25249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 5000, total: 25000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 500, ec: 30, total: 2530 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 250, total: 1250 },
    totalContribution: 3780
  },
  {
    rangeOfCompensation: { min: 25250, max: 25749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 5500, total: 25500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 550, ec: 30, total: 2580 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 275, total: 1275 },
    totalContribution: 3855
  },
  {
    rangeOfCompensation: { min: 25750, max: 26249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 6000, total: 26000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 600, ec: 30, total: 2630 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 300, total: 1300 },
    totalContribution: 3930
  },
  {
    rangeOfCompensation: { min: 26250, max: 26749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 6500, total: 26500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 650, ec: 30, total: 2680 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 325, total: 1325 },
    totalContribution: 4005
  },
  {
    rangeOfCompensation: { min: 26750, max: 27249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 7000, total: 27000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 700, ec: 30, total: 2730 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 350, total: 1350 },
    totalContribution: 4080
  },
  {
    rangeOfCompensation: { min: 27250, max: 27749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 7500, total: 27500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 750, ec: 30, total: 2780 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 375, total: 1375 },
    totalContribution: 4155
  },
  {
    rangeOfCompensation: { min: 27750, max: 28249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 8000, total: 28000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 800, ec: 30, total: 2830 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 400, total: 1400 },
    totalContribution: 4230
  },
  {
    rangeOfCompensation: { min: 28250, max: 28749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 8500, total: 28500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 850, ec: 30, total: 2880 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 425, total: 1425 },
    totalContribution: 4305
  },
  {
    rangeOfCompensation: { min: 28750, max: 29249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 9000, total: 29000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 900, ec: 30, total: 2930 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 450, total: 1450 },
    totalContribution: 4380
  },
  {
    rangeOfCompensation: { min: 29250, max: 29749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 9500, total: 29500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 950, ec: 30, total: 2980 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 475, total: 1475 },
    totalContribution: 4455
  },
  {
    rangeOfCompensation: { min: 29750, max: 30249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 10000, total: 30000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1000, ec: 30, total: 3030 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 500, total: 1500 },
    totalContribution: 4530
  },
  {
    rangeOfCompensation: { min: 30250, max: 30749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 10500, total: 30500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1050, ec: 30, total: 3080 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 525, total: 1525 },
    totalContribution: 4605
  },
  {
    rangeOfCompensation: { min: 30750, max: 31249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 11000, total: 31000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1100, ec: 30, total: 3130 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 550, total: 1550 },
    totalContribution: 4680
  },
  {
    rangeOfCompensation: { min: 31250, max: 31749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 11500, total: 31500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1150, ec: 30, total: 3180 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 575, total: 1575 },
    totalContribution: 4755
  },
  {
    rangeOfCompensation: { min: 31750, max: 32249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 12000, total: 32000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1200, ec: 30, total: 3230 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 600, total: 1600 },
    totalContribution: 4830
  },
  {
    rangeOfCompensation: { min: 32250, max: 32749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 12500, total: 32500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1250, ec: 30, total: 3280 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 625, total: 1625 },
    totalContribution: 4905
  },
  {
    rangeOfCompensation: { min: 32750, max: 33249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 13000, total: 33000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1300, ec: 30, total: 3330 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 650, total: 1650 },
    totalContribution: 4980
  },
  {
    rangeOfCompensation: { min: 33250, max: 33749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 13500, total: 33500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1350, ec: 30, total: 3380 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 675, total: 1675 },
    totalContribution: 5055
  },
  {
    rangeOfCompensation: { min: 33750, max: 34249.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 14000, total: 34000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1400, ec: 30, total: 3430 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 700, total: 1700 },
    totalContribution: 5130
  },
  {
    rangeOfCompensation: { min: 34250, max: 34749.99 },
    monthlySalaryCredit: { regularSS: 20000, mpf: 14500, total: 34500 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1450, ec: 30, total: 3480 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 725, total: 1725 },
    totalContribution: 5205
  },
  {
    rangeOfCompensation: { min: 34750, max: Number.MAX_SAFE_INTEGER },
    monthlySalaryCredit: { regularSS: 20000, mpf: 15000, total: 35000 },
    employerAmountOfContribution: { regularSS: 2000, mpf: 1500, ec: 30, total: 3530 },
    employeeAmountOfContribution: { regularSS: 1000, mpf: 750, total: 1750 },
    totalContribution: 5280
  }
];


// 2025 Contribution Rates
export const CONTRIBUTION_RATES: ContributionRates = {
  sss: {
    employeeRate: 0.05, // 5.0% (kept for compatibility, but actual calculation uses bracket table)
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
    maxContribution: 200
  }
};

// VAT Rate
export const VAT_RATE = 0.12; // 12% VAT
