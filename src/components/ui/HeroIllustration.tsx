import { useEffect, useState } from 'react';
import { TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';

export default function HeroIllustration() {
  const [bars, setBars] = useState([40, 65, 45, 80, 60, 90]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => prev.map(() => 30 + Math.random() * 70));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-electric-500/60 animate-float-slow"
          style={{
            top: `${10 + ((i * 37) % 80)}%`,
            left: `${5 + ((i * 53) % 90)}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        />
      ))}

      {/* Connecting lines (subtle network feel) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400">
        <line x1="60" y1="80" x2="200" y2="180" stroke="#0c71b9" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="200" y1="180" x2="340" y2="100" stroke="#ea570d" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="200" y1="180" x2="280" y2="300" stroke="#0c71b9" strokeWidth="1" strokeDasharray="3 5" />
      </svg>

      {/* Main dashboard card */}
      <div className="animate-fade-up animation-delay-1300 relative w-[320px] sm:w-[360px]
        bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center">
              <BarChart3 size={16} className="text-brand-orange" />
            </div>
            <span className="font-poppins text-sm font-semibold text-white">Performance</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
            <TrendingUp size={12} /> +24%
          </span>
        </div>

        {/* Animated bar chart */}
        <div className="flex items-end gap-2 h-24 mb-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-electric-500 to-brand-orange transition-all duration-1000 ease-out"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-gray-400 font-inter">
          <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span>
        </div>
      </div>

      {/* Floating mini card — top right */}
      <div className="animate-float absolute -top-2 right-2 sm:right-6
        bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-electric-500/20 flex items-center justify-center">
            <Users size={14} className="text-electric-500" />
          </div>
          <div>
            <p className="font-poppins text-sm font-bold text-white leading-none">1.2k</p>
            <p className="font-inter text-[10px] text-gray-400">Clients actifs</p>
          </div>
        </div>
      </div>

      {/* Floating mini card — bottom left */}
      <div className="animate-float-slow absolute bottom-2 -left-2 sm:left-2
        bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-brand-orange/20 flex items-center justify-center">
            <Zap size={14} className="text-brand-orange" />
          </div>
          <div>
            <p className="font-poppins text-sm font-bold text-white leading-none">99.9%</p>
            <p className="font-inter text-[10px] text-gray-400">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
}