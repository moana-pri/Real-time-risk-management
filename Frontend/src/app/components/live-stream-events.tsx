import { Activity, CheckCircle2, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface StreamEvent {
  id: string;
  type: "data" | "compute" | "update";
  message: string;
  timestamp: Date;
}

interface LiveStreamEventsProps {
  isDarkMode: boolean;
}

export function LiveStreamEvents({ isDarkMode }: LiveStreamEventsProps) {
  const [events, setEvents] = useState<StreamEvent[]>([]);

  useEffect(() => {
    const eventMessages = [
      { type: "data" as const, message: "Market data received from exchange feed" },
      { type: "compute" as const, message: "Black-76 delta computation completed" },
      { type: "update" as const, message: "Risk metrics updated in real-time" },
      { type: "data" as const, message: "Price tick processed: NIFTY50" },
      { type: "compute" as const, message: "Greeks recalculated for volatility shift" },
      { type: "update" as const, message: "Dashboard state synchronized" },
    ];

    const addEvent = () => {
      const randomMessage = eventMessages[Math.floor(Math.random() * eventMessages.length)];
      const newEvent: StreamEvent = {
        id: Date.now().toString(),
        type: randomMessage.type,
        message: randomMessage.message,
        timestamp: new Date(),
      };

      setEvents(prev => [newEvent, ...prev].slice(0, 10)); // Keep last 10 events
    };

    // Add initial event
    addEvent();

    // Add new events periodically
    const interval = setInterval(addEvent, 3000);

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

  const getEventIcon = (type: string) => {
    switch (type) {
      case "data":
        return <Activity className="size-3" />;
      case "compute":
        return <Zap className="size-3" />;
      case "update":
        return <CheckCircle2 className="size-3" />;
      default:
        return <Activity className="size-3" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "data":
        return isDarkMode ? 'text-blue-400' : 'text-blue-600';
      case "compute":
        return isDarkMode ? 'text-purple-400' : 'text-purple-600';
      case "update":
        return isDarkMode ? 'text-green-400' : 'text-green-600';
      default:
        return isDarkMode ? 'text-gray-400' : 'text-gray-600';
    }
  };

  return (
    <div className={`rounded-xl p-5 shadow-md border ${
      isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className={`size-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Live Stream Events
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <div className={`size-1.5 rounded-full animate-pulse ${
            isDarkMode ? 'bg-green-400' : 'bg-green-500'
          }`}></div>
          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Active
          </span>
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
              index === 0
                ? isDarkMode ? 'bg-blue-500/5 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                : isDarkMode ? 'bg-gray-900/30' : 'bg-gray-50/50'
            }`}
          >
            <div className={`mt-0.5 ${getEventColor(event.type)}`}>
              {getEventIcon(event.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {event.message}
              </p>
            </div>
            <span className={`text-xs tabular-nums flex-shrink-0 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {formatTime(event.timestamp)}
            </span>
          </div>
        ))}
      </div>

      <div className={`mt-4 pt-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Real-time pipeline activity powered by Pathway streaming engine
        </p>
      </div>
    </div>
  );
}
