import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Calculator, Info } from 'lucide-react';
import { TaxType } from '@/types/tax';
import { DirectorySection } from '@/types/directory';
import Navigation from '@/components/Navigation';
import TaxTypeSelector from '@/components/TaxTypeSelector';
import CompensationTaxCalculator from '@/components/CompensationTaxCalculator';
import VATCalculator from '@/components/VATCalculator';
import CustomsDutyCalculator from '@/components/CustomsDutyCalculator';
import FreelancerTaxCalculator from '@/components/FreelancerTaxCalculator';
import TaxpayerCategories from '@/components/TaxpayerCategories';
import FormsLibrary from '@/components/FormsLibrary';
import FilingCalendar from '@/components/FilingCalendar';
import TaxRates from '@/components/TaxRates';
import FAQs from '@/components/FAQs';

const TaxDirectory: React.FC = () => {
  const location = useLocation();
  const { taxType } = useParams<{ taxType?: string }>();
  const navigate = useNavigate();

  // Determine current section from pathname
  const getCurrentSection = (): DirectorySection => {
    const path = location.pathname.slice(1); // Remove leading slash
    const section = path.split('/')[0];

    const validSections: DirectorySection[] = ['tax-calculators', 'taxpayer-categories', 'forms-library', 'filing-calendar', 'tax-rates', 'faqs'];
    return validSections.includes(section as DirectorySection) ? section as DirectorySection : 'tax-calculators';
  };

  // Determine current tax type from URL parameter or default
  const getCurrentTaxType = (): TaxType => {
    if (taxType && ['compensation', 'vat', 'customs', 'freelancer'].includes(taxType as TaxType)) {
      return taxType as TaxType;
    }
    return 'compensation';
  };

  const activeSection = getCurrentSection();
  const selectedTaxType = getCurrentTaxType();

  // Handle tax type change within calculators
  const handleTaxTypeChange = (newTaxType: TaxType) => {
    navigate(`/tax-calculators/${newTaxType}`);
  };

  const renderCalculator = () => {
    switch (selectedTaxType) {
      case 'compensation':
        return <CompensationTaxCalculator />;
      case 'vat':
        return <VATCalculator />;
      case 'customs':
        return <CustomsDutyCalculator />;
      case 'freelancer':
        return <FreelancerTaxCalculator />;
      default:
        return <CompensationTaxCalculator />;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'tax-calculators':
        return (
          <>
            <TaxTypeSelector selectedType={selectedTaxType} onTypeChange={handleTaxTypeChange} />
            {renderCalculator()}
          </>
        );
      case 'taxpayer-categories':
        return <TaxpayerCategories />;
      case 'forms-library':
        return <FormsLibrary />;
      case 'filing-calendar':
        return <FilingCalendar />;
      case 'tax-rates':
        return <TaxRates />;
      case 'faqs':
        return <FAQs />;
      default:
        return (
          <>
            <TaxTypeSelector selectedType={selectedTaxType} onTypeChange={handleTaxTypeChange} />
            {renderCalculator()}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full mb-3 sm:mb-4">
            <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 px-4">
            Philippines Tax Directory
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Your comprehensive guide to Philippine taxation - calculators, forms, deadlines, and resources
            for individuals, businesses, and organizations.
          </p>
        </div>

        {/* Dynamic Content */}
        {renderContent()}

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Important Disclaimer</h4>
              <p className="text-xs sm:text-sm text-yellow-700 leading-relaxed">
                This platform is intended for general informational and educational purposes only.
                It does not provide official tax, legal, or financial advice and should not be relied upon as a substitute for
                guidance from the <a href="https://www.bir.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-yellow-800 hover:text-yellow-900 underline font-medium">Bureau of Internal Revenue (BIR)</a> or a licensed professional.
                For advice specific to your situation, please consult the appropriate government agency or a qualified tax advisor.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 text-center py-6 border-t border-gray-200">
          <div className="text-xs sm:text-sm text-gray-600 px-4">
            <p className="mb-2">© 2025 Philippines Tax Directory. All rights reserved.</p>
            <p>Part of <a href="https://www.bettergov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">BetterGov.ph</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TaxDirectory;
