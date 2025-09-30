import React, { useState, useEffect } from 'react';
import { Ship, Calculator, Search, AlertCircle, Package } from 'lucide-react';
import { calculateCustomsDuty } from '@/utils/taxCalculator';
import { TariffItem, CustomsCalculation } from '@/types/tax';
import { STATIC_TARIFF_DATA } from '@/data/tariffData';

const CustomsDutyCalculator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<TariffItem[]>([]);
  const [selectedTariff, setSelectedTariff] = useState<TariffItem | null>(null);

  // Form fields
  const [fobFcaValue, setFobFcaValue] = useState<string>('');
  const [freight, setFreight] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<string>('');
  const [isDangerousCargo, setIsDangerousCargo] = useState<boolean>(false);
  const [brokerageFee, setBrokerageFee] = useState<string>('700');
  const [exciseTaxRate, setExciseTaxRate] = useState<string>('0');

  const [calculation, setCalculation] = useState<CustomsCalculation | null>(null);

  // Filter tariff items based on search query
  useEffect(() => {
    if (searchQuery.trim() && !selectedTariff) {
      const filtered = STATIC_TARIFF_DATA.filter(item =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 10); // Limit to first 10 results
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [searchQuery, selectedTariff]);

  // Select tariff item
  const handleSelectTariff = (item: TariffItem) => {
    setSelectedTariff(item);
    setFilteredItems([]);
    setSearchQuery(item.description);
  };

  // Calculate customs duty
  useEffect(() => {
    const fobValue = parseFloat(fobFcaValue) || 0;
    const freightValue = parseFloat(freight) || 0;
    const rate = parseFloat(exchangeRate) || 0;
    const dutyRate = selectedTariff?.rate || 0;
    const exciseRate = parseFloat(exciseTaxRate) || 0;
    const brokerageFeeValue = parseFloat(brokerageFee) || 0;

    if (fobValue > 0 && rate > 0) {
      const result = calculateCustomsDuty({
        fobFcaValue: fobValue,
        freight: freightValue,
        exchangeRate: rate,
        rateOfDuty: dutyRate,
        isDangerousCargo,
        brokerageFee: brokerageFeeValue,
        exciseTaxRate: exciseRate
      });

      // Update goods info
      result.goods.ahtnCode = selectedTariff?.ahtn || '';
      result.goods.description = selectedTariff?.description || '';

      setCalculation(result);
    } else {
      setCalculation(null);
    }
  }, [fobFcaValue, freight, exchangeRate, selectedTariff, isDangerousCargo, brokerageFee, exciseTaxRate]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatForeignCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Beta Notice */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-orange-800 mb-1 text-sm sm:text-base flex items-center gap-2">
              Beta Testing
              <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2 py-0.5 rounded">BETA</span>
            </h4>
            <p className="text-xs sm:text-sm text-orange-700 leading-relaxed">
              This customs duty calculator is currently in beta testing. Features and calculations may be refined based on user feedback.
              Please verify all calculations with official BOC sources.
            </p>
          </div>
        </div>
      </div>

      {/* Goods Description Section */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Goods Description</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Product Description
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (selectedTariff) {
                    setSelectedTariff(null);
                  }
                }}
                placeholder="Type to search product description..."
                className="w-full pl-4 pr-10 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {filteredItems.length > 0 && (
            <div className="border border-gray-200 rounded-lg max-h-60 overflow-y-auto">
              {filteredItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectTariff(item)}
                  className="w-full text-left p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="text-sm font-medium text-gray-900">{item.description}</div>
                  <div className="text-xs text-gray-500">AHTN: {item.ahtn} | Rate: {item.rate}%</div>
                </button>
              ))}
            </div>
          )}

          {selectedTariff && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Selected Product</h4>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Description:</span> {selectedTariff.description}</div>
                <div><span className="font-medium">AHTN Code:</span> {selectedTariff.ahtn}</div>
                <div><span className="font-medium">Rate of Duty:</span> {selectedTariff.rate}%</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dutiable Value Section */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Dutiable Value</h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                FOB/FCA Value (Foreign Currency)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={fobFcaValue}
                  onChange={(e) => setFobFcaValue(e.target.value.replace(/[^0-9.]/g, ''))}
                  placeholder="100.00"
                  className="w-full pl-8 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Freight (Shipping Cost)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={freight}
                  onChange={(e) => setFreight(e.target.value.replace(/[^0-9.]/g, ''))}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exchange Rate (USD to PHP)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                <input
                  type="text"
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(e.target.value.replace(/[^0-9.]/g, ''))}
                  placeholder="58.50"
                  className="w-full pl-8 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cargo Type
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cargoType"
                    checked={!isDangerousCargo}
                    onChange={() => setIsDangerousCargo(false)}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">General Cargo (2% insurance)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cargoType"
                    checked={isDangerousCargo}
                    onChange={() => setIsDangerousCargo(true)}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">Dangerous Cargo (4% insurance)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brokerage Fee
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                <input
                  type="text"
                  value={brokerageFee}
                  onChange={(e) => setBrokerageFee(e.target.value.replace(/[^0-9.]/g, ''))}
                  placeholder="700.00"
                  className="w-full pl-8 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excise Tax Rate (%) - If Applicable
              </label>
              <input
                type="text"
                value={exciseTaxRate}
                onChange={(e) => setExciseTaxRate(e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="0"
                className="w-full py-2 sm:py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {calculation && (
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h3 className="font-medium text-blue-900 mb-3">Dutiable Value Calculation</h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">FOB/FCA Value:</span>
                    <span className="font-medium">{formatForeignCurrency(calculation.dutiableValue.fobFcaValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Freight:</span>
                    <span className="font-medium">{formatForeignCurrency(calculation.dutiableValue.freight)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Insurance ({isDangerousCargo ? '4%' : '2%'}):</span>
                    <span className="font-medium">{formatForeignCurrency(calculation.dutiableValue.insurance)}</span>
                  </div>
                  <div className="flex justify-between border-t border-blue-200 pt-2 font-semibold">
                    <span className="text-blue-900">Total (Foreign Currency):</span>
                    <span>{formatForeignCurrency(calculation.dutiableValue.totalDutiableValueForeign)}</span>
                  </div>
                  <div className="flex justify-between border-t border-blue-200 pt-2 font-semibold">
                    <span className="text-blue-900">Total (PHP):</span>
                    <span>{formatCurrency(calculation.dutiableValue.totalDutiableValuePHP)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Other Charges/Costs and Summary */}
      {calculation && (
        <>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Other Charges/Costs</h2>
            </div>

            <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-orange-700">Customs Duty ({calculation.goods.rateOfDuty}%):</span>
                  <span className="font-medium">{formatCurrency(calculation.charges.customsDuty)}</span>
                </div>
                {calculation.charges.exciseTax > 0 && (
                  <div className="flex justify-between">
                    <span className="text-orange-700">Excise Tax:</span>
                    <span className="font-medium">{formatCurrency(calculation.charges.exciseTax)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-orange-700">Brokerage Fee:</span>
                  <span className="font-medium">{formatCurrency(calculation.charges.brokerageFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700">Import Processing Charge:</span>
                  <span className="font-medium">{formatCurrency(calculation.charges.importProcessingCharge)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700">BIR Documentary Stamp Tax:</span>
                  <span className="font-medium">{formatCurrency(calculation.charges.birDocumentaryStampTax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700">Customs Documentary Stamp:</span>
                  <span className="font-medium">{formatCurrency(calculation.charges.customsDocumentaryStamp)}</span>
                </div>
                <div className="flex justify-between border-t border-orange-200 pt-2 font-semibold">
                  <span className="text-orange-900">Total Landed Cost:</span>
                  <span>{formatCurrency(calculation.charges.totalLandedCost)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Summary</h2>
            </div>

            <div className="bg-green-50 rounded-lg p-3 sm:p-4">
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700">Customs Duty:</span>
                  <span className="font-medium">{formatCurrency(calculation.summary.customsDuty)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">VAT (12%):</span>
                  <span className="font-medium">{formatCurrency(calculation.summary.vat)}</span>
                </div>
                {calculation.summary.exciseTax > 0 && (
                  <div className="flex justify-between">
                    <span className="text-green-700">Excise Tax:</span>
                    <span className="font-medium">{formatCurrency(calculation.summary.exciseTax)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-green-700">Import Processing Charge:</span>
                  <span className="font-medium">{formatCurrency(calculation.summary.importProcessingCharge)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">BIR Documentary Stamp Tax:</span>
                  <span className="font-medium">{formatCurrency(calculation.summary.birDocumentaryStampTax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Customs Documentary Stamp:</span>
                  <span className="font-medium">{formatCurrency(calculation.summary.customsDocumentaryStamp)}</span>
                </div>
                <div className="flex justify-between border-t border-green-200 pt-2 font-semibold text-lg">
                  <span className="text-green-900">Total Tax Amount:</span>
                  <span className="text-green-700">{formatCurrency(calculation.summary.totalTaxAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Calculation Formulas */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <Calculator className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">Calculation Formulas</h4>
            <div className="text-xs sm:text-sm text-blue-700 leading-relaxed space-y-2">
              <div>
                <strong>Customs Duty</strong> = Total Dutiable Value in PHP × Rate of Duty
              </div>
              <div>
                <strong>Total Landed Cost</strong> = Total Dutiable Value in PHP + Customs Duty + Excise Tax (If Applicable) + Brokerage Fee + Import Processing Charge + Customs Documentary Stamp + BIR Documentary Stamp Tax
              </div>
              <div>
                <strong>VAT</strong> = 12% of Total Landed Cost
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-amber-800 mb-1 text-sm sm:text-base">Important Notes</h4>
            <div className="text-xs sm:text-sm text-amber-700 leading-relaxed space-y-1">
              <p>• Figures are <strong>estimates only</strong>. Actual duties and taxes may vary.</p>
              <p>• This calculator is based on express courier shipments (DHL, FedEx, UPS, etc.).</p>
              <p>• Shipping/courier charges are not included in the total tax amount.</p>
              <p>• For exchange rates, visit: <a href="https://customs.gov.ph/customs-memorandum-circular-cmc-2025" className="underline" target="_blank" rel="noopener noreferrer">Customs Memorandum Circulars</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomsDutyCalculator;