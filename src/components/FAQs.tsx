import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Globe, FileText } from 'lucide-react';
import { FAQS } from '../data/faqs';

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'fil'>('en');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'general', name: 'General' },
    { id: 'individual', name: 'Individual Tax' },
    { id: 'business', name: 'Business Tax' },
    { id: 'withholding', name: 'Withholding Tax' },
    { id: 'contributions', name: 'Contributions' },
    { id: 'property', name: 'Property Tax' }
  ];

  const filteredFAQs = FAQS.filter(faq => {
    const matchesSearch = (
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (faq.questionFil && faq.questionFil.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (faq.answerFil && faq.answerFil.toLowerCase().includes(searchTerm.toLowerCase())) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common tax questions answered in plain language</p>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Language:</span>
          </div>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === 'en'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('fil')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === 'fil'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Filipino
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search questions, answers, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => {
          const isExpanded = expandedFAQ === faq.id;
          const question = language === 'fil' && faq.questionFil ? faq.questionFil : faq.question;
          const answer = language === 'fil' && faq.answerFil ? faq.answerFil : faq.answer;

          return (
            <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {question}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {faq.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {answer}
                    </p>

                    {/* Related Forms */}
                    {faq.relatedForms && faq.relatedForms.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          Related Forms
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {faq.relatedForms.map((form, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              BIR Form {form}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Alternative Language */}
                    {((language === 'en' && faq.answerFil) || (language === 'fil' && faq.answer !== answer)) && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">
                            {language === 'en' ? 'Filipino Translation:' : 'English Translation:'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {language === 'en' ? faq.answerFil : faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Additional Help */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-medium text-blue-900 mb-2">Still have questions?</h3>
        <p className="text-sm text-blue-700 mb-3">
          Can't find the answer you're looking for? Visit the official BIR website or contact your local Revenue District Office for assistance.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.bir.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <Globe className="w-4 h-4" />
            Visit BIR Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;