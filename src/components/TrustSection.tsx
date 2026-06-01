import { motion } from 'motion/react';
import { Award, Globe2, BookOpen, Users } from 'lucide-react';

const stats = [
  {
    icon: <Award className="w-6 h-6 text-gold-400" />,
    value: "2+ Years",
    label: "Teaching Experience"
  },
  {
    icon: <Globe2 className="w-6 h-6 text-gold-400" />,
    value: "Online & In-Person",
    label: "Global Reach"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-gold-400" />,
    value: "3-Month",
    label: "Structured Program"
  },
  {
    icon: <Users className="w-6 h-6 text-gold-400" />,
    value: "Beginner",
    label: "Friendly Approach"
  }
];

export default function TrustSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-navy-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className="p-3 bg-glass rounded-xl border border-white/5">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight text-white">{stat.value}</h4>
                <p className="text-sm font-medium text-slate-400 mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
