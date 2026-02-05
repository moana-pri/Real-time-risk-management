import { Gauge, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { InfoTooltip } from "./info-tooltip";

interface RiskMetricCardProps {
  isDarkMode: boolean;
  onDeltaChange: (delta: number) => void;
}

export function RiskMetricCard({ isDarkMode, onDeltaChange }: RiskMetricCardProps) {
  const [delta, setDelta] = useState(0.6523);

  // Simulate real-time delta updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDelta(prev => {
        const change = (Math.random() - 0.5) * 0.05;
        const newValue = prev + change;
        // Keep delta between 0 and 1
        const newDelta = parseFloat(Math.max(0, Math.min(1, newValue)).toFixed(4));
        onDeltaChange(newDelta);
        return newDelta;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [onDeltaChange]);

  return (
    <div className={`rounded-xl p-6 shadow-lg ${
      isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`}>
      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Gauge className={`size-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          <h2 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Real-Time Risk Metric
          </h2>
          <InfoTooltip 
            content="Delta measures how much an option's price changes relative to a ₹1 change in the underlying asset"
            isDarkMode={isDarkMode}
          />
        </div>
        <div className="flex items-center gap-1">
          <Zap className={`size-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <span className={`text-xs font-medium ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
            Live
          </span>
        </div>
      </div>

      {/* Delta Label */}
      <div className="flex items-center gap-2 mb-4">
        <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Option Delta (Black-76 Model)
        </p>
        <div className={`size-1.5 rounded-full animate-pulse ${
          isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
      </div>

      {/* Delta Value - Main Highlight */}
      <div className={`p-8 rounded-lg mb-6 text-center ${
        isDarkMode 
          ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20' 
          : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
      }`}>
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Δ =
          </span>
          <span className={`text-5xl font-bold tabular-nums ${
            isDarkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
          }`}>
            {delta.toFixed(4)}
          </span>
        </div>
      </div>

      {/* Supporting Information */}
      <div className={`p-4 rounded-lg ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="flex items-start gap-2">
          <div className={`mt-0.5 size-1.5 rounded-full ${
            isDarkMode ? 'bg-green-400' : 'bg-green-500'
          }`}></div>
          <div>
            <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Updated instantly from streaming data
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Real-time computation using Black-76 pricing model for options on futures
            </p>
          </div>
        </div>
      </div>

      {/* Additional Context */}
      <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          Delta measures the rate of change of option price with respect to the underlying asset price
        </p>
      </div>
    </div>
  );
}