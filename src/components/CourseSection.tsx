import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const program = [
  {
    month: "Month 1",
    title: "Foundations & Phonetics",
    focus: ["Arabic Alphabet", "Pronunciation", "Basic Vocabulary", "Everyday Expressions"],
    color: "from-blue-500/20 to-transparent",
    border: "border-blue-500/30"
  },
  {
    month: "Month 2",
    title: "Structure & Comprehension",
    focus: ["Sentence Formation", "Grammar Foundations", "Listening Practice", "Speaking Exercises"],
    color: "from-indigo-500/20 to-transparent",
    border: "border-indigo-500/30"
  },
  {
    month: "Month 3",
    title: "Fluency & Confidence",
    focus: ["Real Conversations", "Confidence Building", "Practical Communication", "Advanced Speaking Practice"],
    color: "from-gold-500/20 to-transparent",
    border: "border-gold-500/30"
  }
];

export default function CourseSection() {
  return (
    <section id="program" className="py-24 relative">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            <span className="text-gradient-gold">3-Month</span> Arabic Fluency Program
          </h2>
          <p className="text-slate-400 text-lg">
            A structured, predictable timeline to take you from absolute beginner to conversational fluency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-gold-500/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {program.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Node */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -ml-3 -mt-3 w-6 h-6 rounded-full bg-navy-950 border-2 border-slate-700 items-center justify-center z-10 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${index === 2 ? 'bg-gold-500' : 'bg-slate-500'}`} />
                </div>

                <div className={`h-full bg-glass-dark border ${phase.border} rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-white/5 rounded-xl text-white">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gold-400 font-semibold tracking-wider text-sm uppercase">{phase.month}</p>
                        <h3 className="text-xl font-bold text-white font-serif">{phase.title}</h3>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {phase.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${index === 2 ? 'text-gold-400' : 'text-slate-400'}`} />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
