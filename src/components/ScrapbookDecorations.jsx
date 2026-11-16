import React from 'react';

// Delicate Vintage Paper Lace Doily Corner (as in the Pinterest pin)
export function LaceDoily({ className = "", position = "top-left" }) {
  const isTopLeft = position === "top-left";
  return (
    <div className={`pointer-events-none select-none z-10 ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 sm:w-36 h-28 sm:h-36 drop-shadow-md opacity-90"
      >
        {/* Scalloped outer edge & lacework cutouts */}
        <circle cx="80" cy="80" r="76" fill="#FAF7F2" stroke="#E5DEC9" strokeWidth="1" />
        
        {/* Lace decorative holes */}
        <circle cx="80" cy="80" r="66" stroke="#D8CDB6" strokeDasharray="3 4" strokeWidth="1.5" />
        <circle cx="80" cy="80" r="54" stroke="#D8CDB6" strokeDasharray="2 3" strokeWidth="1.2" />
        <circle cx="80" cy="80" r="40" fill="#FDFBF7" stroke="#E5DEC9" strokeWidth="1" />
        
        {/* Intricate floral petals in lace */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
          <g key={i} transform={`rotate(${deg} 80 80)`}>
            <circle cx="80" cy="18" r="4.5" fill="#FAF7F2" stroke="#D8CDB6" strokeWidth="1" />
            <circle cx="80" cy="18" r="2" fill="#E8DBC3" />
            <path d="M76 34 Q80 25 84 34" stroke="#D8CDB6" strokeWidth="1" fill="none" />
            <circle cx="80" cy="48" r="2.5" fill="#D8CDB6" />
          </g>
        ))}

        {/* Center medallion */}
        <circle cx="80" cy="80" r="26" fill="#FAF7F2" stroke="#D8CDB6" strokeWidth="1.2" />
        <circle cx="80" cy="80" r="16" fill="#F4EEDB" stroke="#D8CDB6" strokeDasharray="2 2" strokeWidth="1" />
        <circle cx="80" cy="80" r="6" fill="#FAF7F2" />
      </svg>
    </div>
  );
}

// 3D Layered Lilac Paper Blossom (exact shape & veins from the Pinterest cover)
export function PaperBlossom({ size = 48, className = "", rotation = 0 }) {
  return (
    <div 
      className={`inline-block pointer-events-none select-none transition-transform hover:scale-110 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[2px_3px_5px_rgba(0,0,0,0.5)]"
      >
        {/* Shadow base layer */}
        <g stroke="#261c28" strokeWidth="2.5" strokeLinejoin="round">
          {/* Petal 1 (Top) */}
          <path d="M50 48 C42 22 28 15 48 10 C68 6 60 25 50 48" fill="#C8A2C8" />
          {/* Petal 2 (Top-Right) */}
          <path d="M52 50 C76 38 88 28 92 46 C96 64 74 62 52 50" fill="#D3B0D3" />
          {/* Petal 3 (Bottom-Right) */}
          <path d="M50 52 C65 72 75 88 58 92 C41 96 42 74 50 52" fill="#C8A2C8" />
          {/* Petal 4 (Bottom-Left) */}
          <path d="M48 52 C28 70 12 78 10 60 C8 42 32 44 48 52" fill="#D8B5D8" />
          {/* Petal 5 (Top-Left) */}
          <path d="M48 48 C25 35 15 18 30 14 C45 10 46 32 48 48" fill="#BE95BE" />
        </g>

        {/* Delicate inner black petal veins */}
        <g stroke="#3c2242" strokeWidth="1.2" opacity="0.85">
          <path d="M50 48 Q49 25 48 16" />
          <path d="M50 48 Q68 45 80 43" />
          <path d="M50 48 Q60 68 59 78" />
          <path d="M50 48 Q32 62 22 61" />
          <path d="M50 48 Q34 32 28 24" />
        </g>

        {/* Center pistil / stamen */}
        <circle cx="50" cy="48" r="6" fill="#58315E" stroke="#1D0E20" strokeWidth="1.5" />
        <circle cx="50" cy="48" r="2.5" fill="#FAF5FB" />
      </svg>
    </div>
  );
}

// Scalloped Kraft Postage Stamp Frame (The centerpiece from Pinterest)
export function PostageStamp({ children, className = "", tilt = "-rotate-1" }) {
  return (
    <div className={`relative ${tilt} transition-transform ${className}`}>
      {/* Kraft Paper Base with Scalloped Edge Effect */}
      <div className="relative bg-[#b88553] p-4 sm:p-5 rounded-md shadow-[0_12px_28px_rgba(0,0,0,0.65)] border border-[#8f6236]">
        
        {/* Scallop punch hole accents on sides */}
        <div className="absolute -top-1.5 left-0 right-0 flex justify-around pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#17161a]" />
          ))}
        </div>
        <div className="absolute -bottom-1.5 left-0 right-0 flex justify-around pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#17161a]" />
          ))}
        </div>
        <div className="absolute top-0 bottom-0 -left-1.5 flex flex-col justify-around pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#17161a]" />
          ))}
        </div>
        <div className="absolute top-0 bottom-0 -right-1.5 flex flex-col justify-around pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#17161a]" />
          ))}
        </div>

        {/* Inner Cream Inset Plaque */}
        <div className="bg-[#FAF6F0] rounded-sm p-5 sm:p-7 text-[#241710] shadow-inner border border-[#d8c7b0]">
          {children}
        </div>
      </div>
    </div>
  );
}

