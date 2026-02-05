import { Activity, Moon, Sun } from "lucide-react";
import { MarketStatusBar } from "./market-status-bar";
import { MarketDataCard } from "./market-data-card";
import { RiskMetricCard } from "./risk-metric-card";
import { RiskInsightCard } from "./risk-insight-card";
import { RecentUpdatesCard } from "./recent-updates-card";
import { LiveStreamEvents } from "./live-stream-events";

interface DashboardScreenProps {
  isDarkMode: boolean;
  exchange: "NSE" | "BSE";
  dataMode: "live" | "simulated";
  currentPrice: number;
  currentDelta: number;
  onThemeToggle: () => void;
  onPriceChange: (price: number) => void;
  onDeltaChange: (delta: number) => void;
}

export function DashboardScreen({
  isDarkMode,
  exchange,
  dataMode,
  currentPrice,
  currentDelta,
  onThemeToggle,
  onPriceChange,
  onDeltaChange,
}: DashboardScreenProps) {
  const isMarketOpen = true; // Simplified for demo
  const dataLatency = Math.floor(Math.random() * 50) + 10; // Simulated latency

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <Activity className={`size-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Real-Time Market Risk Dashboard
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="relative">
                <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 size-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                {dataMode === 'live' ? 'Live Streaming' : 'Simulated Mode'}
              </span>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={onThemeToggle}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
      </div>

      {/* Market Status Bar */}
      <div className="mb-6">
        <MarketStatusBar
          isDarkMode={isDarkMode}
          exchange={exchange}
          isMarketOpen={isMarketOpen}
          dataLatency={dataLatency}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Main Cards */}
        <div className="xl:col-span-2 space-y-6">
          {/* Live Market Data */}
          <MarketDataCard 
            isDarkMode={isDarkMode} 
            onPriceChange={onPriceChange}
            exchange={exchange}
          />

          {/* Real-Time Risk Metric */}
          <RiskMetricCard 
            isDarkMode={isDarkMode}
            onDeltaChange={onDeltaChange}
          />
        </div>

        {/* Right Column - Supporting Panels */}
        <div className="space-y-6">
          {/* Risk Insight */}
          <RiskInsightCard 
            isDarkMode={isDarkMode}
            delta={currentDelta}
          />

          {/* Recent Updates */}
          <RecentUpdatesCard 
            isDarkMode={isDarkMode}
            currentPrice={currentPrice}
          />

          {/* Live Stream Events */}
          <LiveStreamEvents isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
