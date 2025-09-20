import React from 'react';
import { Calculator, Users, FileText, Calendar, DollarSign, HelpCircle, Menu, X } from 'lucide-react';
import { DirectorySection } from '../types/directory';

interface NavigationProps {
  activeSection: DirectorySection;
  onSectionChange: (section: DirectorySection) => void;
}

const navigationItems: { id: DirectorySection; name: string; icon: any; description: string }[] = [
  {
    id: 'calculators',
    name: 'Tax Calculators',
    icon: Calculator,
    description: 'Calculate taxes and contributions'
  },
  {
    id: 'taxpayer-categories',
    name: 'Taxpayer Categories',
    icon: Users,
    description: 'Tax obligations by taxpayer type'
  },
  {
    id: 'forms-library',
    name: 'Forms Library',
    icon: FileText,
    description: 'BIR forms and filing guides'
  },
  {
    id: 'filing-calendar',
    name: 'Filing Calendar',
    icon: Calendar,
    description: 'Tax deadlines and reminders'
  },
  {
    id: 'tax-rates',
    name: 'Tax Rates & Tables',
    icon: DollarSign,
    description: 'Current tax rates and brackets'
  },
  {
    id: 'faqs',
    name: 'FAQs',
    icon: HelpCircle,
    description: 'Frequently asked questions'
  }
];

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white rounded-xl shadow-lg mb-6 sticky top-4 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium group ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    title={item.description}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden mb-6">
        {/* Mobile Menu Button */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {navigationItems.find(item => item.id === activeSection)?.name}
            </h3>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="py-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;