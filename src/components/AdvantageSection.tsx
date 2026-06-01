import { motion } from 'motion/react';
import { Compass, Lightbulb, Mic2, UserCheck } from 'lucide-react';

const advantages = [
  {
    title: "Learned From Scratch",
    desc: "I understand every beginner challenge because I experienced it myself. No native-speaker assumptions.",
    icon: <Compass className="w-8 h-8" />
  },
  {
    title: "Simplified Method",
    desc: "Complex grammar explained in an easy and practical way, stripping away unnecessary academic jargon.",
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    title: "Conversation Focused",
    desc: "Learn to speak naturally and confidently, not just memorize textbooks and unpractical vocabulary.",
    icon: <Mic2 className="w-8 h-8" />
  },
  {
    title: "Personalized Support",
    desc: "Individual guidance throughout the learning journey. You are never left behind or ignored.",
    icon: <UserCheck className="w-8 h-8" />
  }
];

export default function AdvantageSection() {
  return (
    <section id="method" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Why Students Learn <span className="text-gradient-gold">Faster With Me</span>
          </h2>
          <p className="text-slate-400 text-lg">
            My methodology is reverse-engineered from my own success. I teach you what actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-glass-dark border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 hover:bg-white/[0.03] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 -rotate-12">
                {adv.icon}
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/5 flex items-center justify-center text-gold-400 mb-6 border border-gold-500/20 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-serif">{adv.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
