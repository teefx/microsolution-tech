import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { BrandingSection } from './components/BrandingSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="bg-white relative w-full overflow-x-hidden">
      <Hero />
      <ClientLogos />
      <About />
      <Stats />
      <Services />
      <Process />
      <BrandingSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}