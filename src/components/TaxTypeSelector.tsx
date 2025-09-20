import React from 'react';
import { TaxType, TAX_TYPES } from '../types/tax';
import { Calculator, Building, User, Receipt, FileText, Home, Gift } from 'lucide-react';

interface TaxTypeSelectorProps {
  selectedType: TaxType;
  onTypeChange: (type: TaxType) => void;
}

const getIcon = (type: TaxType) => {
  switch (type) {
    case 'compensation':
      return <User className="w-5 h-5" />;
    case 'vat':
      return <FileText className="w-5 h-5" />;
    default:
      return <Calculator className="w-5 h-5" />;
  }
};

const TaxTypeSelector: React.FC<TaxTypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Select Tax Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TAX_TYPES.map((taxType) => (
          <button
            key={taxType.id}
            onClick={() => onTypeChange(taxType.id)}
            className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md active:scale-95 ${selectedType === taxType.id
              ? 'border-blue-500 bg-blue-50 shadow-md'
              : 'border-gray-200 hover:border-blue-300'
              }`}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className={`flex-shrink-0 ${selectedType === taxType.id ? 'text-blue-600' : 'text-gray-500'
                }`}>
                {getIcon(taxType.id)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-medium text-sm sm:text-base mb-1 ${selectedType === taxType.id ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                  {taxType.name}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${selectedType === taxType.id ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                  {taxType.description}
                </p>
                {taxType.rate && (
                  <div className="mt-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${selectedType === taxType.id
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-700'
                      }`}>
                      {taxType.rate}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaxTypeSelector;
