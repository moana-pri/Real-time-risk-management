import { Zap, TrendingUp } from "lucide-react";

interface ProfessionalFooterProps {
  isDarkMode: boolean;
}

export function ProfessionalFooter({ isDarkMode }: ProfessionalFooterProps) {
  return (
    <footer className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Technology Stack */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
              <Zap className={`size-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
            <div>
              <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Powered by
              </p>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Pathway Streaming
              </p>
            </div>
          </div>

          <div className={`h-8 w-px ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>

          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
              <TrendingUp className={`size-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Pricing Model
              </p>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Black-76
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Real-time market risk analytics platform built for instant computation of options Greeks 
            using streaming financial data and advanced quantitative models.
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center pb-6">
          <p className={`text-xs ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
            Hackathon Project 2026 • Demo Purpose Only • Not for Production Trading
          </p>
        </div>
      </div>
    </footer>
  );
}
