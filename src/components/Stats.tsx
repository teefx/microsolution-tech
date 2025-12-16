import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  const stats = [
    { value: 150, label: 'Projects Completed', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
    { value: 50, label: 'Expert Team Members', suffix: '+' },
    { value: 10, label: 'Years of Excellence', suffix: '+' },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-[#2a0079] via-[#013f7e] to-[#0066ff] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16 text-white"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">Our Impact in Numbers</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] opacity-90 font-['Nunito',_sans-serif]">Delivering excellence through innovation</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-[20px] text-center border border-white/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] leading-[1.2] mb-3 md:mb-4 text-white font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] text-white/90 font-['Nunito',_sans-serif]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}