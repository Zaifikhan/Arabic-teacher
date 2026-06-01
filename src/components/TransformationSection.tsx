import { motion } from 'motion/react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const before = [
  "Afraid to speak and make mistakes",
  "Struggling with complex grammar rules",
  "Limited vocabulary holding you back",
  "Lack of confidence in real situations"
];

const after = [
  "Hold real conversations effortlessly",
  "Understand native spoken Arabic",
  "Express thoughts & feelings naturally",
  "Communicate with unwavering confidence"
];

export default function TransformationSection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Your <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See the exact shift you will experience in just 90 days of structured learning.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative">
          
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-glass border border-red-500/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-red-500/10" />
            <h3 className="text-2xl font-bold text-white mb-6 font-serif">Before Learning</h3>
            <ul className="space-y-5">
              {before.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400/80 flex-shrink-0" />
                  <span className="text-slate-300">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex w-16 h-16 rounded-full bg-glass-gold border border-gold-500/30 items-center justify-center z-10 shrink-0"
          >
            <ArrowRight className="w-8 h-8 text-gold-400" />
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-md bg-glass-dark border border-gold-500/40 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.05)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-300" />
            <h3 className="text-2xl font-bold text-white mb-6 font-serif">After 3 Months</h3>
            <ul className="space-y-5">
              {after.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-gold-400 flex-shrink-0" />
                  <span className="text-white font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
