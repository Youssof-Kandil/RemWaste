import React from "react";
import { ArrowRight, Truck } from "lucide-react";
import { useSelectedSkip } from "../context/SelectedSkip";
import { Button } from "./UI/button";

export const BottomBar: React.FC = () => {
  const { selectedSkip } = useSelectedSkip();

  const totalPrice = selectedSkip?.price_before_vat
    ? selectedSkip.price_before_vat +
      (selectedSkip.price_before_vat * selectedSkip.vat) / 100
    : 0;

  const wrapperClasses = `
    fixed bottom-0 left-0 right-0 z-50 lg:left-64 transform transition-all duration-300
    ${
      selectedSkip
        ? "translate-y-0 opacity-100"
        : "translate-y-full opacity-0 pointer-events-none"
    }
  `;

  return (
    <div className={wrapperClasses.trim()}>
      <div className="bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 shadow-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center sm:justify-between gap-4 flex-wrap">
            {/* Skip Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg">
                <Truck className="w-6 h-6 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white">
                  {selectedSkip?.size} Yard Skip
                </h3>
                <p className="text-slate-400 text-sm">
                  {selectedSkip?.hire_period_days} day hire period
                </p>
              </div>
            </div>

            {/* Price and Continue */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-black text-white">
                  £{totalPrice.toFixed(0)}
                </div>
                <div className="text-xs text-slate-400">Inc. VAT</div>
              </div>

              <Button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Youssof-Kandil/RemWaste")
                }
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-6 py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
