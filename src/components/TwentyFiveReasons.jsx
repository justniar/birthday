import React, { useState } from 'react';
import { Heart, Sparkles, Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';
import { twentyFiveReasons } from '../data/scrapbookData';

export default function TwentyFiveReasons() {
  const [unlocked, setUnlocked] = useState({});

  const toggleCard = (id) => {
    setUnlocked(prev => {
      const next = { ...prev, [id]: !prev[id] };
      const count = Object.values(next).filter(Boolean).length;
      if (count === 25) {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#c8a2c8', '#b88553', '#f4a6ba', '#faf6f0', '#ffffff']
        });
      }
      return next;
    });
  };

  const unlockAll = () => {
    const all = {};
    twentyFiveReasons.forEach(r => { all[r.id] = true; });
    setUnlocked(all);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#c8a2c8', '#b88553', '#f4a6ba', '#faf6f0']
    });
  };

  const lockAll = () => {
    setUnlocked({});
  };

  const count = Object.values(unlocked).filter(Boolean).length;

  return (
    <section id="reasons" className="py-20 px-3 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3">
          <Heart className="w-3.5 h-3.5 text-[#f4a6ba] fill-current" />
          <span>25 Years &bull; 25 Reasons</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-white mb-2">
          25 Reasons Loving You is a Privilege
        </h2>
        <p className="text-[#c4b5a5] text-sm sm:text-base max-w-xl mx-auto font-serif italic">
          Tap each note to uncover 25 little things, moments, and reasons why my heart chose you and continues to choose you every day.
        </p>

        {/* Progress & Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <div className="bg-[#17161a] border border-[#3e3745] px-4 py-1.5 rounded-full text-xs font-mono text-[#f4efe8] flex items-center gap-2">
            <span>Opened:</span>
            <span className="text-[#b88553] font-bold text-sm">{count} / 25</span>
            {count === 25 && <span className="text-[#c8a2c8] font-bold">🌸 All Unlocked!</span>}
          </div>

          <button
            onClick={count === 25 ? lockAll : unlockAll}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs bg-[#241f29] hover:bg-[#342d3b] text-[#c8a2c8] border border-[#484252] transition-colors"
          >
            {count === 25 ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Fold Back All</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-[#d2a679]" />
                <span>Unwrap All 25</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid of 25 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {twentyFiveReasons.map((item) => {
          const isOpen = !!unlocked[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleCard(item.id)}
              className={`min-h-[170px] rounded-xl p-4 cursor-pointer transition-all duration-300 relative border flex flex-col justify-between select-none ${
                isOpen
                  ? 'bg-[#faf6f0] text-[#22160f] border-[#b88553] shadow-lg -translate-y-1'
                  : 'cardstock-black text-[#f4efe8] hover:bg-[#1f1e24] border-[#312c38] hover:border-[#b88553]/60 hover:-translate-y-0.5'
              }`}
            >
              {/* Card Number Pin */}
              <div className="flex items-center justify-between mb-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                  isOpen ? 'bg-[#b88553] text-[#1c130e]' : 'bg-[#26232d] text-[#c8a2c8] border border-[#484252]'
                }`}>
                  #{item.id}
                </span>

                <Heart className={`w-4 h-4 transition-transform ${
                  isOpen ? 'text-[#8b4f65] fill-[#8b4f65] scale-110' : 'text-[#584c63]'
                }`} />
              </div>

              {/* Card Content */}
              <div className="my-auto">
                {isOpen ? (
                  <div className="animate-fade-in">
                    <h4 className="text-xs font-serif font-bold text-[#7a5029] uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#291b12] leading-snug font-serif">
                      {item.desc}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <span className="font-handwritten text-2xl text-[#d8b4e2] block">
                      Tap note #{item.id}
                    </span>
                    <span className="text-[10px] text-[#8e8194] uppercase font-mono mt-1 block">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>

              <div className={`text-right text-[10px] font-mono pt-2 border-t ${
                isOpen ? 'text-[#7a6a5d] border-black/10' : 'text-[#716578] border-[#2f2a36]'
              }`}>
                {isOpen ? 'Tap to fold' : 'Tap to reveal ♡'}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
