import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { TaxType } from '../types/tax';
import TaxTypeSelector from './TaxTypeSelector';
import CompensationTaxCalculator from './CompensationTaxCalculator';
import VATCalculator from './VATCalculator';

const TaxCalculator: React.FC = () => {
  const [selectedTaxType, setSelectedTaxType] = useState<TaxType>('compensation');

  const renderCalculator = () => {
    switch (selectedTaxType) {
      case 'compensation':
        return <CompensationTaxCalculator />;
      case 'vat':
        return <VATCalculator />;
      default:
        return <CompensationTaxCalculator />;
    }
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
            Comprehensive tax calculator for different types of taxes in the Philippines
            based on current BIR rates and regulations.
          </p>
        </div>

        {/* Tax Type Selector */}
        <TaxTypeSelector selectedType={selectedTaxType} onTypeChange={setSelectedTaxType} />

        {/* Dynamic Calculator */}
        {renderCalculator()}

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Important Disclaimer</h4>
              <p className="text-sm text-yellow-700 leading-relaxed">
                This calculator uses current BIR tax rates and regulations.
                Actual tax calculations may vary based on specific circumstances, available deductions, exemptions, or policy changes.
                Please consult with a tax professional or the <a href="https://www.bir.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-yellow-800 hover:text-yellow-900 underline font-medium">Bureau of Internal Revenue (BIR)</a> for official tax computations.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center py-6 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <p className="mb-2">© 2025 Philippines Tax Directory. All rights reserved.</p>
            <p>Part of <a href="https://www.bettergov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">BetterGov.ph</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TaxCalculator;
