import { motion } from 'motion/react';
import { useState } from 'react';
import { microsolutionsLogo, heroBackgroundImage } from '../constants/images';
import { ConsultationModal } from './ConsultationModal';
import { Menu, X } from 'lucide-react';

export function Hero() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <section id="home" className="relative min-h-[700px] md:h-screen md:min-h-[845px] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          alt=""
          className="absolute max-w-none object-cover opacity-50 size-full"
          src={heroBackgroundImage}
        />
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-blue-900/30"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1/2 top-4 md:top-[68px] -translate-x-1/2 flex flex-col md:flex-row gap-4 md:gap-[73px] items-center w-[90%] md:w-auto max-w-[872px] z-10 px-4 md:px-0"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-[40px] md:h-[61px] relative shrink-0 w-[120px] md:w-[176px]"
        >
          <img
            alt="Microsolution Logo"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={microsolutionsLogo}
          />
        </motion.div>

        <div className="hidden lg:flex gap-[20px] items-center justify-center">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2 }}
              className="relative cursor-pointer font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-medium"
            >
              <p className="text-white text-[14px] xl:text-[16px] text-center text-nowrap whitespace-pre tracking-[-0.16px]">
                {item.name}
              </p>
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => scrollToSection('#contact')}
          whileHover={{ scale: 1.05, backgroundColor: '#1a0059' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#2a0079] h-[40px] md:h-[48px] px-[12px] md:px-[16px] rounded-[40px] w-[140px] md:w-[190px] text-white font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[14px] md:text-[16px] tracking-[-0.16px]"
        >
          Get Started
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Button */}
      <div className="absolute top-4 right-4 z-50 lg:hidden">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full border border-white/20 shadow-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
          
          {/* Slide-in Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-[#030213] via-[#0a0520] to-[#1a0b3f] z-50 lg:hidden shadow-2xl"
          >
            {/* Menu Content */}
            <div className="flex flex-col h-full p-8 pt-20">
              {/* Close Button Area - invisible but clickable */}
              <div className="absolute top-4 right-4">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full border border-white/20"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <img
                  alt="Microsolution Logo"
                  className="h-[50px] w-auto"
                  src={microsolutionsLogo}
                />
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 flex-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10, color: '#8b5cf6' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-left font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-white text-2xl tracking-tight transition-colors border-b border-white/10 pb-4"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-purple-400 text-sm">0{index + 1}</span>
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.button
                onClick={() => {
                  scrollToSection('#contact');
                  setIsMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, backgroundColor: '#1a0059' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#2a0079] to-[#4a00d9] h-[56px] px-[24px] rounded-full text-white font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[16px] tracking-[-0.16px] shadow-lg shadow-purple-500/30 border border-purple-400/20"
              >
                Get Started →
              </motion.button>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="absolute left-4 md:left-8 lg:left-[128px] top-[140px] md:top-[200px] lg:top-[265px] right-4 md:right-auto md:w-[90%] lg:w-[873px] pb-12 md:pb-0">
        <div className="flex flex-col gap-[24px] md:gap-[48px] items-start">
          {/* Hero Text */}
          <div className="flex flex-col items-start text-white w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col justify-center w-full"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] xl:text-[59px] leading-[1.4] md:leading-[1.5] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
              >
                {['Build Custom Software,', 'Designed Around Your Users'].map((line, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="w-full md:w-[90%] lg:w-[651.979px] mt-4 md:mt-6"
            >
              <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] leading-[1.5] font-['Nunito',_sans-serif] font-semibold">
                We build intuitive apps and system solutions crafted to solve real problems and deliver seamless, user-centered experiences.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-[16px] md:gap-[24px] items-center w-full sm:w-auto"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, borderColor: '#0066ff' }}
              whileTap={{ scale: 0.95 }}
              className="border border-white h-[44px] md:h-[48px] px-[12px] md:px-[16px] rounded-[40px] w-full sm:w-[170px] md:w-[190px] text-white transition-colors font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-semibold text-[14px] md:text-[16px] tracking-[-0.16px]"
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={() => setIsConsultationOpen(true)}
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-black h-[44px] md:h-[48px] px-[12px] md:px-[16px] rounded-[40px] w-full sm:w-[170px] md:w-[190px] text-black transition-colors font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-semibold text-[14px] md:text-[16px] tracking-[-0.16px]"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <p className="text-white text-sm">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </section>
  );
}