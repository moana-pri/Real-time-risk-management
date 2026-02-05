import { Zap, TrendingUp, Radio, Shield, Gauge, Code } from "lucide-react";

interface AboutScreenProps {
  isDarkMode: boolean;
}

export function AboutScreen({ isDarkMode }: AboutScreenProps) {
  const features = [
    {
      icon: Radio,
      title: "Real-Time Streaming",
      description: "Live market data streaming from NSE/BSE with sub-second latency"
    },
    {
      icon: Gauge,
      title: "Instant Risk Computation",
      description: "Black-76 model for real-time options Greeks calculation"
    },
    {
      icon: Zap,
      title: "Pathway Engine",
      description: "Powered by Pathway streaming framework for high-performance data processing"
    },
    {
      icon: Shield,
      title: "Production-Ready",
      description: "Clean architecture suitable for production deployment"
    },
  ];

  const techStack = [
    { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { name: "Data Pipeline", items: ["Pathway", "Black-76 Model", "Real-time Computation"] },
    { name: "Data Sources", items: ["NSE Live Feed", "BSE Live Feed", "Simulated Mode"] },
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Real-Time Market Risk Dashboard
        </h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A modern fintech platform for instant options risk analytics
        </p>
      </div>

      {/* Project Overview */}
      <div className={`rounded-xl p-6 mb-8 border ${
        isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Project Overview
        </h2>
        <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          This hackathon project demonstrates a real-time market risk analytics platform that 
          processes live streaming data from Indian stock exchanges (NSE/BSE) and computes 
          options Greeks using the Black-76 pricing model.
        </p>
        <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          The dashboard provides instant visibility into market movements and their impact on 
          options portfolios, enabling traders and risk managers to make informed decisions 
          with minimal latency.
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`p-5 rounded-xl border ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <Icon className={`size-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-8">
        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techStack.map((category) => (
            <div
              key={category.name}
              className={`p-5 rounded-xl border ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <div className={`size-1.5 rounded-full ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Hackathon Info */}
      <div className={`rounded-xl p-6 border ${
        isDarkMode 
          ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20' 
          : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
            <Code className={`size-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hackathon Project 2026
            </h3>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              This is a demonstration project built for educational and hackathon purposes. 
              It showcases real-time data processing capabilities but should not be used for 
              actual trading or production financial decisions.
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              ⚠️ Demo Purpose Only • Not for Production Trading • Educational Use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
