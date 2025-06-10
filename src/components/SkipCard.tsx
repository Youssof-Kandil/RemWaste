import { AlertTriangle, CheckCircle, Clock, Truck } from "lucide-react";
import type { Skip } from "../Types";

interface skipProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}
export const SkipCard: React.FC<skipProps> = ({
  skip,
  isSelected,
  onSelect,
}) => {
  const totalPrice =
    skip.priceBeforeVat + (skip.priceBeforeVat * skip.vat) / 100;

  return (
    <div
      className={`
        rounded-lg border bg-card text-card-foreground shadow-sm
        group relative overflow-hidden transition-all duration-500 cursor-pointer h-full
        hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2
        ${
          isSelected
            ? "ring-2 ring-cyan-400 shadow-xl shadow-cyan-500/25 bg-slate-800/90"
            : "hover:ring-1 hover:ring-cyan-400/50 bg-slate-800/60"
        }
        backdrop-blur-sm border-slate-700/50
      `}
      onClick={onSelect}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 z-20">
          <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-slate-900" />
          </div>
        </div>
      )}

      <div className="p-6 pt-0 relative z-10">
        {/* Header section with size */}
        <div className="relative bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mb-4 shadow-lg">
            <span className="text-2xl font-black text-slate-900">
              {skip.size}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {skip.size} Yard Skip
          </h3>
          <p className="text-slate-300 text-sm">
            {skip.hirePeriodDays} Day Hire Period
          </p>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 text-sm">
                {skip.hirePeriodDays} days included
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 text-sm">
                Delivery & collection included
              </span>
            </div>

            {skip.allowsHeavyWaste && (
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 text-sm">
                  Heavy waste allowed
                </span>
              </div>
            )}
          </div>

          {/* Road restriction warning */}
          {!skip.allowedOnRoad && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-amber-300 text-sm">
                Private property only
              </span>
            </div>
          )}

          {/* Price section */}
          <div className="text-center py-4">
            <div className="text-3xl font-black text-white mb-1">
              £{totalPrice.toFixed(0)}
            </div>
            <div className="text-sm text-slate-400">
              Inc. VAT (£{skip.priceBeforeVat} + £
              {((skip.priceBeforeVat * skip.vat) / 100).toFixed(0)} VAT)
            </div>
          </div>

          {/* Select button */}
          <button
            className={`
              w-full h-12 text-base font-semibold transition-all duration-300 transform rounded-md
              ${
                isSelected
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:scale-105"
              }
              border-0 text-white flex items-center justify-center
            `}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {isSelected ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Selected
              </>
            ) : (
              "Select This Skip"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
