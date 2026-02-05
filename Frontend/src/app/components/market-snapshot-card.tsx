import { Radio, RefreshCw, Database } from "lucide-react";

interface MarketSnapshotCardProps {
  isDarkMode: boolean;
}

export function MarketSnapshotCard({ isDarkMode }: MarketSnapshotCardProps) {
  return (
    <div className={`rounded-xl p-5 shadow-md ${
      isDarkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200'
    }`}>
      <div className="grid grid-cols-3 gap-4">
        {/* Market Status */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-green-500/10' : 'bg-green-50'}`}>
            <Radio className={`size-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <div>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Market Status
            </p>
            <p className={`text-sm font-semibold mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              Open
            </p>
          </div>
        </div>

        {/* Update Frequency */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <RefreshCw className={`size-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Update Frequency
            </p>
            <p className={`text-sm font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              ~2 seconds
            </p>
          </div>
        </div>

        {/* Data Source */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
            <Database className={`size-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <div>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Data Source
            </p>
            <p className={`text-sm font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              NSE Live
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
