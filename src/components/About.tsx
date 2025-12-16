import { motion } from 'motion/react';
import { officeTeamImage } from '../constants/images';

export function About() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[44px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">About Microsolution</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[32px] lg:gap-[48px] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="h-[250px] md:h-[350px] lg:h-[444px] rounded-[10px] w-full lg:w-[560px] overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              alt="MicroSolutions Office"
              className="w-full h-full object-cover"
              src={officeTeamImage}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-[32px] md:gap-[48px] lg:gap-[65px] w-full lg:w-[657px]"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] leading-[1.5] text-black font-['Nunito',_sans-serif]"
            >
              MicroSolutions Technology Limited is a sister company of InfoByte Technologies, focused on helping organizations move from manual workflows to efficient, digital systems. We design user-friendly solutions that simplify operations, improve productivity, and support sustainable growth. With a team experienced in digital transformation, system integration, and custom software development, we've delivered successful projects across various sectors. Our goal is simple: create technology that works seamlessly for the people who use it every day.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, backgroundColor: '#012e60' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#013f7e] px-[32px] md:px-[42px] lg:px-[53px] py-[10px] md:py-[12px] rounded-[40px] text-white text-[14px] md:text-[16px] self-start transition-colors font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold tracking-[-0.16px]"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}