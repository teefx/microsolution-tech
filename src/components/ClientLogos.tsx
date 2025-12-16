import { motion } from 'motion/react';
import { 
  clientLogo1, 
  clientLogo2, 
  clientLogo3, 
  clientLogo4, 
  clientLogo5 
} from '../constants/images';

export function ClientLogos() {
  const logos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[24px] md:text-[32px] lg:text-[36px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">Our Clients</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] text-[#585858] font-['Nunito',_sans-serif]">Trusted by leading organizations</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-3 md:gap-4">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white h-[80px] md:h-[95px] lg:h-[105px] rounded-[12.712px] w-full border border-gray-200 flex items-center justify-center p-4 md:p-6 cursor-pointer"
            >
              <img
                alt={`Client ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                src={logo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}