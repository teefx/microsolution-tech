import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { contactBackgroundImage } from '../constants/images';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = encodeURIComponent('New Contact Form Submission');
    const body = encodeURIComponent(`
CONTACT FORM SUBMISSION

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
This message was submitted from the MicroSolutions website contact form.
    `.trim());

    // Open mailto link
    window.location.href = `mailto:info@microsolutionsngr.com?subject=${subject}&body=${body}`;
    
    // Show success toast
    toast.success('Message sent successfully!', {
      description: 'Your email client has been opened. Please send the email to complete your message.',
      duration: 5000,
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-3 md:mb-4 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[#050505]">Get In Touch</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 font-['Nunito',_sans-serif]">Let&apos;s discuss how we can help transform your business</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-[700px] lg:h-auto rounded-[30px] md:rounded-[40px] lg:rounded-[55px] shadow-[1px_0px_39.6px_0px_rgba(28,187,255,0.25)] overflow-hidden relative bg-gradient-to-br from-[#001f3f] to-[#013f7e]"
        >
          {/* Background image and overlay */}
          <div className="absolute inset-0">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              src={contactBackgroundImage}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full p-6 md:p-10 lg:p-12 relative z-10">
            {/* Decorative Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="hidden lg:block h-full max-h-[600px] rounded-[30px] lg:rounded-[38px] w-full max-w-[560px] overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                alt="Contact"
                className="w-full h-full object-cover"
                src={contactBackgroundImage}
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-6 md:gap-8 lg:gap-[41px] lg:pl-[40px] w-full max-w-[600px] mx-auto lg:mx-0"
            >
              <div className="flex flex-col gap-[8px]">
                <h3 
                  className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.3] text-white font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
                >
                  Let's Build the Future Together.
                </h3>
                <div className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] md:leading-[1.8] text-[#f4f8ff] font-['Nunito',_sans-serif]">
                  <p className="mb-0">Reach out and let innovation and collaboration light up new possibilities.</p>
                  <p>Together, we'll shape the future, one brilliant idea at a time.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
                {/* Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#82e4ff] transition-colors text-[14px] md:text-[15px] font-['Nunito',_sans-serif]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#82e4ff] transition-colors text-[14px] md:text-[15px] font-['Nunito',_sans-serif]"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#82e4ff] transition-colors text-[14px] md:text-[15px] font-['Nunito',_sans-serif]"
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#82e4ff] transition-colors text-[14px] md:text-[15px] font-['Nunito',_sans-serif]"
                />

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#82e4ff] transition-colors resize-none text-[14px] md:text-[15px] font-['Nunito',_sans-serif]"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: '#66d3ff' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#82e4ff] px-6 md:px-8 py-3 md:py-4 rounded-[40px] text-[#001f3f] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[14px] md:text-[16px] w-full md:w-auto transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}