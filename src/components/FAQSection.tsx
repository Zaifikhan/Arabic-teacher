import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Is this course suitable for complete beginners?",
    a: "Absolutely. This program is designed from the ground up for absolute beginners who do not know the Arabic alphabet. We start from phonetics and slowly build up to full conversations over the 3 months."
  },
  {
    q: "How long does it take to become conversational?",
    a: "By strictly following the 3-month program structure, engaging with the materials, and participating in speaking exercises, most students achieve basic conversational fluency by the end of Month 3."
  },
  {
    q: "Are the classes live or pre-recorded?",
    a: "The core program includes live one-on-one sessions combined with dedicated structural exercises. This ensures you get real-time pronunciation correction and spontaneous speaking practice."
  },
  {
    q: "Will I receive learning materials?",
    a: "Yes. You will get access to custom-designed worksheets, audio recordings for listening practice, and a vocabulary vault tailored to your learning pace."
  },
  {
    q: "How much practice is required outside of class?",
    a: "I recommend committing to 20-30 minutes of daily guided practice. Consistency is the true key to language acquisition, rather than cramming for hours once a week."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-navy-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-slate-400">Everything you need to know about the program.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-glass-dark border-gold-500/30 shadow-[0_4px_20px_rgba(212,175,55,0.05)]' : 'bg-transparent border-white/10 hover:border-white/20'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full border transition-all ${isOpen ? 'bg-gold-500/20 border-gold-500/50 text-gold-400 rotate-180' : 'bg-transparent border-white/20 text-slate-400'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
