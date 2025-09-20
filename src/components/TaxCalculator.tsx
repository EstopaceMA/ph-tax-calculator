import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, FileText, TrendingDown, TrendingUp } from 'lucide-react';
import { calculateTax } from '../utils/taxCalculator';
import { TaxCalculation } from '../types/tax';

const TaxCalculator: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Philippines Tax Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your monthly net salary, income tax, and mandatory contributions
            (SSS, PhilHealth, Pag-IBIG) based on current 2025 rates.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Monthly Gross Salary</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your monthly gross salary
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                    ₱
                  </span>
                  <input
                    type="text"
                    id="salary"
                    value={salary}
                    onChange={handleSalaryChange}
                    placeholder="50,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-colors"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Enter your monthly gross salary before deductions
                </p>
              </div>

              {calculation && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-2">Tax Bracket</h3>
                  <p className="text-blue-700">{calculation.taxBracket}</p>
                  <p className="text-sm text-blue-600 mt-1">
                    Annual Taxable Income: {formatCurrency(calculation.annualTaxableIncome)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          {calculation && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">Calculation Results</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Gross Monthly Salary</span>
                  <span className="font-medium text-gray-900">{formatCurrency(calculation.grossSalary)}</span>
                </div>

                <div className="border-t pt-3">
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    Monthly Deductions
                  </h3>

                  <div className="space-y-2 ml-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">SSS Contribution (5.0%)</span>
                      <span className="text-red-600">-{formatCurrency(calculation.sssContribution)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">PhilHealth (2.5%)</span>
                      <span className="text-red-600">-{formatCurrency(calculation.philHealthContribution)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Pag-IBIG</span>
                      <span className="text-red-600">-{formatCurrency(calculation.pagibigContribution)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Income Tax</span>
                      <span className="text-red-600">-{formatCurrency(calculation.monthlyTax)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2 mt-3 border-t">
                    <span className="text-gray-600">Total Deductions</span>
                    <span className="font-medium text-red-600">-{formatCurrency(calculation.totalContributions + calculation.monthlyTax)}</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      Net Monthly Salary
                    </span>
                    <span className="text-xl font-bold text-green-600">{formatCurrency(calculation.netSalary)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        {calculation && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual Summary</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Gross Annual Salary</p>
                <p className="text-xl font-bold text-blue-900">{formatCurrency(calculation.annualSalary)}</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-600 font-medium">Annual Tax</p>
                <p className="text-xl font-bold text-red-900">{formatCurrency(calculation.annualTax)}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600 font-medium">Net Annual Salary</p>
                <p className="text-xl font-bold text-green-900">{formatCurrency(calculation.netSalary * 12)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 text-yellow-600 mt-0.5">⚠️</div>
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Important Disclaimer</h4>
              <p className="text-sm text-yellow-700 leading-relaxed">
                This calculator uses the 2025 tax rates and contribution schedules for educational purposes.
                Actual calculations may vary based on specific circumstances, additional allowances, or policy changes.
                Please consult with a tax professional or the Bureau of Internal Revenue (BIR) for official tax computations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
