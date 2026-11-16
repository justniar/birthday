import React, { useState, useRef } from 'react';
import { Camera, ImagePlus, Upload, Trash2, RotateCcw, Heart, Sparkles } from 'lucide-react';
import { defaultPhotos } from '../data/scrapbookData';
import { PaperBlossom } from './ScrapbookDecorations';

export default function PhotoScrapbook() {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('birthday_scrapbook_photos_v4');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0 && !parsed[0].url?.includes('unsplash')) {
          return parsed;
        }
      } catch (e) {}
    }
    localStorage.setItem('birthday_scrapbook_photos_v4', JSON.stringify(defaultPhotos));
    return defaultPhotos;
  });

  const [activePreview, setActivePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [targetPhotoId, setTargetPhotoId] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (targetPhotoId) {
        const updated = photos.map(p => p.id === targetPhotoId ? { ...p, url: dataUrl } : p);
        setPhotos(updated);
        localStorage.setItem('birthday_scrapbook_photos_v4', JSON.stringify(updated));
      } else {
        const newPhoto = {
          id: Date.now(),
          url: dataUrl,
          caption: "A cherished memory together ♡",
          rotation: (Math.random() > 0.5 ? 'rotate-2' : '-rotate-2'),
          date: "Forever & Always",
          sticker: "🌸"
        };
        const updated = [...photos, newPhoto];
        setPhotos(updated);
        localStorage.setItem('birthday_scrapbook_photos_v4', JSON.stringify(updated));
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
    setTargetPhotoId(null);
  };

  const triggerUploadFor = (id = null) => {
    setTargetPhotoId(id);
    fileInputRef.current?.click();
  };

  const updateCaption = (id, newCaption) => {
    const updated = photos.map(p => p.id === id ? { ...p, caption: newCaption } : p);
    setPhotos(updated);
    localStorage.setItem('birthday_scrapbook_photos_v4', JSON.stringify(updated));
  };

  const deletePhoto = (id) => {
    const updated = photos.filter(p => p.id !== id);
    setPhotos(updated);
    localStorage.setItem('birthday_scrapbook_photos_v4', JSON.stringify(updated));
  };

  const resetPhotos = () => {
    setPhotos(defaultPhotos);
    localStorage.setItem('birthday_scrapbook_photos_v4', JSON.stringify(defaultPhotos));
  };

  return (
    <section id="polaroids" className="py-20 px-3 sm:px-6 max-w-6xl mx-auto">
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3">
          <Camera className="w-3.5 h-3.5 text-[#b88553]" />
          <span>Polaroid Scrapbook Wall</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-white mb-2">
          Moments We Made Along The Way
        </h2>
        <p className="text-[#c4b5a5] text-sm sm:text-base max-w-xl mx-auto font-serif italic">
          Every laugh, every glance, and every quiet moment we've shared. You can click on any photo to swap it with your own photos!
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            onClick={() => triggerUploadFor(null)}
            className="flex items-center gap-2 px-4 py-2 bg-[#b88553] hover:bg-[#c89563] text-[#1c130e] rounded-full text-xs font-bold shadow-md transition-all active:scale-95"
          >
            <ImagePlus className="w-4 h-4" />
            <span>Upload Real Photo</span>
          </button>

          <button
            onClick={resetPhotos}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#201d26] hover:bg-[#2c2834] text-[#c4b5a5] rounded-full text-xs border border-[#3e3847] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>
        </div>
      </div>

      {/* Polaroid Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-4">
        {photos.map((item) => (
          <div
            key={item.id}
            className={`polaroid-frame rounded-sm relative group cursor-pointer ${item.rotation || ''}`}
          >
            {/* Kraft washi tape strip at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#b88553]/70 rounded-xs shadow-sm border-l-2 border-r-2 border-dashed border-white/40 z-10" />

            {/* Photo Container */}
            <div 
              onClick={() => setActivePreview(item)}
              className="aspect-[4/5] overflow-hidden rounded-xs bg-[#1a120c] relative"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover overlay with action buttons */}
              <div 
                className="absolute inset-0 bg-[#140e0a]/75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity gap-2 p-3 text-center"
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePreview(item);
                    }}
                    className="p-2 bg-[#b88553] text-[#1c130e] rounded-full hover:scale-110 transition-transform shadow"
                    title="Zoom in"
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerUploadFor(item.id);
                    }}
                    className="p-2 bg-[#faf6f0] text-[#1c130e] rounded-full hover:scale-110 transition-transform shadow"
                    title="Ganti foto"
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[11px] font-serif text-[#d8c7b0]">Klik untuk perbesar / ganti</span>
              </div>

              {/* Floating Sticker */}
              <span className="absolute bottom-2 right-2 text-2xl drop-shadow select-none">
                {item.sticker || '🌸'}
              </span>
            </div>

            {/* Polaroid Bottom Notes & Caption */}
            <div className="pt-3 px-1 text-center">
              <textarea
                value={item.caption}
                onChange={(e) => updateCaption(item.id, e.target.value)}
                rows={3}
                className="w-full min-h-[68px] font-handwritten text-lg sm:text-xl text-[#241710] bg-transparent border-b border-transparent hover:border-[#b88553] focus:border-[#7a5029] focus:outline-none text-center resize-none leading-snug overflow-hidden"
                title="Click to edit caption"
              />
              <div className="flex items-center justify-between mt-1 text-[11px] text-[#7a6a5d] font-mono">
                <span>{item.date || 'Memories'}</span>
                {photos.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePhoto(item.id);
                    }}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Remove photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-[#c8a2c8] font-calligraphy text-2xl flex items-center justify-center gap-2">
        <span>“Loving you is the greatest honor I know”</span>
      </div>

      {/* Lightbox Zoom Modal */}
      {activePreview && (
        <div 
          onClick={() => setActivePreview(null)}
          className="fixed inset-0 z-50 bg-[#0e0a08]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="polaroid-frame max-w-lg w-full rounded-sm relative"
          >
            <div className="max-h-[75vh] overflow-hidden rounded bg-[#1a120c] flex items-center justify-center">
              <img
                src={activePreview.url}
                alt={activePreview.caption}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="pt-4 text-center">
              <p className="font-handwritten text-3xl text-[#241710]">
                {activePreview.caption}
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#7a6a5d] mt-2">
                <span>{activePreview.date}</span>
                <button
                  onClick={() => setActivePreview(null)}
                  className="px-3 py-1 bg-[#241710] text-[#faf6f0] rounded-full text-[11px] font-sans hover:bg-[#b88553] transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
