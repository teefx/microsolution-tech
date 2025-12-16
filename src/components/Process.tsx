import { motion } from 'motion/react';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and challenges to create a tailored solution strategy.',
    },
    {
      icon: Users,
      title: 'Design & Prototype',
      description: 'Our team creates intuitive designs and interactive prototypes to visualize your solution before development.',
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We build robust, scalable solutions using cutting-edge technologies with rigorous quality assurance.',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support to ensure continued success.',
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">Our Process</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 font-['Nunito',_sans-serif]">A proven approach to delivering exceptional results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-[80px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#2a0079] via-[#0066ff] to-[#82e4ff]" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[#2a0079] to-[#0066ff] flex items-center justify-center mb-6 mx-auto relative z-10"
                >
                  <Icon className="w-20 h-20 text-white" />
                </motion.div>

                {/* Step number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className="absolute top-0 right-8 w-10 h-10 rounded-full bg-[#82e4ff] flex items-center justify-center text-[#2a0079] z-20"
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3] mb-2 md:mb-3 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">{step.title}</h3>
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.5] text-gray-600 font-['Nunito',_sans-serif]">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}