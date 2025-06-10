import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { ProgressBar } from "./components/ProgressBar";
import { SkipSizeSelector } from "./components/SkipSizeSelector";
import { SelectedSkipProvider } from "./context/SelectedSkip";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SelectedSkipProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="relative">
            <div className="relative z-10">
              <ProgressBar currentStep="select-skip" />

              {/* Main content with responsive margin for sidebar */}
              <div className="lg:ml-64">
                <HeroSection />
                <div className="container mx-auto px-6 pb-16">
                  <SkipSizeSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SelectedSkipProvider>
    </QueryClientProvider>
  );
}

export default App;
