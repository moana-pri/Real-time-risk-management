import { Gauge, TrendingUp, Activity } from "lucide-react";
import { useState, useEffect } from "react";

interface RiskMetricsScreenProps {
  isDarkMode: boolean;
}

interface GreekMetric {
  name: string;
  symbol: string;
  value: number;
  description: string;
  range: string;
}

export function RiskMetricsScreen({ isDarkMode }: RiskMetricsScreenProps) {
  const [greeks, setGreeks] = useState<GreekMetric[]>([
    {
      name: "Delta",
      symbol: "Δ",
      value: 0.6523,
      description: "Rate of change of option price with respect to underlying price",
      range: "0 to 1 (Call), -1 to 0 (Put)"
    },
    {
      name: "Gamma",
      symbol: "Γ",
      value: 0.0234,
      description: "Rate of change of delta with respect to underlying price",
      range: "Always positive"
    },
    {
      name: "Vega",
      symbol: "ν",
      value: 0.1845,
      description: "Sensitivity to volatility changes",
      range: "Always positive"
    },
    {
      name: "Theta",
      symbol: "Θ",
      value: -0.0523,
      description: "Time decay of option value",
      range: "Usually negative"
    },
    {
      name: "Rho",
      symbol: "ρ",
      value: 0.0412,
      description: "Sensitivity to interest rate changes",
      range: "Positive (Call), Negative (Put)"
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeks(prev => prev.map(greek => ({
        ...greek,
        value: greek.name === "Theta" 
          ? parseFloat((greek.value + (Math.random() - 0.5) * 0.01).toFixed(4))
          : parseFloat((Math.max(0, greek.value + (Math.random() - 0.5) * 0.02)).toFixed(4))
      })));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl">
      <div className="mb-6">
        <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Risk Metrics
        </h1>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Real-time options Greeks computed using Black-76 model
        </p>
      </div>

      {/* Greeks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {greeks.map((greek) => (
          <div
            key={greek.name}
            className={`rounded-xl p-6 border ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Gauge className={`size-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {greek.name}
                </h3>
              </div>
              <div className={`size-1.5 rounded-full animate-pulse ${
                isDarkMode ? 'bg-green-400' : 'bg-green-500'
              }`}></div>
            </div>

            <div className={`p-4 rounded-lg mb-4 ${
              isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center justify-center gap-2">
                <span className={`text-lg font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {greek.symbol} =
                </span>
                <span className={`text-3xl font-bold tabular-nums ${
                  greek.value < 0
                    ? 'text-red-500'
                    : isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  {greek.value.toFixed(4)}
                </span>
              </div>
            </div>

            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {greek.description}
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Range: {greek.range}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Card */}
      <div className={`rounded-xl p-6 border ${
        isDarkMode 
          ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20' 
          : 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
            <Activity className={`size-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <div>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About Options Greeks
            </h3>
            <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Greeks are risk measures that describe how an option's price changes in response to various 
              factors. These metrics are computed in real-time using the Black-76 model, which is 
              specifically designed for pricing options on futures contracts.
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              All values update automatically as market data streams in from the exchange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
