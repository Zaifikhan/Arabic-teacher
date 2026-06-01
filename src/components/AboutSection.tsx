import { motion } from 'motion/react';
import { GraduationCap, BookMarked, MessageCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Timeline & Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Studying Arabic" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
            </div>

            {/* Float Stats */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-glass-dark p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold-500/20 text-gold-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Jamia Baitus Salam</h4>
                  <p className="text-sm text-slate-400 mt-1">Formal Arabic Studies Graduate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-12 bg-gold-500"></span>
              <span className="text-gold-400 font-semibold tracking-wider uppercase text-sm">Meet Your Teacher</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Hi, I'm <span className="text-gradient-gold">Huzaifa</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                I completed my formal Arabic studies at Jamia Baitus Salam and have been teaching Arabic both online and in-person for over two years.
              </p>
              
              <div className="pl-6 border-l-2 border-gold-500/50 italic py-2 text-slate-200">
                "What makes my teaching approach unique is that I am not a native Arabic speaker. I learned it from scratch just like you."
              </div>

              <p>
                I studied its pronunciation, grammar, sentence structure, and rich literary depth until I became fluent. Because of this journey, <span className="text-white font-medium">I understand the exact challenges beginners face.</span>
              </p>
              <p>
                I know where students struggle, what confuses them, and how to make learning simple, practical, and highly enjoyable.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-glass p-4 rounded-xl border border-white/5">
                <BookMarked className="w-6 h-6 text-gold-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Deep Grammar</h4>
                <p className="text-sm text-slate-400">Mastered structural depths</p>
              </div>
              <div className="bg-glass p-4 rounded-xl border border-white/5">
                <MessageCircle className="w-6 h-6 text-gold-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Fluent Speech</h4>
                <p className="text-sm text-slate-400">Natural conversationalist</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
