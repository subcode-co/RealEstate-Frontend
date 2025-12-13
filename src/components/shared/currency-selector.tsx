"use client";

import { useState, useEffect } from "react";
import { DollarSign } from "lucide-react";

interface Currency {
  id: number;
  code: string;
  name: string;
  symbol: string;
}

// Static currencies list
const CURRENCIES: Currency[] = [
  { id: 1, code: "SAR", name: "Saudi Riyal", symbol: "ر.س" },
  { id: 2, code: "USD", name: "US Dollar", symbol: "$" },
  { id: 3, code: "EUR", name: "Euro", symbol: "€" },
  { id: 4, code: "GBP", name: "British Pound", symbol: "£" },
  { id: 5, code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { id: 6, code: "EGP", name: "Egyptian Pound", symbol: "ج.م" },
  { id: 7, code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
  { id: 8, code: "QAR", name: "Qatari Riyal", symbol: "ر.ق" },
  { id: 9, code: "BHD", name: "Bahraini Dinar", symbol: "د.ب" },
  { id: 10, code: "OMR", name: "Omani Rial", symbol: "ر.ع" },
];

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    CURRENCIES[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get saved currency from localStorage
    const savedCurrencyCode = localStorage.getItem("selectedCurrency");
    if (savedCurrencyCode) {
      const currency = CURRENCIES.find((c) => c.code === savedCurrencyCode);
      if (currency) {
        setSelectedCurrency(currency);
      }
    }
  }, []);

  const handleSelect = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem("selectedCurrency", currency.code);
    setIsOpen(false);
    // You can add additional logic here like updating a global state or context
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white text-sm hover:text-main-green transition-colors px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20"
      >
        <DollarSign className="w-4 h-4" />
        <span>{selectedCurrency.code}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 z-50 min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-100 py-2 max-h-[300px] overflow-y-auto">
            {CURRENCIES.map((currency) => (
              <button
                key={currency.id}
                onClick={() => handleSelect(currency)}
                className={`w-full text-right px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                  selectedCurrency.code === currency.code
                    ? "bg-main-green/10 text-main-green font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-gray-400">{currency.symbol}</span>
                <span>{currency.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencySelector;
