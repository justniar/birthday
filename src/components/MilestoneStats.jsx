import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Compass, Award, Sparkles } from 'lucide-react';
import { BinderSpine, PaperBlossom } from './ScrapbookDecorations';

export default function MilestoneStats() {
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = 9131;
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDaysCount(target);
        clearInterval(timer);
      } else {
        setDaysCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: "Years Around The Sun",
      value: "25",
      sub: "A golden quarter century",
      icon: Star,
      bg: "bg-[#b88553] text-[#1c130e]",
    },
    {
      label: "Days of Being Loved",
      value: daysCount.toLocaleString(),
      sub: "9,131 meaningful days",
      icon: Calendar,
      bg: "bg-[#faf6f0] text-[#22160f]",
    },
    {
      label: "Hours of Memories",
      value: "219,144+",
      sub: "Of smiles & quiet growth",
      icon: Clock,
      bg: "bg-[#c8a2c8] text-[#22160f]",
    },
    {
      label: "Zodiac Sign",
      value: "Scorpio ♏",
      sub: "Loyal, driven & deep-hearted",
      icon: Compass,
      bg: "bg-[#d4a373] text-[#1c130e]",
    }
  ];

  return (
    <section id="milestone" className="py-20 px-3 sm:px-6 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#f4a6ba]" />
          <span>Chapter 25 In Numbers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-[#f4efe8] mb-2 leading-tight">
          Celebrating 25 Remarkable Years
        </h2>
        <p className="text-[#c4b5a5] max-w-xl mx-auto text-sm sm:text-base font-serif italic">
          From a boy born on November 17, 2001, to the upright, kind-hearted, and ambitious man you are today.
        </p>
      </div>

      {/* 4 Handcrafted Kraft & Paper Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx}
              className={`${stat.bg} rounded-xl p-5 relative shadow-kraft transition-all hover:-translate-y-1 group border border-[#1a120c]/20`}
            >
              {/* Top tag */}
              <div className="flex items-center justify-between mb-3 border-b border-black/10 pb-2">
                <span className="text-[11px] font-mono opacity-70">ENTRY #0{idx + 1}</span>
                <Icon className="w-4 h-4 opacity-80" />
              </div>

              <div className="text-3xl sm:text-4xl font-serif font-black tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs font-handwritten text-lg opacity-80">
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline Journey: 2001 -> 2024 -> 2026 */}
      <div className="cardstock-black rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-[#2b2730] shadow-book relative overflow-hidden">
        
        <BinderSpine rings={5} />

        <div className="flex items-center justify-between mb-8 pl-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b88553] text-[#1c130e] flex items-center justify-center font-serif font-bold shadow">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#d2a679]">Lifelong Story</span>
              <h3 className="text-2xl sm:text-3xl font-calligraphy text-white">The Milestones That Shaped You</h3>
            </div>
          </div>
          <PaperBlossom size={44} className="hidden sm:inline-block" rotation={15} />
        </div>

        <div className="space-y-8 relative border-l-2 border-[#3e3745] ml-6 sm:ml-8 pl-6 sm:pl-8">
          
          {/* Milestone 1: 2001 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#b88553] border-4 border-[#17161a] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#2a221b] text-[#d2a679] border border-[#7a5029] w-fit">
                2001
              </span>
              <span className="text-lg font-serif font-bold text-[#faf6f0]">Anak Ini Lahir</span>
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a5] font-serif leading-relaxed">
              17 November 2001 — Hari di mana lelaki baik ini hadir ke dunia, yang kelak membawa begitu banyak kebahagiaan dan kehangatan ke dalam hidupku.
            </p>
          </div>

          {/* Milestone 2: 2020 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#d4a373] border-4 border-[#17161a] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#2f2218] text-[#d4a373] border border-[#8f6236] w-fit">
                2020
              </span>
              <span className="text-lg font-serif font-bold text-[#faf6f0]">Pertama Kali Ketemu saat Maba</span>
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a5] font-serif leading-relaxed">
              Kita pertama kali ketemu saat maba. Kamu pernah cerita katanya pertama kali tertarik sama aku saat ngerjain tugas bahasa Inggris, tapi karena kamu masih kerja di konter kamu merasa belum mampu jadi kamu tidak taking action.
            </p>
          </div>

          {/* Milestone 3: 2024 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#c8a2c8] border-4 border-[#17161a] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#2b1f2e] text-[#d8b4e2] border border-[#8e5b92] w-fit">
                2024
              </span>
              <span className="text-lg font-serif font-bold text-[#c8a2c8]">Mulai Deket & Jadian</span>
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a5] font-serif leading-relaxed">
              Kita mulai deket, udah deket (udah jadian), dan lahirlah surat ulang tahun ke-23 di Medium yang penuh rasa bangga dan cinta untukmu.
            </p>
          </div>

          {/* Milestone 4: 2025 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#f4a6ba] border-4 border-[#17161a] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#331c25] text-[#f4a6ba] border border-[#a85871] w-fit">
                2025
              </span>
              <span className="text-lg font-serif font-bold text-[#f4a6ba]">We Learn to Know Each Other</span>
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a5] font-serif leading-relaxed">
              We learn to know each other, banyak cerita tentang pengalaman kamu pertama kali kerja, yang tentu gak mudah tapi kamu laluinya dengan penuh ketabahan.
            </p>
          </div>

          {/* Milestone 5: 2026 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#b88553] border-4 border-[#17161a] shadow-[0_0_12px_#b88553] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#2a221b] text-[#faf6f0] border border-[#b88553] w-fit">
                2026 (Today • 25 Years)
              </span>
              <span className="text-lg font-serif font-bold text-[#faf6f0]">Still Learning, Still Choosing You</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e2d5c5] font-serif leading-relaxed">
              Still learning to know each other, makasih yaa sayang sudah masih terus-terusan mengusahakan aku sampai hari ini. Selamat bertambah usia ke-25 ♡
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
