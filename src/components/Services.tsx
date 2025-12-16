import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  consultingServiceImage, 
  softwareServiceImage, 
  systemIntegrationServiceImage, 
  maintenanceServiceImage 
} from '../constants/images';
import { ServiceModal } from './ServiceModal';

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'MicroSolutions Consultancy (MSConsult)',
      description: 'MSConsult assists clients in planning, developing, and implementing computer systems for office automation. Our maintenance services include organized monthly checks.',
      image: consultingServiceImage,
      fullDescription: 'MSConsult provides comprehensive IT consultancy services to help organizations optimize their technology infrastructure. We specialize in system planning, implementation, and ongoing maintenance to ensure your business runs smoothly and efficiently.',
      features: [
        'Complete IT infrastructure planning and design',
        'System implementation and deployment',
        'Organized monthly maintenance checks',
        'Office automation solutions',
        'Technology roadmap development',
        '24/7 technical support availability',
      ],
      benefits: [
        'Reduced operational costs',
        'Improved system reliability',
        'Minimized downtime',
        'Expert guidance on technology decisions',
        'Proactive issue prevention',
        'Scalable solutions for growth',
      ],
    },
    {
      title: 'MicroSolutions Software (MSSoft)',
      description: 'MSSoft develops software with international standards, offering Windows and Web Applications along with system planning, package evaluation, and more.',
      image: softwareServiceImage,
      fullDescription: 'MSSoft delivers world-class custom software solutions built to international standards. Our development team creates robust Windows and Web applications tailored to your specific business needs, from concept to deployment.',
      features: [
        'Custom Windows application development',
        'Modern web application solutions',
        'Mobile-responsive design',
        'System integration services',
        'Software package evaluation',
        'Legacy system modernization',
      ],
      benefits: [
        'Solutions tailored to your workflow',
        'International quality standards',
        'Faster business processes',
        'Competitive advantage through technology',
        'Seamless integration with existing systems',
        'Future-proof architecture',
      ],
    },
    {
      title: 'MicroSolutions Communications and Engineering (MSCom)',
      description: 'MSCom provides technical support for hardware and network solutions, offering services from hardware evaluation to full network documentation.',
      image: systemIntegrationServiceImage,
      fullDescription: 'MSCom specializes in comprehensive network infrastructure and hardware solutions. From initial assessment to complete deployment and documentation, we ensure your network is secure, efficient, and ready for the future.',
      features: [
        'Network design and implementation',
        'Hardware evaluation and procurement',
        'Network security solutions',
        'Complete network documentation',
        'Infrastructure optimization',
        'Wireless and wired network setup',
      ],
      benefits: [
        'Enhanced network performance',
        'Improved security posture',
        'Reduced network downtime',
        'Comprehensive technical documentation',
        'Scalable infrastructure',
        'Expert hardware recommendations',
      ],
    },
    {
      title: 'MicroSolutions Manpower Development (MSMan)',
      description: 'MSMan focuses on developing IT talent and providing training programs to help organizations build skilled technology teams.',
      image: maintenanceServiceImage,
      large: true,
      fullDescription: 'MSMan is dedicated to developing the next generation of IT professionals. We provide comprehensive training programs, certification courses, and talent development services to help organizations build and maintain highly skilled technology teams.',
      features: [
        'Professional IT training programs',
        'Industry certification preparation',
        'Custom corporate training',
        'Skill assessment and development',
        'Mentorship programs',
        'Continuous learning initiatives',
      ],
      benefits: [
        'Build internal IT expertise',
        'Reduce dependency on external consultants',
        'Improved employee retention',
        'Up-to-date technical skills',
        'Enhanced team productivity',
        'Career growth opportunities for staff',
      ],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-[#001f3f] to-[#013f7e] relative overflow-hidden rounded-[20px] md:rounded-[40px] lg:rounded-[55px] my-8 md:my-12 lg:my-20 mx-4 md:mx-8">
      {/* Animated background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #82e4ff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 lg:mb-16 text-white"
        >
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[44px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">Our Service</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[1.4] md:leading-[1.6] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-medium">WE GIVE OUT TOP NOTCH SERVICES TO OUR CLIENTS</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[22px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`flex flex-col h-auto overflow-hidden rounded-[20px] shadow-[0px_32px_60px_0px_rgba(0,0,0,0.1)] ${
                service.large ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-[260px] lg:h-[306px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  src={service.image}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white flex flex-col gap-[12px] md:gap-[16px] items-start p-4 md:p-5 lg:p-[25px]">
                <h3 className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] text-black font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">{service.title}</h3>
                <p className="text-[12px] md:text-[13px] leading-[1.5] text-[#585858] font-['Nunito',_sans-serif] line-clamp-3 flex-1">{service.description}</p>
                <motion.button
                  onClick={() => setSelectedService(index)}
                  whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border border-black rounded-[11.608px] h-[48px] md:h-[54px] lg:h-[58.665px] w-full md:w-[130px] lg:w-[138.648px] text-[14px] md:text-[16px] lg:text-[18.572px] leading-[1.5] transition-colors font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
                >
                  Learn more
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex flex-col h-auto overflow-hidden rounded-[20px]"
          >
            <div className="relative h-[200px] md:h-[280px] lg:h-[362px] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                alt="Contact us"
                className="w-full h-full object-cover"
                src={systemIntegrationServiceImage}
              />
            </div>
            <div className="bg-white flex-1 p-4 md:p-5 lg:p-[25px] flex flex-col gap-[12px] md:gap-[16px]">
              <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">REACH OUT NOW TO ENJOY OUR GREAT PACKAGE</p>
              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                whileHover={{ scale: 1.05, borderColor: '#cc0000' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-red-600 rounded-[11.608px] h-[48px] md:h-[54px] lg:h-[59px] w-full text-[14px] md:text-[16px] lg:text-[18.572px] leading-[1.5] text-red-600 transition-colors font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
              >
                CONTACT US
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}
    </section>
  );
}