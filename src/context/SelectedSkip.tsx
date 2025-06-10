import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Skip } from "../Types";

// Define the Skip type (replace this with your actual Skip type)

type SelectedSkipContextType = {
  selectedSkip: Skip | null;
  onSelectSkip: (newSkip: Skip | null) => void;
};

const SelectedSkipContext = createContext<SelectedSkipContextType | undefined>(
  undefined
);

export const SelectedSkipProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const onSelectSkip = (newSkip: Skip | null) => {
    if (newSkip?.id == selectedSkip?.id) {
      setSelectedSkip(null);
    } else setSelectedSkip(newSkip);
  };

  return (
    <SelectedSkipContext.Provider value={{ selectedSkip, onSelectSkip }}>
      {children}
    </SelectedSkipContext.Provider>
  );
};

export const useSelectedSkip = () => {
  const context = useContext(SelectedSkipContext);
  if (!context) {
    throw new Error(
      "useSelectedSkip must be used within a SelectedSkipProvider"
    );
  }
  return context;
};