// Pink & White Baker's Twine Tied Bow
export function BakerTwineBow({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-14 drop-shadow-[1px_2px_4px_rgba(0,0,0,0.4)]"
      >
        {/* Left Loop */}
        <path
          d="M50 40 C35 15 10 20 20 42 C30 55 45 44 50 40"
          stroke="#F4A6BA"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M50 40 C35 15 10 20 20 42 C30 55 45 44 50 40"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* Right Loop */}
        <path
          d="M50 40 C65 15 90 20 80 42 C70 55 55 44 50 40"
          stroke="#F4A6BA"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M50 40 C65 15 90 20 80 42 C70 55 55 44 50 40"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* Knot in center */}
        <circle cx="50" cy="40" r="5" fill="#F4A6BA" stroke="#D1758B" strokeWidth="1" />
        <circle cx="50" cy="40" r="2.5" fill="#FFFFFF" />

        {/* Dangling tails */}
        <path
          d="M48 44 C42 55 35 65 30 76"
          stroke="#F4A6BA"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M48 44 C42 55 35 65 30 76"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M52 44 C58 55 65 64 72 74"
          stroke="#F4A6BA"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M52 44 C58 55 65 64 72 74"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

// White Gel Pen Botanical Sprigs & Doodles (as in Pinterest cover)
export function BotanicalSprig({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-85 ${className}`}
    >
      {/* Central Curved Stem */}
      <path
        d="M20 110 Q50 60 70 15"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Delicate Fern Leaves */}
      <path d="M34 85 Q22 80 18 84 Q28 88 34 85" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" />
      <path d="M43 70 Q54 62 58 66 Q48 72 43 70" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" />
      <path d="M48 56 Q36 48 32 52 Q42 58 48 56" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" />
      <path d="M57 42 Q68 35 71 39 Q61 44 57 42" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" />
      <path d="M63 28 Q52 20 50 24 Q58 29 63 28" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" />
      <circle cx="70" cy="15" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

// Spiral Rings down left side of scrapbook pages
export function BinderSpine({ rings = 6 }) {
  return (
    <div className="absolute -left-3 sm:-left-4 top-8 bottom-8 flex flex-col justify-around pointer-events-none z-20">
      {[...Array(rings)].map((_, i) => (
        <div key={i} className="binder-ring" />
      ))}
    </div>
  );
}
