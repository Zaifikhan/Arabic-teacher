import { Mail, MessageCircle, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30 group-hover:bg-gold-500/30 transition-colors">
                <span className="font-serif text-2xl font-bold text-gradient-gold leading-none">H</span>
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">Huzaifa</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Premium online Arabic education. Learn to speak naturally and master the depths of the language with a proven methodology.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-glass flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400/50 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-glass flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400/50 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 hover:text-gold-400 transition-colors">About Me</a></li>
              <li><a href="#method" className="text-slate-400 hover:text-gold-400 transition-colors">Teaching Method</a></li>
              <li><a href="#program" className="text-slate-400 hover:text-gold-400 transition-colors">3-Month Program</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-gold-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/923149525452" className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors group">
                  <MessageCircle size={18} className="group-hover:text-green-400 transition-colors" />
                  <span className="group-hover:text-white transition-colors">+92 314 9525452</span>
                </a>
              </li>
              <li>
                <a href="mailto:hafizhuzaifa2005@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors">
                  <Mail size={18} />
                  <span>hafizhuzaifa2005@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Huzaifa Arabic Learning. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
