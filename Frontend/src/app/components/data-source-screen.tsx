import { Building2, Radio, CheckCircle2 } from "lucide-react";

interface DataSourceScreenProps {
  isDarkMode: boolean;
  exchange: "NSE" | "BSE";
  dataMode: "live" | "simulated";
  onExchangeChange: (exchange: "NSE" | "BSE") => void;
  onDataModeChange: (mode: "live" | "simulated") => void;
}

export function DataSourceScreen({ 
  isDarkMode, 
  exchange, 
  dataMode, 
  onExchangeChange, 
  onDataModeChange 
}: DataSourceScreenProps) {
  const exchanges = [
    { 
      id: "NSE" as const, 
      name: "National Stock Exchange", 
      shortName: "NSE",
      description: "India's largest stock exchange by market capitalization"
    },
    { 
      id: "BSE" as const, 
      name: "Bombay Stock Exchange", 
      shortName: "BSE",
      description: "Asia's oldest stock exchange, established in 1875"
    },
  ];

  const dataModes = [
    {
      id: "live" as const,
      name: "Live Streaming",
      description: "Real-time market data from exchange feed",
      badge: "Production"
    },
    {
      id: "simulated" as const,
      name: "Simulated Replay",
      description: "Demo mode with simulated market movements",
      badge: "Demo"
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Data Source Configuration
        </h1>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Configure your market data source and streaming mode
        </p>
      </div>

      <div className="space-y-6">
        {/* Exchange Selection */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className={`size-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Exchange
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exchanges.map((ex) => (
              <button
                key={ex.id}
                onClick={() => onExchangeChange(ex.id)}
                className={`p-5 rounded-xl border-2 transition-all text-left ${
                  exchange === ex.id
                    ? isDarkMode
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-blue-500 bg-blue-50'
                    : isDarkMode
                    ? 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      exchange === ex.id
                        ? isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                        : isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Building2 className={`size-5 ${
                        exchange === ex.id
                          ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                          : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {ex.shortName}
                      </h3>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {ex.name}
                      </p>
                    </div>
                  </div>
                  {exchange === ex.id && (
                    <CheckCircle2 className={`size-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  )}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {ex.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Data Mode Toggle */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Radio className={`size-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Data Mode
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => onDataModeChange(mode.id)}
                className={`p-5 rounded-xl border-2 transition-all text-left ${
                  dataMode === mode.id
                    ? isDarkMode
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-purple-500 bg-purple-50'
                    : isDarkMode
                    ? 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      dataMode === mode.id
                        ? isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                        : isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Radio className={`size-5 ${
                        dataMode === mode.id
                          ? isDarkMode ? 'text-purple-400' : 'text-purple-600'
                          : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {mode.name}
                        </h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          mode.id === 'live'
                            ? isDarkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                            : isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {mode.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                  {dataMode === mode.id && (
                    <CheckCircle2 className={`size-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  )}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {mode.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Current Configuration Summary */}
        <div className={`p-5 rounded-xl border ${
          isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Current Configuration
          </h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Exchange:
              </span>
              <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {exchange}
              </span>
            </div>
            <div className={`h-4 w-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Mode:
              </span>
              <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {dataMode === 'live' ? 'Live Streaming' : 'Simulated Replay'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
