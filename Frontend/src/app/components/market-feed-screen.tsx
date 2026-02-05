import { Radio, TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

interface MarketFeedScreenProps {
  isDarkMode: boolean;
  exchange: "NSE" | "BSE";
}

interface FeedItem {
  id: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  timestamp: Date;
}

export function MarketFeedScreen({ isDarkMode, exchange }: MarketFeedScreenProps) {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    // Initialize feed with some symbols
    const symbols = ["NIFTY50", "BANKNIFTY", "RELIANCE", "TCS", "INFY", "HDFC", "ICICIBANK", "SBIN"];
    const initialFeed = symbols.map((symbol, index) => ({
      id: `${symbol}-${Date.now()}`,
      symbol,
      price: 1000 + Math.random() * 20000,
      change: (Math.random() - 0.5) * 200,
      changePercent: (Math.random() - 0.5) * 5,
      volume: Math.floor(Math.random() * 1000000),
      timestamp: new Date(Date.now() - index * 1000),
    }));
    setFeedItems(initialFeed);

    // Update feed periodically
    const interval = setInterval(() => {
      setFeedItems(prev => {
        const updated = prev.map(item => ({
          ...item,
          price: item.price + (Math.random() - 0.5) * 50,
          change: (Math.random() - 0.5) * 200,
          changePercent: (Math.random() - 0.5) * 5,
          volume: item.volume + Math.floor(Math.random() * 10000),
          timestamp: new Date(),
        }));
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Market Feed
          </h1>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Live streaming market data from {exchange}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 size-2 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className={`text-sm font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
            Live
          </span>
        </div>
      </div>

      <div className={`rounded-xl border overflow-hidden ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        {/* Table Header */}
        <div className={`grid grid-cols-6 gap-4 p-4 border-b font-semibold text-sm ${
          isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'
        }`}>
          <div>Symbol</div>
          <div className="text-right">Price</div>
          <div className="text-right">Change</div>
          <div className="text-right">Change %</div>
          <div className="text-right">Volume</div>
          <div className="text-right">Updated</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-700">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-6 gap-4 p-4 transition-colors ${
                isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Radio className={`size-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.symbol}
                </span>
              </div>
              <div className={`text-right font-semibold tabular-nums ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className={`text-right font-semibold tabular-nums flex items-center justify-end gap-1 ${
                item.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {item.change >= 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
              </div>
              <div className={`text-right font-semibold tabular-nums ${
                item.changePercent >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
              </div>
              <div className={`text-right tabular-nums text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {(item.volume / 1000).toFixed(0)}K
              </div>
              <div className={`text-right tabular-nums text-xs ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {formatTime(item.timestamp)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
