import {
  Calendar,
  CheckCircle,
  CreditCard,
  MapPin,
  Trash2,
  Truck,
} from "lucide-react";
interface ProgressStepsProps {
  currentStep: string;
}

const steps = [
  { id: "postcode", label: "Location", icon: MapPin },
  { id: "waste-type", label: "Waste Type", icon: Trash2 },
  { id: "select-skip", label: "Skip Size", icon: Truck },
  { id: "permit-check", label: "Permits", icon: CheckCircle },
  { id: "choose-date", label: "Schedule", icon: Calendar },
  { id: "payment", label: "Payment", icon: CreditCard },
];
export const ProgressBar: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <>
      {/* Mobile: Top horizontal progress bar */}
      <div className="lg:hidden sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto  py-4">
          <div className="flex  justify-center">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = index < currentIndex;
                const isCurrent = index === currentIndex;

                return (
                  <div
                    key={step.id}
                    className="flex items-center flex-shrink-0"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`
                          relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500
                          ${
                            isCompleted
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                              : isCurrent
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/30 "
                              : "bg-slate-800 border-slate-600 text-slate-400"
                          }
                        `}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`
                          mt-1 text-xs font-medium transition-colors duration-300 text-center
                          ${
                            isCurrent
                              ? "text-cyan-400 font-semibold"
                              : isCompleted
                              ? "text-emerald-400"
                              : "text-slate-500"
                          }
                        `}
                      >
                        {step.label}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        className={`
                          h-0.5 w-6 mx-2 transition-all duration-500
                          ${
                            isCompleted
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-sm shadow-emerald-500/30"
                              : "bg-slate-700"
                          }
                        `}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Left sidebar progress bar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-slate-900/90 backdrop-blur-md border-r border-slate-700/50 z-40">
        <div className="p-6 h-full flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Progress</h3>
            <p className="text-slate-400 text-sm">Track your booking steps</p>
          </div>

          <div className="flex flex-col space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;

              return (
                <div key={step.id} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`
                        relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500
                        ${
                          isCompleted
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                            : isCurrent
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-110"
                            : "bg-slate-800 border-slate-600 text-slate-400"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        className={`
                          w-0.5 h-12 mt-2 transition-all duration-500
                          ${
                            isCompleted
                              ? "bg-gradient-to-b from-emerald-500 to-emerald-600 shadow-sm shadow-emerald-500/30"
                              : "bg-slate-700"
                          }
                        `}
                      />
                    )}
                  </div>

                  <div className="flex-1 pt-3">
                    <h4
                      className={`
                        font-semibold transition-colors duration-300
                        ${
                          isCurrent
                            ? "text-cyan-400"
                            : isCompleted
                            ? "text-emerald-400"
                            : "text-slate-500"
                        }
                      `}
                    >
                      {step.label}
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                      {isCurrent
                        ? "Current step"
                        : isCompleted
                        ? "Completed"
                        : "Upcoming"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
