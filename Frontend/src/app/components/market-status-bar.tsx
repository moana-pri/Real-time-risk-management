import { Radio, Clock, Building2 } from "lucide-react";

interface MarketStatusBarProps {
  isDarkMode: boolean;
  exchange: "NSE" | "BSE";
  isMarketOpen: boolean;
  dataLatency: number;
}

export function MarketStatusBar({ isDarkMode, exchange, isMarketOpen, dataLatency }: MarketStatusBarProps) {
  return (
    <div className={`rounded-lg p-4 border ${
      isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between gap-6">
        {/* Market Status */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            isMarketOpen 
              ? isDarkMode ? 'bg-green-500/10' : 'bg-green-50'
              : isDarkMode ? 'bg-red-500/10' : 'bg-red-50'
          }`}>
            <Radio className={`size-4 ${
              isMarketOpen 
                ? isDarkMode ? 'text-green-400' : 'text-green-600'
                : isDarkMode ? 'text-red-400' : 'text-red-600'
            }`} />
          </div>
          <div>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Market Status
            </p>
            <p className={`text-sm font-semibold ${
              isMarketOpen 
                ? isDarkMode ? 'text-green-400' : 'text-green-600'
                : isDarkMode ? 'text-red-400' : 'text-red-600'
            }`}>
              {isMarketOpen ? 'Open' : 'Closed'}
            </p>
          </div>
        </div>

        {/* Data Latency */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <Clock className={`size-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Data Latency
            </p>
            <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tabular-nums`}>
              {dataLatency}ms
            </p>
          </div>
        </div>

        {/* Exchange */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
            <Building2 className={`size-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <div>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Exchange
            </p>
            <div className="flex items-center gap-2">
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {exchange}
              </p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
              }`}>
                {exchange === "NSE" ? "National" : "Bombay"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
