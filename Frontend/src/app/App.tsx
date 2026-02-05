import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { DashboardScreen } from "./components/dashboard-screen";
import { MarketFeedScreen } from "./components/market-feed-screen";
import { RiskMetricsScreen } from "./components/risk-metrics-screen";
import { DataSourceScreen } from "./components/data-source-screen";
import { AboutScreen } from "./components/about-screen";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [exchange, setExchange] = useState<"NSE" | "BSE">("NSE");
  const [dataMode, setDataMode] = useState<"live" | "simulated">("live");
  const [currentPrice, setCurrentPrice] = useState(21453.75);
  const [currentDelta, setCurrentDelta] = useState(0.6523);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleNavigate = (view: string) => {
    setActiveView(view);
  };

  const handlePriceChange = (price: number) => {
    setCurrentPrice(price);
  };

  const handleDeltaChange = (delta: number) => {
    setCurrentDelta(delta);
  };

  const handleExchangeChange = (newExchange: "NSE" | "BSE") => {
    setExchange(newExchange);
  };

  const handleDataModeChange = (mode: "live" | "simulated") => {
    setDataMode(mode);
  };

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <DashboardScreen
            isDarkMode={isDarkMode}
            exchange={exchange}
            dataMode={dataMode}
            currentPrice={currentPrice}
            currentDelta={currentDelta}
            onThemeToggle={handleThemeToggle}
            onPriceChange={handlePriceChange}
            onDeltaChange={handleDeltaChange}
          />
        );
      case "market-feed":
        return <MarketFeedScreen isDarkMode={isDarkMode} exchange={exchange} />;
      case "risk-metrics":
        return <RiskMetricsScreen isDarkMode={isDarkMode} />;
      case "data-source":
        return (
          <DataSourceScreen
            isDarkMode={isDarkMode}
            exchange={exchange}
            dataMode={dataMode}
            onExchangeChange={handleExchangeChange}
            onDataModeChange={handleDataModeChange}
          />
        );
      case "about":
        return <AboutScreen isDarkMode={isDarkMode} />;
      default:
        return (
          <DashboardScreen
            isDarkMode={isDarkMode}
            exchange={exchange}
            dataMode={dataMode}
            currentPrice={currentPrice}
            currentDelta={currentDelta}
            onThemeToggle={handleThemeToggle}
            onPriceChange={handlePriceChange}
            onDeltaChange={handleDeltaChange}
          />
        );
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <Sidebar
        isDarkMode={isDarkMode}
        isCollapsed={isSidebarCollapsed}
        activeView={activeView}
        onToggleCollapse={handleSidebarToggle}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
