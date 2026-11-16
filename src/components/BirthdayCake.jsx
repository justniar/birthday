import React, { useState } from 'react';
import { Flame, RotateCcw, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PaperBlossom } from './ScrapbookDecorations';

export default function BirthdayCake() {
  const [candles, setCandles] = useState(Array(25).fill(true));
  const [wishMade, setWishMade] = useState(false);

  const activeCandlesCount = candles.filter(Boolean).length;

  const toggleSingleCandle = (idx) => {
    setCandles(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      const remaining = next.filter(Boolean).length;
      if (remaining === 0) {
        triggerGrandCelebration();
      }
      return next;
    });
  };

  const blowAllCandles = () => {
    setCandles(Array(25).fill(false));
    triggerGrandCelebration();
  };

  const relightCandles = () => {
    setCandles(Array(25).fill(true));
    setWishMade(false);
  };

  const triggerGrandCelebration = () => {
    setWishMade(true);
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#c8a2c8', '#b88553', '#f4a6ba', '#faf6f0', '#ffffff', '#e5cde7']
      });
    }, 250);
  };

  return (
    <section id="cake" className="py-20 px-3 sm:px-6 max-w-4xl mx-auto text-center">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3">
          <Gift className="w-3.5 h-3.5 text-[#b88553]" />
          <span>Interactive Celebration</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-white mb-2">
          Make a Wish for Chapter 25
        </h2>
        <p className="text-[#c4b5a5] text-sm sm:text-base max-w-lg mx-auto font-serif italic">
          25 candles for your 25 years. Close your eyes, think of your biggest dream for this year, and blow out the candles!
        </p>
      </div>

      {/* Cake Container */}
      <div className="relative max-w-lg mx-auto cardstock-black rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-[#2b2730] shadow-book overflow-hidden">
        
        <PaperBlossom size={46} className="absolute top-4 left-6" rotation={-15} />
        <PaperBlossom size={42} className="absolute top-8 right-8" rotation={25} />

        {/* Candles Grid (Top of cake) */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#c4b5a5] mb-4 flex items-center justify-center gap-2">
            <span>Glowing Candles:</span>
            <span className="font-bold text-[#b88553] text-sm">{activeCandlesCount} / 25</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-xs mx-auto">
            {candles.map((isLit, idx) => (
              <button
                key={idx}
                onClick={() => toggleSingleCandle(idx)}
                className="flex flex-col items-center group focus:outline-none"
                title={isLit ? "Click to blow this candle" : "Click to relight"}
              >
                {/* Flame */}
                <div className="h-5 flex items-end justify-center">
                  {isLit ? (
                    <div className="w-2.5 h-4 bg-gradient-to-t from-amber-600 via-amber-300 to-white rounded-full shadow-[0_0_10px_#f59e0b] flame-active" />
                  ) : (
                    <div className="w-1 h-2 bg-gray-500/60 rounded-full animate-fade-out" />
                  )}
                </div>

                {/* Candle Stick */}
                <div className={`w-2 h-7 sm:h-8 rounded-t-sm transition-colors ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-b from-[#faf6f0] to-[#d8c7b0]'
                    : 'bg-gradient-to-b from-[#c8a2c8] to-[#9e719f]'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Tiered Handcrafted Cake */}
        <div className="relative flex flex-col items-center">
          
          {/* Tier 1 (Top) */}
          <div className="w-48 sm:w-56 h-12 bg-gradient-to-r from-[#3e2c22] via-[#4d372b] to-[#3e2c22] rounded-t-xl border-t-4 border-[#b88553] shadow-md relative flex items-center justify-center">
            <span className="text-[11px] font-mono tracking-widest text-[#faf6f0] uppercase font-semibold">
              Chapter 25
            </span>
          </div>

          {/* Tier 2 (Middle) */}
          <div className="w-64 sm:w-72 h-14 bg-gradient-to-r from-[#2a1c14] via-[#352319] to-[#2a1c14] border-t-2 border-[#b88553]/60 shadow-lg relative flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="text-[#c8a2c8] text-xs">🌸</span>
              <span className="text-xs font-serif italic text-[#f4efe8]">17 . 11 . 2001</span>
              <span className="text-[#c8a2c8] text-xs">🌸</span>
            </div>
          </div>

          {/* Tier 3 (Base) */}
          <div className="w-80 sm:w-96 h-16 bg-gradient-to-r from-[#1c120c] via-[#241710] to-[#1c120c] rounded-b-xl border-t-4 border-[#b88553] shadow-2xl relative flex items-center justify-center">
            <span className="font-calligraphy text-2xl sm:text-3xl text-[#faf6f0]">
              Happy 25th Birthday, Sayang ♡
            </span>
          </div>

          {/* Wooden / Kraft Cake Platter */}
          <div className="w-[340px] sm:w-[420px] h-3.5 bg-gradient-to-r from-[#7a5029] via-[#b88553] to-[#7a5029] rounded-full shadow-xl mt-1 border-t border-[#d4a373]" />
          <div className="w-28 sm:w-36 h-4 bg-gradient-to-r from-[#59391c] via-[#7a5029] to-[#59391c] rounded-b-lg shadow-md" />

        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {activeCandlesCount > 0 ? (
            <button
              onClick={blowAllCandles}
              className="px-6 py-3 bg-[#b88553] hover:bg-[#c89563] text-[#1c130e] font-serif font-black text-sm sm:text-base rounded-full shadow-kraft active:scale-95 transition-all flex items-center gap-2"
            >
              <Flame className="w-5 h-5 text-amber-900 animate-bounce" />
              <span>Make a Wish & Blow All 25 Candles</span>
            </button>
          ) : (
            <button
              onClick={relightCandles}
              className="px-6 py-3 bg-[#241f29] hover:bg-[#342d3b] text-[#c8a2c8] font-serif font-semibold text-sm rounded-full border border-[#484252] shadow-md transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-[#d2a679]" />
              <span>Relight Candles (Make Another Wish)</span>
            </button>
          )}
        </div>

        {/* Wish Granted Modal / Certificate Banner */}
        {wishMade && (
          <div className="mt-8 p-6 bg-[#faf6f0] text-[#241710] border-2 border-[#b88553] rounded-xl shadow-xl animate-fade-in text-center relative">
            <h4 className="text-2xl sm:text-3xl font-calligraphy text-[#1c1209] mb-2">
              Wish Sent to the Universe ♡
            </h4>
            <p className="text-[#3a2517] text-sm sm:text-base font-serif leading-relaxed max-w-md mx-auto">
              Semoga setiap doa baik yang kamu simpan dalam hati di hembusan lilin ke-25 ini didengar dan dilipatgandakan kebaikannya. Langkahmu akan selalu diberkahi, sayang.
            </p>
            <div className="mt-3 pt-3 border-t border-[#d8c7b0] font-handwritten text-2xl text-[#7a5029]">
              Forever your biggest fan ♡
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
