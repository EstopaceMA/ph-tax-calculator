import React, { useState, useEffect } from 'react';
import { DollarSign, FileText, TrendingDown, TrendingUp } from 'lucide-react';
import { calculateTax } from '@/utils/taxCalculator';
import { TaxCalculation } from '@/types/tax';

const CompensationTaxCalculator: React.FC = () => {
  const [salary, setSalary] = useState<string>('');
  const [calculation, setCalculation] = useState<TaxCalculation | null>(null);

  useEffect(() => {
    const numericSalary = parseFloat(salary);
    if (numericSalary > 0) {
      const result = calculateTax(numericSalary);
      setCalculation(result);
    } else {
      setCalculation(null);
    }
  }, [salary]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setSalary(value);
  };

  return (
    <>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Monthly Gross Salary</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your monthly gross salary
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base sm:text-lg">
                  ₱
                </span>
                <input
                  type="text"
                  id="salary"
                  value={salary}
                  onChange={handleSalaryChange}
                  placeholder="50,000"
                  className="w-full pl-8 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg transition-colors"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                Enter your monthly gross salary before deductions
              </p>
            </div>

            {calculation && (
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h3 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Tax Bracket</h3>
                <p className="text-blue-700 text-sm sm:text-base">{calculation.taxBracket}</p>
                <p className="text-xs sm:text-sm text-blue-600 mt-1">
                  Annual Taxable Income: {formatCurrency(calculation.annualTaxableIncome)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {calculation && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Calculation Results</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm sm:text-base text-gray-600">Gross Monthly Salary</span>
                <span className="font-medium text-gray-900 text-sm sm:text-base">{formatCurrency(calculation.grossSalary)}</span>
              </div>

              <div className="border-t pt-3">
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <TrendingDown className="w-4 h-4 text-red-500" />
                  Monthly Deductions
                </h3>

                <div className="space-y-2 ml-4 sm:ml-6">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600 pr-2">SSS Contribution (5.0%)</span>
                    <span className="text-red-600 text-right">-{formatCurrency(calculation.sssContribution)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600 pr-2">PhilHealth (2.5%)</span>
                    <span className="text-red-600 text-right">-{formatCurrency(calculation.philHealthContribution)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600 pr-2">Pag-IBIG</span>
                    <span className="text-red-600 text-right">-{formatCurrency(calculation.pagibigContribution)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600 pr-2">Income Tax</span>
                    <span className="text-red-600 text-right">-{formatCurrency(calculation.monthlyTax)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2 mt-3 border-t">
                  <span className="text-sm sm:text-base text-gray-600">Total Deductions</span>
                  <span className="font-medium text-red-600 text-sm sm:text-base">-{formatCurrency(calculation.totalContributions + calculation.monthlyTax)}</span>
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="pr-2">Net Monthly Salary</span>
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-green-600">{formatCurrency(calculation.netSalary)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Information */}
      {calculation && (
        <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Annual Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
              <p className="text-xs sm:text-sm text-blue-600 font-medium">Gross Annual Salary</p>
              <p className="text-lg sm:text-xl font-bold text-blue-900 mt-1">{formatCurrency(calculation.annualSalary)}</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-red-50 rounded-lg">
              <p className="text-xs sm:text-sm text-red-600 font-medium">Annual Tax</p>
              <p className="text-lg sm:text-xl font-bold text-red-900 mt-1">{formatCurrency(calculation.annualTax)}</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
              <p className="text-xs sm:text-sm text-green-600 font-medium">Net Annual Salary</p>
              <p className="text-lg sm:text-xl font-bold text-green-900 mt-1">{formatCurrency(calculation.netSalary * 12)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompensationTaxCalculator;