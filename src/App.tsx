/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import AdvantageSection from './components/AdvantageSection';
import CourseSection from './components/CourseSection';
import TransformationSection from './components/TransformationSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <AdvantageSection />
        <CourseSection />
        <TransformationSection />
        <TestimonialSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
