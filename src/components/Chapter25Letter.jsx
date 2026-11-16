import React, { useState, useEffect } from 'react';
import { Edit3, Check, RotateCcw, Heart } from 'lucide-react';
import { chapter25Reflection } from '../data/scrapbookData';
import { PaperBlossom, BinderSpine } from './ScrapbookDecorations';

export default function Chapter25Letter() {
  const [isEditing, setIsEditing] = useState(false);
  const [letterParagraphs, setLetterParagraphs] = useState(() => {
    const saved = localStorage.getItem('chapter25_custom_letter');
    return saved ? JSON.parse(saved) : chapter25Reflection.body;
  });

  const [tempText, setTempText] = useState('');

  useEffect(() => {
    setTempText(letterParagraphs.join('\n\n'));
  }, [letterParagraphs]);

  const handleSave = () => {
    const split = tempText.split('\n\n').filter(p => p.trim() !== '');
    setLetterParagraphs(split);
    localStorage.setItem('chapter25_custom_letter', JSON.stringify(split));
    setIsEditing(false);
  };

  const handleReset = () => {
    setLetterParagraphs(chapter25Reflection.body);
    localStorage.removeItem('chapter25_custom_letter');
    setTempText(chapter25Reflection.body.join('\n\n'));
    setIsEditing(false);
  };

  return (
    <section id="new-chapter" className="py-20 px-3 sm:px-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3">
          <span>🌸 New Chapter &bull; Age 25</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-white mb-2">
          {chapter25Reflection.title}
        </h2>
        <p className="text-[#c4b5a5] text-sm sm:text-base max-w-lg mx-auto font-serif italic">
          {chapter25Reflection.subtitle}
        </p>
      </div>

      {/* Card Container */}
      <div className="cardstock-black rounded-2xl sm:rounded-3xl p-6 sm:p-12 border-2 border-[#2b2730] shadow-book relative overflow-hidden">
        
        <BinderSpine rings={5} />
        <PaperBlossom size={48} className="absolute -top-3 -right-2 z-20" rotation={-10} />

        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3e3847] pl-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b88553] text-[#1c130e] flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-[#d2a679]">Dedikasi Spesial</span>
              <h4 className="text-lg font-serif font-bold text-[#faf6f0]">Menyambut Usia 25 Tahunmu</h4>
            </div>
          </div>

          <button
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setIsEditing(true);
              }
            }}
            className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full bg-[#241f29] hover:bg-[#342d3b] text-[#c8a2c8] border border-[#484252] transition-colors"
          >
            {isEditing ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simpan Perubahan</span>
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5 text-[#d2a679]" />
                <span>Edit / Tambah Kata</span>
              </>
            )}
          </button>
        </div>

        {isEditing ? (
          <div className="pl-4">
            <p className="text-xs text-[#c4b5a5] mb-2 font-serif italic">
              Kamu bisa menambahkan kata-kata pribadi, panggilan kesayangan, atau harapan barumu untuknya (pisahkan paragraf dengan enter 2x):
            </p>
            <textarea
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              rows={12}
              className="w-full bg-[#17161a] border border-[#b88553]/60 rounded-xl p-4 text-[#f4efe8] font-serif leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#b88553] text-base"
            />
            <div className="flex items-center justify-between mt-3">
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-[#8d7565] hover:text-[#d8c7b0]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Kembalikan ke Teks Awal</span>
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[#b88553] hover:bg-[#c89563] text-[#1a110a] text-xs font-bold rounded-lg shadow-sm"
              >
                Simpan Surat
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 font-serif text-base sm:text-lg text-[#f4efe8]/90 leading-relaxed pl-4">
            {letterParagraphs.map((para, idx) => (
              <p key={idx} className={idx === letterParagraphs.length - 1 ? "font-bold text-[#c8a2c8] text-xl sm:text-2xl font-calligraphy pt-2" : ""}>
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-10 pt-6 border-t border-[#3e3847] flex flex-wrap items-center justify-between gap-4 pl-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b88553] animate-pulse" />
            <span className="text-xs text-[#c4b5a5] font-mono">Selalu menjadi pendukung nomor satumu.</span>
          </div>
          <span className="font-calligraphy text-3xl text-[#d8b4e2]">
            With endless love & pride ♡
          </span>
        </div>

      </div>

    </section>
  );
}
