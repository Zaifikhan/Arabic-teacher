import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Beginner Student",
    image: "https://i.pravatar.cc/150?img=32",
    text: "I tried language apps for months and couldn't string together a single sentence. With Huzaifa's 3-month program, I am actually having 15-minute conversations in Arabic. His method of explaining grammar is revolutionary.",
    rating: 5
  },
  {
    name: "Omar K.",
    role: "Intermediate Learner",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Because he isn't a native speaker, he knows exactly where an English speaker's brain gets stuck. The personalized support and non-intimidating environment made all the difference for me to finally speak up.",
    rating: 5
  },
  {
    name: "Jasmine T.",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=47",
    text: "A truly premium learning experience. The curriculum is so well structured. You know exactly what you'll achieve by the end of each week. Definitely worth every penny if you want genuine results.",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-600/5 rounded-[100%] blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-12 bg-gold-500"></span>
            <span className="text-gold-400 font-semibold tracking-wider uppercase text-sm">Success Stories</span>
            <span className="h-[1px] w-12 bg-gold-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Hear from My <span className="text-gradient-gold">Students</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-glass-dark border border-white/5 hover:border-gold-500/30 rounded-3xl p-8 relative transition-colors duration-300 flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-gold-500/10" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border border-gold-500/50"
                />
                <div>
                  <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                  <p className="text-sm text-gold-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
