import React, { useState } from 'react';
import { Star, Plus, Send, BookHeart } from 'lucide-react';
import { memoryWishes } from '../data/scrapbookData';
import { PaperBlossom, BakerTwineBow } from './ScrapbookDecorations';

export default function MemoryJar() {
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('birthday_memory_jar');
    return saved ? JSON.parse(saved) : memoryWishes;
  });

  const [openedWish, setOpenedWish] = useState(null);
  const [newNote, setNewNote] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const drawRandomWish = () => {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    setOpenedWish(wishes[randomIndex]);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const updated = [...wishes, newNote.trim()];
    setWishes(updated);
    localStorage.setItem('birthday_memory_jar', JSON.stringify(updated));
    setOpenedWish(newNote.trim());
    setNewNote('');
    setShowAddForm(false);
  };

  return (
    <section id="memory-jar" className="py-20 px-3 sm:px-6 max-w-4xl mx-auto text-center">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3">
          <BookHeart className="w-3.5 h-3.5 text-[#f4a6ba]" />
          <span>The Memory & Wishes Jar</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-white mb-2">
          Notes for the Days Ahead
        </h2>
        <p className="text-[#c4b5a5] text-sm sm:text-base max-w-lg mx-auto font-serif italic">
          Whenever you need a reminder of how extraordinary and loved you are, pull an origami star from this jar.
        </p>
      </div>

      {/* Jar Container */}
      <div className="max-w-md mx-auto cardstock-black rounded-2xl sm:rounded-3xl p-8 border-2 border-[#2b2730] shadow-book relative overflow-hidden">
        
        <PaperBlossom size={42} className="absolute top-4 right-4" rotation={10} />

        {/* Vintage Glass Jar */}
        <div className="relative mx-auto w-52 h-64 border-4 border-[#cfbc9f]/40 rounded-b-3xl rounded-t-lg bg-[#faf6f0]/5 backdrop-blur-sm p-4 flex flex-col justify-end shadow-inner">
          
          {/* Jar Lid */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#b88553] rounded-md border-b-2 border-[#7a5029] shadow" />
          <BakerTwineBow className="absolute -top-2 left-1/2 -translate-x-1/2" />

          {/* Floating Stars inside the jar */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {wishes.map((_, i) => (
              <span
                key={i}
                className="text-lg animate-float-slow cursor-pointer select-none filter drop-shadow hover:scale-125 transition-transform"
                style={{ animationDelay: `${(i % 5) * 0.4}s` }}
                title="A folded star note"
              >
                {i % 3 === 0 ? '🌸' : i % 3 === 1 ? '⭐' : '♡'}
              </span>
            ))}
          </div>

          <div className="text-[11px] font-mono text-[#c4b5a5] bg-[#1a171e] py-1 px-2 rounded-full border border-[#3e3847]">
            {wishes.length} stars inside
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={drawRandomWish}
            className="px-5 py-2.5 bg-[#b88553] hover:bg-[#c89563] text-[#1c130e] font-serif font-bold text-xs sm:text-sm rounded-full shadow-md active:scale-95 transition-all flex items-center gap-2"
          >
            <Star className="w-4 h-4 text-[#1c130e] fill-[#1c130e]" />
            <span>Open a Star Note</span>
          </button>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2.5 bg-[#201d26] hover:bg-[#2c2834] text-[#c4b5a5] border border-[#3e3847] rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 text-[#b88553]" />
            <span>Add a Note</span>
          </button>
        </div>

        {/* Opened Note Display */}
        {openedWish && (
          <div className="mt-6 p-5 bg-[#faf6f0] text-[#241710] rounded-xl border-2 border-[#b88553] shadow-lg relative animate-fade-in text-left">
            <span className="text-xs uppercase font-serif tracking-wider text-[#7a5029] font-bold block mb-1">
              Message From the Star 🌸
            </span>
            <p className="font-handwritten text-2xl text-[#241710] leading-snug">
              “{openedWish}”
            </p>
            <div className="mt-3 text-right">
              <span className="text-[11px] font-mono text-[#7a5029]">Remember this today &bull; 17 Nov</span>
            </div>
          </div>
        )}

        {/* Add Note Form */}
        {showAddForm && (
          <form onSubmit={handleAddNote} className="mt-6 text-left bg-[#17161a] p-4 rounded-xl border border-[#3e3847]">
            <label className="block text-xs font-serif text-[#f4efe8] mb-2">
              Write a sweet note or wish to keep in this jar:
            </label>
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="e.g. Bangga banget sama caramu berjuang hari ini..."
              rows={3}
              className="w-full bg-[#1c1922] border border-[#b88553]/50 rounded-lg p-3 text-sm text-[#f4efe8] placeholder-[#7d6f82] focus:outline-none focus:ring-2 focus:ring-[#b88553]"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1 text-xs text-[#8d7e94] hover:text-[#f4efe8]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#b88553] hover:bg-[#c89563] text-[#1c130e] rounded-lg text-xs font-bold flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Save to Jar</span>
              </button>
            </div>
          </form>
        )}

      </div>

    </section>
  );
}
