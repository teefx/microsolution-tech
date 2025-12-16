import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does MicroSolutions offer?',
      answer: 'We offer comprehensive IT solutions including custom software development, system integration, consultancy services, network engineering, and manpower development. Our team specializes in creating user-friendly solutions that streamline operations and boost productivity.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple application might take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase and maintain transparent communication throughout.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive post-launch support including maintenance services, regular system checks, updates, and technical assistance. Our team ensures your systems continue to run smoothly and efficiently.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We have successfully delivered projects across various sectors including finance, healthcare, education, retail, manufacturing, and government. Our versatile team adapts to industry-specific requirements and regulations.',
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow international standards and best practices, conducting rigorous testing at every stage. Our quality assurance process includes code reviews, automated testing, user acceptance testing, and performance optimization.',
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Absolutely! We specialize in system integration and can seamlessly connect new solutions with your existing infrastructure. We ensure smooth data migration and minimal disruption to your operations.',
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">Frequently Asked Questions</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 font-['Nunito',_sans-serif]">Get answers to common questions about our services</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-gray-200 rounded-[15px] overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-gray-50 hover:bg-gray-100 rounded-[16px] transition-colors"
              >
                <span className="text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505] pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 md:p-6 pt-3 md:pt-4 text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.6] text-gray-700 font-['Nunito',_sans-serif]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5] text-gray-600 mb-6 font-['Nunito',_sans-serif]">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#012e60' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#013f7e] px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-[40px] text-white text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold tracking-[-0.16px]"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}