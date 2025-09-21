import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Calendar, Users, Building, Receipt, Clock } from 'lucide-react';
import { BIRForm } from '@/types/directory';
import { BIR_FORMS } from '@/data/birForms';

const FormsLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedForm, setSelectedForm] = useState<BIRForm | null>(null);

  const categories = [
    { id: 'all', name: 'All Forms', icon: FileText },
    { id: 'individual', name: 'Individual', icon: Users },
    { id: 'business', name: 'Business', icon: Building },
    { id: 'withholding', name: 'Withholding Tax', icon: Receipt },
    { id: 'registration', name: 'Registration', icon: Clock },
    { id: 'other', name: 'Other', icon: FileText }
  ];

  const filteredForms = BIR_FORMS.filter(form => {
    const matchesSearch = form.formNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'individual': return 'blue';
      case 'business': return 'green';
      case 'withholding': return 'purple';
      case 'registration': return 'orange';
      case 'other': return 'gray';
      default: return 'gray';
    }
  };

  const getFrequencyIcon = (frequency?: string) => {
    switch (frequency) {
      case 'monthly': return '📅';
      case 'quarterly': return '📆';
      case 'annually': return '🗓️';
      case 'as-needed': return '⏰';
      default: return '📋';
    }
  };

  const renderFormDetails = (form: BIRForm) => (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            <span className="bg-gray-900 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
              BIR Form {form.formNumber}
            </span>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(form.category)}-100 text-${getCategoryColor(form.category)}-800 whitespace-nowrap`}>
              <FileText className="w-3 h-3" />
              {form.category}
            </div>
            {form.frequency && (
              <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1 whitespace-nowrap">
                {getFrequencyIcon(form.frequency)} {form.frequency}
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{form.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">{form.description}</p>

          {form.dueDate && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-700 mb-4">
              <Calendar className="w-4 h-4" />
              <span>Due: {form.dueDate}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-auto sm:ml-4 mt-3 sm:mt-0">
          <button
            onClick={() => window.open('https://www.bir.gov.ph', '_blank')}
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Applicable To */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            Applicable To
          </h4>
          <div className="space-y-2">
            {form.applicableTo.map((item, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filing Instructions */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-green-600" />
            Filing Instructions
          </h4>
          <ol className="space-y-2">
            {form.instructions.map((instruction, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Related Forms */}
      {form.relatedForms && form.relatedForms.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Related Forms</h4>
          <div className="flex flex-wrap gap-2">
            {form.relatedForms.map((relatedForm, index) => (
              <button
                key={index}
                onClick={() => {
                  const form = BIR_FORMS.find(f => f.formNumber === relatedForm);
                  if (form) setSelectedForm(form);
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
              >
                BIR Form {relatedForm}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button
          onClick={() => setSelectedForm(null)}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          ← Back to Forms Library
        </button>
      </div>
    </div>
  );

  if (selectedForm) {
    return renderFormDetails(selectedForm);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Tax Forms Library</h2>
            <p className="text-sm sm:text-base text-gray-600">Complete collection of BIR forms with filing guidance</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search forms by number, title, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <Filter className="w-5 h-5 text-gray-400 mt-2" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="grid gap-4">
        {filteredForms.map((form) => {
          const color = getCategoryColor(form.category);

          return (
            <div key={form.formNumber} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedForm(form)}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="bg-gray-900 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                      BIR Form {form.formNumber}
                    </span>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800 whitespace-nowrap`}>
                      <FileText className="w-3 h-3" />
                      {form.category}
                    </div>
                    {form.frequency && (
                      <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1 whitespace-nowrap">
                        {getFrequencyIcon(form.frequency)} {form.frequency}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 break-words">{form.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 break-words">{form.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                    {form.applicableTo.slice(0, 3).map((item, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs break-words">
                        {item}
                      </span>
                    ))}
                    {form.applicableTo.length > 3 && (
                      <span className="text-gray-500 text-xs whitespace-nowrap">+{form.applicableTo.length - 3} more</span>
                    )}
                  </div>

                  {form.dueDate && (
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-700">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">Due: {form.dueDate}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:ml-4 w-full sm:w-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://www.bir.gov.ph', '_blank');
                    }}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedForm(form);
                    }}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto"
                  >
                    <FileText className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredForms.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No forms found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Additional Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-medium text-blue-900 mb-2">Need Help?</h3>
        <p className="text-sm text-blue-700 mb-3">
          For the most up-to-date forms and detailed instructions, visit the official BIR website.
          All forms include step-by-step filing guidance and requirements.
        </p>
        <a
          href="https://www.bir.gov.ph"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          <FileText className="w-4 h-4" />
          Visit BIR Official Website
        </a>
      </div>
    </div>
  );
};

export default FormsLibrary;