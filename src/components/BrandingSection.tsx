import { motion } from 'motion/react';

export function BrandingSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="inline-block"
        >
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] md:leading-[1.2] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold bg-gradient-to-r from-[#2a0079] via-[#0066ff] to-[#82e4ff] bg-clip-text text-transparent">
            MicroSolutions Technology
          </h2>
        </motion.div>

        {/* Animated particles around text */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#2a0079] to-[#82e4ff]"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto font-['Nunito',_sans-serif]"
        >
          Building Tomorrow&apos;s Solutions Today
        </motion.p>
      </div>
    </section>
  );
}