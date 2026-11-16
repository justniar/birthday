import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrapbookCover from './components/ScrapbookCover';
import MilestoneStats from './components/MilestoneStats';
import MediumPostSection from './components/MediumPostSection';
import Chapter25Letter from './components/Chapter25Letter';
import PhotoScrapbook from './components/PhotoScrapbook';
import TwentyFiveReasons from './components/TwentyFiveReasons';
import BirthdayCake from './components/BirthdayCake';
import MemoryJar from './components/MemoryJar';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [heartCount, setHeartCount] = useState(() => {
    return parseInt(localStorage.getItem('scrapbook_hearts') || '25', 10);
  });
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['cover', 'milestone', 'medium-post', 'new-chapter', 'polaroids', 'reasons', 'cake', 'memory-jar'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeartClick = (e) => {
    const newCount = heartCount + 1;
    setHeartCount(newCount);
    localStorage.setItem('scrapbook_hearts', newCount.toString());

    const clientX = e?.clientX || window.innerWidth / 2;
    const clientY = e?.clientY || window.innerHeight / 2;
    const id = Date.now() + Math.random();
    const symbols = ['🌸', '♡', '💜', '✦', '✨'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];

    setFloatingHearts((prev) => [
      ...prev,
      { id, x: clientX, y: clientY, symbol }
    ]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1400);
  };

  return (
    <div 
      className="min-h-screen wood-table-bg text-[#f3ebd9] relative overflow-hidden"
      onClick={(e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          handleHeartClick(e);
        }
      }}
    >
      
      {/* Warm ambient studio tabletop glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#b88553]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8a2c8]/10 rounded-full blur-[140px]" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {floatingHearts.map((h) => (
          <span
            key={h.id}
            className="absolute text-2xl animate-float-heart select-none"
            style={{
              left: `${h.x - 12}px`,
              top: `${h.y - 20}px`,
            }}
          >
            {h.symbol}
          </span>
        ))}
      </div>

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        heartCount={heartCount}
        onHeartClick={handleHeartClick}
      />

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Cover styled after Pinterest video pin */}
        <ScrapbookCover onOpen={() => scrollToSection('milestone')} />

        {/* Milestone */}
        <MilestoneStats />

        {/* The Preserved Medium Letter */}
        <MediumPostSection />

        {/* Chapter 25 Wish */}
        <Chapter25Letter />

        {/* Polaroid Scrapbook Gallery */}
        <PhotoScrapbook />

        {/* 25 Reasons Loving You is a Privilege */}
        <TwentyFiveReasons />

        {/* Interactive Birthday Cake */}
        <BirthdayCake />

        {/* Wishes Star Jar */}
        <MemoryJar />

      </main>

      {/* Footer */}
      <Footer onScrollTop={() => scrollToSection('cover')} />

    </div>
  );
}
