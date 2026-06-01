import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Method', href: '#method' },
    { name: 'Program', href: '#program' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-navy-950/80 backdrop-blur-lg border-white/10 py-4 shadow-lg shadow-black/20'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30 group-hover:bg-gold-500/30 transition-colors">
            <span className="font-serif text-2xl font-bold text-gradient-gold leading-none">H</span>
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide text-white">Huzaifa</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            Free Trial
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-gold-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-gold-400 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 text-center rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                Book Free Trial
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
