import React, { useState } from 'react';
import { User, Building, Store, Heart, ChevronRight, Calendar, FileText, Clock, CheckCircle, Users } from 'lucide-react';
import { TaxpayerSubcategory } from '../types/directory';
import { TAXPAYER_CATEGORIES } from '../data/taxpayerCategories';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'User': return User;
    case 'Building': return Building;
    case 'Store': return Store;
    case 'Heart': return Heart;
    default: return Users;
  }
};

const TaxpayerCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedSubcategory(null);
    }
  };

  const renderSubcategoryDetails = (subcategory: TaxpayerSubcategory) => (
    <div className="mt-4 bg-gray-50 rounded-lg p-6">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{subcategory.name}</h4>
        <p className="text-gray-600">{subcategory.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Tax Obligations */}
        <div>
          <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            Tax Obligations
          </h5>
          <div className="space-y-3">
            {subcategory.obligations.map((obligation, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h6 className="font-medium text-gray-900">{obligation.type}</h6>
                  {obligation.rate && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {obligation.rate}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{obligation.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {obligation.frequency}
                  </span>
                  {obligation.dueDate && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: {obligation.dueDate}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forms and Requirements */}
        <div className="space-y-6">
          {/* Required Forms */}
          <div>
            <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-green-600" />
              Required Forms
            </h5>
            <div className="space-y-2">
              {subcategory.forms.map((form, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-green-800">{form}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              Requirements
            </h5>
            <ul className="space-y-2">
              {subcategory.requirements.map((requirement, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-600" />
              Examples
            </h5>
            <div className="flex flex-wrap gap-2">
              {subcategory.examples.map((example, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Taxpayer Categories Directory</h2>
            <p className="text-gray-600">Tax obligations and requirements by taxpayer type</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      {TAXPAYER_CATEGORIES.map((category) => {
        const IconComponent = getIconComponent(category.icon);
        const isExpanded = selectedCategory === category.id;

        return (
          <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Category Header */}
            <button
              onClick={() => handleCategoryClick(category.id)}
              className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>

            {/* Subcategories */}
            {isExpanded && (
              <div className="border-t border-gray-200 p-6">
                <div className="grid gap-4">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.id} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setSelectedSubcategory(
                          selectedSubcategory === subcategory.id ? null : subcategory.id
                        )}
                        className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{subcategory.name}</h4>
                            <p className="text-sm text-gray-600">{subcategory.description}</p>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 text-gray-400 transition-transform ${
                              selectedSubcategory === subcategory.id ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {selectedSubcategory === subcategory.id && renderSubcategoryDetails(subcategory)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaxpayerCategories;