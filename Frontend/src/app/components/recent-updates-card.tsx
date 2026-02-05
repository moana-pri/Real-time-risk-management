import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { useState, useEffect } from "react";

interface PriceTick {
  id: string;
  price: number;
  change: number;
  timestamp: Date;
}

interface RecentUpdatesCardProps {
  isDarkMode: boolean;
  currentPrice: number;
}

export function RecentUpdatesCard({ isDarkMode, currentPrice }: RecentUpdatesCardProps) {
  const [ticks, setTicks] = useState<PriceTick[]>([]);

  useEffect(() => {
    // Add new tick when price changes
    setTicks(prev => {
      const change = prev.length > 0 ? currentPrice - prev[0].price : 0;
      const newTick: PriceTick = {
        id: Date.now().toString(),
        price: currentPrice,
        change,
        timestamp: new Date()
      };
      
      // Keep only last 5 ticks
      return [newTick, ...prev].slice(0, 5);
    });
  }, [currentPrice]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className={`rounded-xl p-5 shadow-md ${
      isDarkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Updates
        </h3>
        <div className="flex items-center gap-1">
          <div className={`size-1.5 rounded-full animate-pulse ${
            isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
          }`}></div>
          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Live
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {ticks.length === 0 ? (
          <p className={`text-sm text-center py-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Waiting for updates...
          </p>
        ) : (
          ticks.map((tick, index) => (
            <div
              key={tick.id}
              className={`flex items-center justify-between p-2.5 rounded-lg transition-all ${
                index === 0 
                  ? isDarkMode ? 'bg-blue-500/5 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                  : isDarkMode ? 'bg-gray-900/30' : 'bg-gray-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1 rounded ${
                  tick.change > 0 
                    ? isDarkMode ? 'bg-green-500/10' : 'bg-green-100'
                    : tick.change < 0
                    ? isDarkMode ? 'bg-red-500/10' : 'bg-red-100'
                    : isDarkMode ? 'bg-gray-500/10' : 'bg-gray-100'
                }`}>
                  {tick.change > 0 ? (
                    <ArrowUpRight className="size-3 text-green-500" />
                  ) : tick.change < 0 ? (
                    <ArrowDownRight className="size-3 text-red-500" />
                  ) : (
                    <Minus className="size-3 text-gray-500" />
                  )}
                </div>
                <div>
                  <p className={`text-sm font-semibold tabular-nums ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    ₹{tick.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  {tick.change !== 0 && (
                    <p className={`text-xs tabular-nums ${
                      tick.change > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {tick.change > 0 ? '+' : ''}{tick.change.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
              <span className={`text-xs tabular-nums ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {formatTime(tick.timestamp)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
