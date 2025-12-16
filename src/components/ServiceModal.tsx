import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    image: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-[20px] max-w-[900px] w-full max-h-[90vh] overflow-hidden shadow-2xl relative my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center z-10 transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </motion.button>

              {/* Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#2a0079] to-[#0066ff] p-6 md:p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-2 md:mb-3 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">
                      {service.title}
                    </h2>
                    <p className="text-[13px] md:text-[15px] lg:text-[16px] leading-[1.5] opacity-90 font-['Nunito',_sans-serif]">
                      {service.fullDescription}
                    </p>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 lg:p-8">
                  {/* Features & Benefits Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">
                        Key Features
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="flex items-start gap-2 md:gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-0.5" />
                            <span className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.5] text-gray-700 font-['Nunito',_sans-serif]">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-[24px] leading-[32px] mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#013f7e]">
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#82e4ff] mt-2 shrink-0" />
                            <span className="text-[16px] leading-[24px] text-gray-700 font-['Nunito',_sans-serif]">
                              {benefit}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
                  >
                    <motion.button
                      onClick={() => {
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        onClose();
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: '#012e60' }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-[#013f7e] px-6 md:px-8 py-3 md:py-4 rounded-[40px] text-white text-[14px] md:text-[16px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.02, borderColor: '#013f7e' }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-[40px] text-gray-700 text-[14px] md:text-[16px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}