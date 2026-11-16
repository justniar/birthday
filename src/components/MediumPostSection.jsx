import React, { useState } from 'react';
import { Bookmark, Copy, Check, Heart, Quote } from 'lucide-react';
import { mediumPostData } from '../data/scrapbookData';
import { PaperBlossom, BinderSpine } from './ScrapbookDecorations';

export default function MediumPostSection() {
  const [copied, setCopied] = useState(false);
  const [reactions, setReactions] = useState({
    love: 25,
    pride: 42,
    tears: 23
  });

  const handleCopy = () => {
    const fullText = mediumPostData.paragraphs.map(p => p.text).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const addReaction = (type) => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <section id="medium-post" className="py-20 px-3 sm:px-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#201d26] border border-[#3e3847] text-[#c8a2c8] text-xs uppercase tracking-wider font-mono mb-3">
          <Bookmark className="w-3.5 h-3.5 text-[#b88553]" />
          <span>The Timeless Words • Medium Archive</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-calligraphy text-white mb-2">
          The Letter from Chapter 23
        </h2>
        <p className="text-[#c4b5a5] text-sm sm:text-base max-w-lg mx-auto font-serif italic">
          Words written straight from the heart years ago, glowing even warmer today as you turn 25.
        </p>
      </div>

      {/* Outer Cardstock Album Page */}
      <div className="cardstock-black rounded-2xl sm:rounded-3xl p-4 sm:p-10 border-2 border-[#2b2730] shadow-book relative">
        
        <BinderSpine rings={6} />

        {/* Decorative corner blossom */}
        <PaperBlossom size={48} className="absolute -top-4 -right-2 z-20" rotation={20} />

        {/* Vintage Parchment Sheet inside */}
        <div className="vintage-parchment rounded-xl p-6 sm:p-12 text-[#241710] shadow-lg relative border border-[#d6c4a5] ml-2 sm:ml-4">
          
          {/* Kraft Washi Tape strips at top */}
          <div className="absolute -top-3 left-10 w-24 h-6 bg-[#b88553]/75 -rotate-2 rounded-xs shadow-sm border-l-2 border-r-2 border-dashed border-white/50" />
          <div className="absolute -top-3 right-16 w-28 h-6 bg-[#d4a373]/80 rotate-2 rounded-xs shadow-sm border-l-2 border-r-2 border-dashed border-white/50" />

          {/* Letter Header */}
          <div className="border-b-2 border-[#d9c8af] pb-5 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase font-mono tracking-widest text-[#7a5029] font-bold">
                Medium Post Archive &bull; 17 November
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#1c1209] mt-1">
                Selamat Ulang Tahun, Lelaki Baik
              </h3>
            </div>
            
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs bg-[#e8dcce] hover:bg-[#d8c7b0] text-[#241710] px-3.5 py-1.5 rounded-lg border border-[#b88553]/40 transition-colors font-medium"
              title="Copy letter"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin Surat'}</span>
            </button>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-[#291b12] leading-relaxed text-base sm:text-lg font-serif">
            
            {/* Paragraph 1 */}
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#7a5029]">
              Sepertinya menulis di medium sebagai hadiah ulang tahun adalah hal aneh, tetapi tak apa, tetap akan kulanjutkan untuk menulis ini. Sedikit alay: aku harus berterima kasih pada orang tuamu karena telah melahirkanmu ke dunia. (Hahahaha skip ini terlalu alay)
            </p>

            {/* Quote Card Highlight 1 */}
            <div className="my-6 p-5 sm:p-6 bg-[#b88553]/15 rounded-xl border-l-4 border-[#b88553] relative shadow-sm">
              <Quote className="w-8 h-8 text-[#b88553]/25 absolute top-3 right-4 pointer-events-none" />
              <p className="font-calligraphy text-3xl sm:text-4xl text-[#1c1209] leading-tight">
                “You make life brighter and richer just by being in it, and loving you is a privilege I don’t take lightly.”
              </p>
            </div>

            {/* Paragraph 2 */}
            <p>
              Duh aku tidak tahu akan sesulit ini membuat sebuah ucapan ulang tahun, karena setiap detik yang sudah kamu lewati baik denganku atau tidak, sudah membentukmu menjadi pribadi saat ini. Kekurangan dan kelebihanmu saat ini, sayang, merupakan output dari perjalanan panjang dan cerita yang sudah kamu jajaki sedikit demi sedikit, dan aku bangga dengan itu.
            </p>

            {/* Paragraph 3 */}
            <p>
              Seperti halnya ucapan selamat tahun kebanyakan, semoga di tahun ini dan tahun-tahun kedepan akan menjadi tahun yang baik untuk kamu yaa, semoga banyak kebaikan dan kebahagiaan yang mengiringi kamu kedepannya. Susah bagiku untuk membuat kata-kata romantis, tapi setidaknya semoga di sisa umurmu yang saat ini, kamu bisa memanfaatkan dengan baik setiap detik yang akan kamu lewati yaa, semoga kamu semakin menikmati hidupmu kedepannya.
            </p>

            {/* Paragraph 4 */}
            <p>
              Di umurmu yang menginjak 23 tahun ini, tentu akan lebih banyak hal yang tiba-tiba menjadi pelajaran. Seperti saat sekolah, ada mata pelajaran yang membuatmu semangat untuk segera bertemu jam pelajaran tersebut, tapi tak sedikit juga yang membuatmu malas bahkan tidak ingin lagi pergi ke sekolah. Di beberapa tahun kedepan, kamu pasti akan dihadapkan dengan banyak hal seperti itu, dan itu adalah hal wajar.
            </p>

            {/* Quote Card Highlight 2 */}
            <div className="my-6 p-5 sm:p-6 bg-[#faf6f0] rounded-xl border border-[#d8c7b0] relative shadow-sm">
              <p className="font-serif italic text-base sm:text-lg text-[#3a2517] font-medium leading-relaxed">
                “Untuk itu, yang bisa aku langitkan adalah semoga lelaki baik ini, bisa mendapatkan kekuatan dan ketabahan setimpal sehingga ia bisa dengan tegap berdiri pada pendiriannya, yang mampu memperjuangkan setiap tujuan baik dan ambisinya. Semoga dimanapun langkah membawanya, ada hal baik yang selalu bisa dia terima.”
              </p>
            </div>

            {/* Paragraph 5 */}
            <div className="bg-[#17161a] text-[#f4efe8] p-6 rounded-xl my-6 shadow-md relative overflow-hidden border border-[#3e3745]">
              <p className="text-base sm:text-lg italic leading-relaxed relative z-10 font-serif">
                “Aku tidak pandai menulis, juga tidak romantis, tetapi, thank you for allowing me to be part of your world, for every laugh, every moment of comfort, and every dream we share. <span className="text-[#c8a2c8] font-bold">Loving you is the greatest honor I know.</span>”
              </p>
            </div>

            {/* Paragraph 6 */}
            <p>
              Di umurmu yang baru ini, aku berharap kamu semakin menemukan kedamaian dalam hatimu, kebahagiaan dalam langkahmu, dan keberanian dalam menghadapi setiap babak baru yang akan datang, ya. Aku percaya kepadamu lebih dari kemungkinan kamu percaya pada dirimu sendiri.
            </p>

            {/* Paragraph 7 - Closing */}
            <div className="p-6 bg-[#f3ebd9] rounded-xl border border-[#cfbc9f] shadow-sm mt-8">
              <p className="font-serif text-[#1e130a] text-lg sm:text-xl font-medium leading-relaxed">
                Dan yang paling penting, <span className="underline decoration-[#b88553] decoration-2 font-bold">jangan pernah lupa untuk mencintai dirimu sendiri.</span> Sebab, kamu adalah seseorang yang pantas dicintai dan dihargai — oleh orang-orang di sekitarmu, olehku, dan terlebih lagi oleh dirimu sendiri. Setiap kelebihanmu, bahkan setiap ketidaksempurnaanmu, adalah bagian dari keindahan yang membuatmu menjadi siapa dirimu saat ini.
              </p>
            </div>

          </div>

          {/* Sticky Handwritten Note Pinned to the side */}
          <div className="mt-8 pt-6 border-t border-[#d9c8af] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b88553] text-[#1c130e] flex items-center justify-center font-serif font-black text-sm shadow">
                25
              </div>
              <div>
                <p className="font-handwritten text-2xl text-[#2b170c] font-bold">
                  “Masih berlaku dan akan selalu berlaku, selamanya ♡”
                </p>
                <p className="text-xs text-[#7a5029] font-mono">Ditulis penuh cinta untukmu</p>
              </div>
            </div>

            {/* Reaction Pill Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => addReaction('love')}
                className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#fff5f7] text-[#a84462] rounded-full text-xs font-bold shadow-sm border border-[#f4a6ba] transition-transform active:scale-90"
              >
                <Heart className="w-3.5 h-3.5 fill-[#f4a6ba] text-[#f4a6ba]" />
                <span>{reactions.love}</span>
              </button>

              <button
                onClick={() => addReaction('pride')}
                className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#faf5fb] text-[#6d4270] rounded-full text-xs font-bold shadow-sm border border-[#c8a2c8] transition-transform active:scale-90"
              >
                <span>🌸 Proud</span>
                <span>{reactions.pride}</span>
              </button>

              <button
                onClick={() => addReaction('tears')}
                className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#fffbf5] text-[#7a5029] rounded-full text-xs font-bold shadow-sm border border-[#b88553] transition-transform active:scale-90"
              >
                <span>🥺 Touched</span>
                <span>{reactions.tears}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
