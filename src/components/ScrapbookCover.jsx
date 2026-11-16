import React from 'react';
import { Heart, BookOpen, ChevronDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  LaceDoily, 
  PaperBlossom, 
  PostageStamp, 
  BakerTwineBow, 
  BotanicalSprig,
  BinderSpine 
} from './ScrapbookDecorations';

export default function ScrapbookCover({ onOpen }) {
  const handleOpenClick = () => {
    // Burst of pastel lilac, kraft, rose, and cream confetti
    confetti({
      particleCount: 85,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#c8a2c8', '#b88553', '#f4a6ba', '#faf6f0', '#ffffff', '#e5cde7']
    });
    onOpen();
  };

  return (
    <section id="cover" className="min-h-screen relative flex items-center justify-center p-3 sm:p-8 pt-24 pb-16">
      
      {/* Tabletop Flatlay Backdrop Accent */}
      <div className="absolute top-12 left-10 text-xs font-serif italic text-[#8d7565]/40 select-none hidden md:block">
        ✦ dried botanicals & quiet memories
      </div>

      {/* Main Handcrafted Scrapbook Book Album Container */}
      <div className="relative w-full max-w-2xl cardstock-black rounded-2xl sm:rounded-3xl p-6 sm:p-12 border-2 border-[#2b2730] shadow-book overflow-hidden">
        
        {/* Binder Rings on the left edge */}
        <BinderSpine rings={7} />

        {/* Top-Left: Vintage Lace Doily & Mesh Swatch */}
        <div className="absolute -top-10 -left-10 z-0">
          <LaceDoily position="top-left" />
        </div>

        {/* Cheesecloth gauze swatch with faux pearls */}
        <div className="absolute top-8 left-12 w-28 h-20 bg-white/10 border border-white/20 -rotate-6 pointer-events-none rounded-sm backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff99_1px,transparent_1px)] [background-size:6px_6px]" />
          {/* Faux pearls */}
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm absolute top-3 left-4" />
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm absolute top-7 left-14" />
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm absolute bottom-4 left-8" />
        </div>

        {/* Small Lilac Blossom near top-left doily */}
        <PaperBlossom size={42} className="absolute top-12 left-28 z-20" rotation={-15} />

        {/* Right Margin: Vertical Corrugated Cardboard Strip */}
        <div className="absolute top-0 bottom-0 right-4 sm:right-6 w-9 sm:w-11 corrugated-cardboard z-10">
          {/* Pink and White Twisted Baker's Twine Running Down */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 bakers-twine" />
        </div>

        {/* Top-Right: Torn Parchment Paper & Lilac Blossom Cluster */}
        <div className="absolute top-8 right-16 sm:right-20 z-10 pointer-events-none">
          {/* Torn kraft paper swatch */}
          <div className="w-24 sm:w-28 h-16 bg-[#d4a373] -rotate-3 rounded-sm shadow-md border-b-2 border-r-2 border-[#b88553] flex items-center justify-center p-2">
            <span className="font-handwritten text-xs text-[#2a170d] -rotate-1 opacity-70">
              forever & always ♡
            </span>
          </div>
          {/* Cluster of 3D lilac paper flowers */}
          <PaperBlossom size={48} className="absolute -top-3 -left-3" rotation={10} />
          <PaperBlossom size={46} className="absolute top-3 left-12" rotation={-25} />
          <PaperBlossom size={54} className="absolute top-10 left-5" rotation={5} />
        </div>

        {/* Bottom-Right: Scalloped Lace Doily & Tied Twine Bow */}
        <div className="absolute -bottom-10 -right-6 z-20 pointer-events-none">
          <LaceDoily position="bottom-right" className="rotate-180" />
          <BakerTwineBow className="absolute top-6 left-6" />
        </div>

        {/* White Gel Pen Botanical Sprig (bottom-left) */}
        <BotanicalSprig className="absolute bottom-6 left-10 w-28 sm:w-36 h-36 z-0" />

        {/* White Gel Pen Doodles & Handwritten Hearts scattered across */}
        <div className="absolute top-36 left-8 text-white/80 font-serif text-sm pointer-events-none">✦</div>
        <div className="absolute bottom-28 left-40 text-white/70 font-handwritten text-lg pointer-events-none">♡</div>
        <div className="absolute bottom-16 right-24 text-white/70 font-handwritten text-xl pointer-events-none z-30">♡</div>
        <div className="absolute top-20 right-36 text-white/80 font-serif text-xs pointer-events-none">✦</div>

        {/* Main Cover Content */}
        <div className="relative z-20 pl-4 pr-10 sm:px-6 pt-10 pb-6 text-center">
          
          {/* Handcrafted Header Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#26232d] border border-[#484252] text-[#d8b4e2] text-xs uppercase tracking-wider font-mono mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#f4a6ba]" />
            <span>Chapter 25 &bull; Handcrafted Keepsake</span>
            <Sparkles className="w-3 h-3 text-[#f4a6ba]" />
          </div>

          {/* Central Postage Stamp Plaque (The Exact Hero Element) */}
          <div className="max-w-md mx-auto my-4 sm:my-6">
            <PostageStamp tilt="-rotate-1">
              <div className="text-center py-2 sm:py-4">
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#8c6742] block mb-1">
                  17 . 11 . 2001 &bull; 17 . 11 . 2026
                </span>
                
                <h1 className="text-4xl sm:text-6xl font-calligraphy text-[#22160f] leading-none mb-2">
                  Memories we made
                </h1>

                <p className="font-serif italic text-base sm:text-lg text-[#5a4232] font-semibold">
                  Happy 25th Birthday to My Favorite Person
                </p>

                <div className="w-16 h-[1px] bg-[#d2a679] mx-auto my-3" />

                <p className="font-handwritten text-xl sm:text-2xl text-[#3b2a20] leading-snug">
                  “Loving you is a privilege I don’t take lightly”
                </p>
              </div>
            </PostageStamp>
          </div>

          {/* Subtitle / Quote Card */}
          <div className="max-w-md mx-auto my-5 bg-[#1f1d24]/90 p-4 rounded-xl border border-dashed border-[#574d61] backdrop-blur-sm">
            <p className="font-handwritten text-lg sm:text-xl text-[#f3ebd9] leading-relaxed">
              Dua puluh lima tahun perjalanan hidupmu yang luar biasa, dirangkum dalam setiap lembar kenangan ini.
            </p>
          </div>

          {/* Interactive Open Button Styled as a Wax Seal & Kraft Ribbon */}
          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={handleOpenClick}
              className="group relative flex flex-col items-center focus:outline-none"
            >
              {/* Wax Seal Stamp */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#b88553] border-4 border-[#e2c7a7] shadow-[0_4px_20px_rgba(184,133,83,0.5)] flex items-center justify-center transform group-hover:scale-105 group-active:scale-95 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#ffffff]/60 flex flex-col items-center justify-center">
                  <Heart className="w-5 h-5 text-[#ffffff] fill-[#ffffff] group-hover:animate-bounce" />
                  <span className="text-[10px] font-serif font-black text-[#1c130e] uppercase tracking-wider mt-0.5">OPEN</span>
                </div>
              </div>

              <span className="mt-3 text-xs sm:text-sm font-handwritten text-2xl text-[#d8b4e2] group-hover:text-white transition-colors flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#b88553]" />
                Buka lembar scrapbook 🌸
              </span>
            </button>
          </div>

          <div className="mt-6 text-[#9a8d9e] text-xs flex items-center justify-center gap-1">
            <span>Scroll down or tap to unfold</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>

        </div>

      </div>

    </section>
  );
}
