import React from "react";
import { Truck, Recycle, Clock } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 text-center">
        
        {/* Main heading with gradient */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skip Hire
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-4">
            Choose Your Perfect Size
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional waste management solutions tailored to your needs.
            Select from our range of skip sizes with transparent pricing.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Fast Delivery
            </h3>
            <p className="text-slate-400 text-center">
              Quick and reliable skip delivery to your location
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4">
              <Recycle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Eco Friendly
            </h3>
            <p className="text-slate-400 text-center">
              Responsible waste disposal and recycling practices
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Flexible Hire
            </h3>
            <p className="text-slate-400 text-center">
              14-day hire period with extension options
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
