import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { ProgressBar } from "./components/ProgressBar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        <div className="relative z-10">
          <ProgressBar currentStep="select-skip" />

          {/* Main content with responsive margin for sidebar */}
          <div className="lg:ml-64">
            <HeroSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
