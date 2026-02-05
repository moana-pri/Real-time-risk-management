import { Lightbulb, Info } from "lucide-react";
import { useState, useEffect } from "react";

interface RiskInsightCardProps {
  isDarkMode: boolean;
  delta: number;
}

export function RiskInsightCard({ isDarkMode, delta }: RiskInsightCardProps) {
  const [insight, setInsight] = useState("");
  const [riskLevel, setRiskLevel] = useState<"low" | "moderate" | "high">("moderate");

  useEffect(() => {
    // Generate insights based on delta value
    if (delta < 0.3) {
      setInsight("Low sensitivity to price movements. The option is likely out-of-the-money with minimal directional risk.");
      setRiskLevel("low");
    } else if (delta >= 0.3 && delta < 0.7) {
      setInsight("Moderate sensitivity to underlying price changes. The option is near at-the-money, offering balanced risk-reward.");
      setRiskLevel("moderate");
    } else {
      setInsight("High sensitivity to market movements. The option is likely in-the-money with strong directional exposure.");
      setRiskLevel("high");
    }
  }, [delta]);

  const riskColors = {
    low: isDarkMode ? 'text-green-400' : 'text-green-600',
    moderate: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
    high: isDarkMode ? 'text-orange-400' : 'text-orange-600'
  };

  const riskBgColors = {
    low: isDarkMode ? 'bg-green-500/10' : 'bg-green-50',
    moderate: isDarkMode ? 'bg-yellow-500/10' : 'bg-yellow-50',
    high: isDarkMode ? 'bg-orange-500/10' : 'bg-orange-50'
  };

  return (
    <div className={`rounded-xl p-5 shadow-md ${
      isDarkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200'
    }`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${riskBgColors[riskLevel]}`}>
          <Lightbulb className={`size-4 ${riskColors[riskLevel]}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Risk Insight
            </h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              riskBgColors[riskLevel]
            } ${riskColors[riskLevel]}`}>
              {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
            </span>
          </div>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {insight}
          </p>
        </div>
      </div>
    </div>
  );
}
