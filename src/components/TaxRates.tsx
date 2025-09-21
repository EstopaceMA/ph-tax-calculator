import React, { useState } from 'react';
import { DollarSign, TrendingUp, Info, Calendar } from 'lucide-react';
import { TAX_RATES } from '@/data/taxRates';

const TaxRates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Income Tax',
    'Business Tax',
    'Withholding Tax',
    'Other Taxes',
    'Contributions'
  ];

  const filteredRates = TAX_RATES.filter(rate =>
    selectedCategory === 'all' || rate.category === selectedCategory
  );

  const formatRate = (rate: number) => {
    if (rate === 0) return '0%';
    if (rate < 1) return `${(rate * 100).toFixed(1)}%`;
    return `${rate.toFixed(1)}%`;
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Income Tax': return 'blue';
      case 'Business Tax': return 'green';
      case 'Withholding Tax': return 'purple';
      case 'Other Taxes': return 'orange';
      case 'Contributions': return 'indigo';
      default: return 'gray';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Tax Rates & Tables</h2>
            <p className="text-sm sm:text-base text-gray-600">Current tax rates and contribution schedules</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Tax Rates */}
      {filteredRates.map((taxRate, index) => {
        const color = getCategoryColor(taxRate.category);

        return (
          <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-${color}-100 text-${color}-800`}>
                    <TrendingUp className="w-4 h-4" />
                    {taxRate.category}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Effective: {taxRate.effectiveDate}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{taxRate.type}</h3>
                <p className="text-gray-600 mb-4">{taxRate.description}</p>
              </div>
            </div>

            {/* Rate Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Income Range</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Tax Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {taxRate.rates.map((rate, rateIndex) => (
                    <tr key={rateIndex} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        {rate.max ? (
                          <span className="font-mono text-sm">
                            {formatAmount(rate.min)} - {formatAmount(rate.max)}
                          </span>
                        ) : rate.min > 0 ? (
                          <span className="font-mono text-sm">
                            {formatAmount(rate.min)} and above
                          </span>
                        ) : (
                          <span className="font-mono text-sm">All amounts</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-${color}-100 text-${color}-800`}>
                          {formatRate(rate.rate)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {rate.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional Information for Progressive Rates */}
            {taxRate.type.includes('Individual Income Tax') && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Progressive Tax Calculation</h4>
                    <p className="text-sm text-blue-700">
                      Tax is computed progressively. For example, if your annual taxable income is ₱500,000:
                      First ₱250,000 = ₱0, Next ₱150,000 = ₱30,000 (20%), Next ₱100,000 = ₱25,000 (25%),
                      Total tax = ₱55,000.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information for Contributions */}
            {taxRate.category === 'Contributions' && (
              <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-indigo-900 mb-1">Contribution Details</h4>
                    <div className="text-sm text-indigo-700 space-y-1">
                      {taxRate.type.includes('SSS') && (
                        <p>• SSS contributions are based on salary brackets with minimum of ₱4,000 and maximum of ₱35,000</p>
                      )}
                      {taxRate.type.includes('PhilHealth') && (
                        <p>• PhilHealth has minimum premium of ₱550/month and maximum of ₱5,500/month</p>
                      )}
                      {taxRate.type.includes('Pag-IBIG') && (
                        <p>• Pag-IBIG contributions are capped at ₱300/month for both employee and employer</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {filteredRates.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rates found</h3>
          <p className="text-gray-600">Try selecting a different category.</p>
        </div>
      )}

      {/* Important Notes */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-yellow-800 mb-2">Important Notes</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Tax rates are subject to change based on new laws and regulations</li>
              <li>• Some rates may have specific conditions or exemptions</li>
              <li>• Always verify current rates with the BIR for official transactions</li>
              <li>• Professional consultation is recommended for complex tax situations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxRates;