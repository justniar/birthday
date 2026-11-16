import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onScrollTop }) {
  return (
    <footer className="py-16 px-4 border-t border-[#3e2c22] bg-[#140d09]/95 text-center relative z-10">
      
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
        
        {/* Heart Icon Badge */}
        <div className="w-11 h-11 rounded-full bg-[#b88553] text-[#1c130e] flex items-center justify-center shadow-md">
          <Heart className="w-5 h-5 fill-current" />
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
            Happy 25th Birthday, Sayang ♡
          </h3>
          <p className="font-calligraphy text-3xl sm:text-4xl text-[#c8a2c8]">
            “Loving you is the greatest honor I know”
          </p>
          <div className="text-xs font-mono text-[#d2a679] mt-2">
            17 November 2001 &bull; 17 November 2026 &bull; Memories We Made
          </div>
        </div>

        <button
          onClick={onScrollTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#241913] hover:bg-[#32231b] text-[#d8c7b0] text-xs font-mono border border-[#4d3629] transition-colors shadow-sm"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#b88553]" />
          <span>Back to Top</span>
        </button>

        <p className="text-[11px] text-[#7a6455] font-sans">
          Created with endless love, admiration, and gratitude for your presence in this world.
        </p>

      </div>

    </footer>
  );
}
