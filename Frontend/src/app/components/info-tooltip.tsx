import { Info } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

interface InfoTooltipProps {
  content: string;
  isDarkMode: boolean;
}

export function InfoTooltip({ content, isDarkMode }: InfoTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className={`inline-flex items-center justify-center ${
            isDarkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
          } transition-colors`}>
            <Info className="size-3.5" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`max-w-xs px-3 py-2 text-xs rounded-lg shadow-lg z-50 ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-100 border border-gray-600' 
                : 'bg-gray-900 text-white'
            }`}
            sideOffset={5}
          >
            {content}
            <Tooltip.Arrow className={isDarkMode ? 'fill-gray-700' : 'fill-gray-900'} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
