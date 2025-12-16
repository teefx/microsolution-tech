import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'John Adebayo',
      role: 'CEO, TechVentures Ltd',
      content: 'MicroSolutions transformed our business operations completely. Their custom software solution increased our productivity by 200% and streamlined all our workflows.',
      rating: 5,
    },
    {
      name: 'Sarah Okonkwo',
      role: 'Director, FinanceHub',
      content: 'Working with MicroSolutions was a game-changer. Their team understood our needs perfectly and delivered a solution that exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'The level of expertise and professionalism from MicroSolutions is unmatched. They delivered our project on time and provided excellent post-launch support.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#2a0079] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0066ff] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">What Our Clients Say</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 font-['Nunito',_sans-serif]">Don&apos;t just take our word for it</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg relative"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2a0079] to-[#0066ff] rounded-full flex items-center justify-center"
              >
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] text-gray-700 mb-6 font-['Nunito',_sans-serif]">{testimonial.content}</p>

              {/* Author */}
              <div>
                <h4 className="text-[15px] md:text-[16px] lg:text-[18px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">{testimonial.name}</h4>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-600 font-['Nunito',_sans-serif]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}