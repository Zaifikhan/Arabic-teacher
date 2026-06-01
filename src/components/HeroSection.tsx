import { motion } from 'motion/react';
import { PlayCircle, ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-800/80 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-glass-gold border border-gold-500/30 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(250,214,90,0.8)]"></span>
            <span className="text-sm font-medium text-gold-300">New enrollment batch opens soon</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 text-white">
            Learn Arabic Fluently in Just{' '}
            <span className="text-gradient-gold">3 Months</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            Master Arabic through a proven step-by-step system designed by someone who learned it from scratch and now teaches students worldwide. Speak with confidence, not just memorize rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#book"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
            >
              Book Free Trial Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-glass hover:bg-white/10 text-white font-medium text-lg transition-all border border-white/10 hover:border-gold-500/50">
              <PlayCircle className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform" />
              Watch Intro
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 overflow-hidden bg-navy-800">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-sm text-slate-400 font-medium">Join 500+ successful students</span>
            </div>
          </div>
        </motion.div>

        {/* Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] w-full flex justify-center items-center"
        >
          {/* Main Portrait Card */}
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Huzaifa" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-glass-dark p-4 rounded-xl">
                <h3 className="text-white font-serif font-bold text-xl">Ustadh Huzaifa</h3>
                <p className="text-gold-400 text-sm">Professional Arabic Instructor</p>
              </div>
            </div>
          </div>

          {/* Floating Arabic Letters (Simulated 3D) */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 md:-left-12 w-24 h-24 bg-glass-dark rounded-2xl flex items-center justify-center text-5xl text-gold-400 font-bold border border-gold-500/20 shadow-xl z-20"
          >
            ض
          </motion.div>

          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 -right-6 md:-right-12 w-20 h-20 bg-glass-gold rounded-2xl flex items-center justify-center text-4xl text-white font-bold border border-gold-400/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] z-20"
          >
            ع
          </motion.div>

          {/* Interactive Learning Dashboard Mockup Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-1/4 -right-10 md:-right-20 lg:-right-10 bg-glass-dark p-4 rounded-xl border border-white/10 shadow-2xl z-20 w-[220px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Current Lesson</p>
                <p className="text-sm font-semibold text-white">Live Conversation</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-navy-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 w-3/4" />
            </div>
            <p className="text-right text-[10px] text-gold-300 mt-1">75% Fluency Reached</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
