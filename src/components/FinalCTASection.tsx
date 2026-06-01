import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section id="book" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900 -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gold-600/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-glass border border-gold-500/30 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden"
        >
          {/* Subtle Arabesque Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="inline-flex items-center justify-center p-3 bg-gold-500/20 rounded-2xl text-gold-400 mb-8 border border-gold-500/30">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Start Your Arabic <span className="text-gradient-gold">Journey Today</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            "Arabic is one of the most beautiful and eloquent languages in the world. With the right guidance, fluency is closer than you think."
          </p>

          <button className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free Trial Lesson
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
          
          <p className="mt-6 text-sm text-slate-400">No credit card required. 30-minute consultation.</p>
        </motion.div>
      </div>
    </section>
  );
}
