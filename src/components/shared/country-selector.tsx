"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

interface Country {
  id: number;
  name: string;
}

const CountrySelector = () => {
  const locale = useLocale();
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://halool.tsd-education.com/api/countries",
          {
            headers: {
              "Accept-Language": locale,
              Accept: "application/json",
            },
          }
        );
        const data = await res.json();
        if (data.success) {
          setCountries(data.data);
          // Set first country as default or get from localStorage
          const savedCountry = localStorage.getItem("selectedCountry");
          if (savedCountry) {
            setSelectedCountry(savedCountry);
          } else if (data.data.length > 0) {
            setSelectedCountry(data.data[0].name);
            localStorage.setItem("selectedCountry", data.data[0].name);
          }
        }
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
  }, [locale]);

  const handleSelect = (countryName: string) => {
    setSelectedCountry(countryName);
    localStorage.setItem("selectedCountry", countryName);
    setIsOpen(false);
    // You can add additional logic here like updating a global state or context
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white text-sm hover:text-main-green transition-colors px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20"
      >
        <Globe className="w-4 h-4" />
        <span className="max-w-[100px] truncate">
          {selectedCountry || "Select Country"}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 z-50 min-w-[180px] bg-white rounded-lg shadow-xl border border-gray-100 py-2 max-h-[300px] overflow-y-auto">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => handleSelect(country.name)}
                className={`w-full text-right px-4 py-2 text-sm transition-colors ${
                  selectedCountry === country.name
                    ? "bg-main-green/10 text-main-green font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {country.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CountrySelector;
