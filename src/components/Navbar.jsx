import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Heart, BookOpen, Sparkles } from 'lucide-react';
import { ambientMusic } from '../utils/audioSynthesizer';

export default function Navbar({ activeSection, onNavigate, heartCount, onHeartClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      ambientMusic.stop();
      setIsPlaying(false);
    } else {
      ambientMusic.start();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    ambientMusic.setVolume(newVol);
  };

  const navItems = [
    { id: 'cover', label: 'Cover' },
    { id: 'milestone', label: 'Chapter 25' },
    { id: 'medium-post', label: 'The Letter' },
    { id: 'new-chapter', label: 'A Wish at 25' },
    { id: 'polaroids', label: 'Memories' },
    { id: 'reasons', label: '25 Reasons' },
    { id: 'cake', label: 'Make A Wish 🎂' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#18110d]/90 backdrop-blur-md py-2.5 border-b border-[#3e2c22] shadow-xl' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* Brand / Title */}
        <button 
          onClick={() => onNavigate('cover')} 
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-9 h-9 rounded-full bg-[#b88553] border border-[#d8c7b0] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-[#1c130e]">
            <span className="text-sm font-serif font-black">25</span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#d2a679] font-medium flex items-center gap-1.5 font-mono">
              <span>Nov 17, 2001</span>
              <span>•</span>
              <span className="font-serif italic text-[#f4efe8]">Chapter 25</span>
            </div>
            <div className="text-sm font-calligraphy text-2xl text-[#f4efe8] group-hover:text-[#c8a2c8] transition-colors leading-none mt-0.5">
              Memories we made
            </div>
          </div>
        </button>

        {/* Center Nav items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#151419]/80 px-2 py-1.5 rounded-full border border-[#3e2c22] shadow-inner backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 text-xs rounded-full transition-all font-medium ${
                activeSection === item.id
                  ? 'bg-[#b88553] text-[#1c130e] font-semibold shadow-sm'
                  : 'text-[#d8c7b0] hover:text-[#ffffff] hover:bg-[#2a221b]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action buttons: Audio & Heart Counter */}
        <div className="flex items-center gap-2.5">
          
          {/* Ambient Music Button */}
          <div className="flex items-center gap-2 bg-[#1a171d] border border-[#3e2c22] px-3 py-1.5 rounded-full shadow-md">
            <button
              onClick={toggleMusic}
              title={isPlaying ? 'Pause peaceful piano' : 'Play peaceful piano'}
              className="flex items-center gap-1.5 text-xs text-[#d8c7b0] hover:text-[#ffffff] transition-colors"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#c8a2c8] animate-pulse" />
                  <span className="hidden sm:inline font-mono text-[11px] text-[#e5cde7]">Lofi Piano</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#986a3e]" />
                  <span className="hidden sm:inline text-[11px] text-[#c4b5a5]">Play Music</span>
                </>
              )}
            </button>

            {isPlaying && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-14 h-1 accent-[#c8a2c8] bg-[#2a1f18] rounded-lg cursor-pointer hidden md:block"
                title="Volume"
              />
            )}
          </div>

          {/* Floating Hearts Clicker */}
          <button
            onClick={onHeartClick}
            className="flex items-center gap-1.5 bg-[#b88553] hover:bg-[#c89563] text-[#1a110a] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all"
            title="Send love"
          >
            <Heart className="w-3.5 h-3.5 fill-[#8b4f65] text-[#8b4f65]" />
            <span>{heartCount}</span>
          </button>

        </div>
      </div>
    </header>
  );
}
