import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = ['Home', 'About', 'Services', 'Testimonials', 'Contact'];
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-[#0a2540] text-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-6 md:mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">About MicroSolutions</h3>
            <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] text-white/80 font-['Nunito',_sans-serif]">
              Transforming businesses through innovative technology solutions. We specialize in custom software development, IT consultancy, and digital transformation services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-[13px] md:text-[14px] lg:text-[15px] text-white/80 hover:text-white transition-colors font-['Nunito',_sans-serif]">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">Contact Us</h3>
            <div className="space-y-3 md:space-y-4">
              <motion.a
                href="mailto:info@microsolutionsngr.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] lg:text-[15px] font-['Nunito',_sans-serif]">info@microsolutionsngr.com</span>
              </motion.a>

              <motion.a
                href="tel:+2348082323060"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] lg:text-[15px] font-['Nunito',_sans-serif]">+234 808 232 3060</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80"
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] lg:text-[15px] font-['Nunito',_sans-serif]">Lagos, Nigeria</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#cccccc]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[12px] md:text-[13px] lg:text-[14px] text-white/60 font-['Nunito',_sans-serif] text-center md:text-left">
            &copy; 2024 MicroSolutions Technology Limited. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-[12px] md:text-[13px] lg:text-[14px] text-white/60 font-['Nunito',_sans-serif] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px] md:text-[13px] lg:text-[14px] text-white/60 font-['Nunito',_sans-serif] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}