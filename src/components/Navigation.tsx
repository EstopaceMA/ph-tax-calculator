import React from 'react';
import { Calculator, Users, FileText, Calendar, DollarSign, HelpCircle, Menu, X } from 'lucide-react';
import { DirectorySection } from '../types/directory';

interface NavigationProps {
  activeSection: DirectorySection;
  onSectionChange: (section: DirectorySection) => void;
}

const navigationItems: { id: DirectorySection; name: string; icon: React.ComponentType<{ className?: string }>; description: string }[] = [
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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Modern Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-sm shadow-lg'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                PH Tax Directory
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium group ${isActive
                        ? 'text-blue-600 bg-blue-50/80'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                    title={item.description}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden 2xl:inline whitespace-nowrap">{item.name}</span>
                    <span className="hidden lg:inline 2xl:hidden whitespace-nowrap">{item.name.split(' ')[0]}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Logo/Brand */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  PH Tax Directory
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
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
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${isActive
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50/80'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
