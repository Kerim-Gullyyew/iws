// components/Tooltip.tsx
import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative flex items-center justify-center group">
      {children}
      <div className="absolute bg-sky-100 bottom-full mb-1 hidden px-2 py-1 text-xs text-black rounded group-hover:block">
        {text}
      </div>
    </div>
  );
}
