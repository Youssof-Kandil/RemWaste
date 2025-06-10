import React from "react";
import { SkipCard } from "./SkipCard";
import { useSkipsByLocation } from "../hooks/useSkipsByLocation";
import { useSelectedSkip } from "../context/SelectedSkip";
import { BottomBar } from "./Bottombar";

export const SkipSizeSelector: React.FC = ({}) => {
  const {
    data: skips,
    isLoading,
    error,
  } = useSkipsByLocation("NR32", "Lowestoft");

  const { selectedSkip, onSelectSkip } = useSelectedSkip();

  if (isLoading) return <div>Loading skips...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Available Skip Sizes
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Choose from our range of skip sizes. All prices include delivery, hire
          period, and collection.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skips?.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={() => onSelectSkip(skip)}
          />
        ))}
      </div>

      {/* Selection info */}
      <BottomBar />
    </div>
  );
};
