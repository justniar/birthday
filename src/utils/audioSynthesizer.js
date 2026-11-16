// Web Audio API ambient lofi romantic piano synthesizer
// Zero external assets required, 100% reliable and serene

class AmbientSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.masterGain = null;
    this.volume = 0.35;
    
    // Gentle lofi chord progressions (Frequencies in Hz)
    // Key of Eb / C minor (warm, dreamy, introspective, dark purple vibe)
    this.chords = [
      // Ebmaj9: Eb3, G3, Bb3, D4, F4
      [155.56, 196.00, 233.08, 293.66, 349.23],
      // Cm9: C3, Eb3, G3, Bb3, D4
      [130.81, 155.56, 196.00, 233.08, 293.66],
      // Abmaj7: Ab2, C3, Eb3, G3, C4
      [103.83, 130.81, 155.56, 196.00, 261.63],
      // Bb7sus4 -> Bb: Bb2, F3, Ab3, D4, F4
      [116.54, 174.61, 207.65, 293.66, 349.23],
    ];

    // Delicate music-box chimes (Pentatonic Eb)
    this.chimes = [
      311.13, 349.23, 392.00, 466.16, 523.25, 587.33, 622.25, 698.46, 783.99
    ];

    this.currentChordIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      // Lowpass filter for warm, dreamy velvet lofi feel
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, time, duration = 3.5, type = 'sine', gainAmt = 0.12) {
    if (!this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    // Warm envelope (soft attack, slow lingering decay)
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(gainAmt, time + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.filter);

    osc.start(time);
    osc.stop(time + duration + 0.1);
  }

  playMusicBoxChime(time) {
    if (!this.ctx) return;
    // pick 1-2 random high soothing chimes
    const chimeFreq = this.chimes[Math.floor(Math.random() * this.chimes.length)];
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(chimeFreq, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(0.04, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 2.2);

    osc.connect(gain);
    gain.connect(this.filter);

    osc.start(time);
    osc.stop(time + 2.3);
  }

  playStep() {
    if (!this.isPlaying || !this.ctx) return;

    const now = this.ctx.currentTime;
    const chord = this.chords[this.currentChordIndex];

    // Stagger chord notes slightly for harp/piano arpeggio feel
    chord.forEach((freq, idx) => {
      const noteDelay = idx * 0.09;
      this.playTone(freq, now + noteDelay, 4.0, idx === 0 ? 'triangle' : 'sine', idx === 0 ? 0.15 : 0.08);
    });

    // Random star chimes
    if (Math.random() > 0.3) {
      this.playMusicBoxChime(now + 1.2);
    }
    if (Math.random() > 0.5) {
      this.playMusicBoxChime(now + 2.4);
    }

    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.playStep();
    this.intervalId = setInterval(() => {
      this.playStep();
    }, 3800);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }
}

export const ambientMusic = new AmbientSynthesizer();
