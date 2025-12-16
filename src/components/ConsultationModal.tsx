import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const services = [
    'MicroSolutions Consultancy (MSConsult)',
    'MicroSolutions Software (MSSoft)',
    'MicroSolutions Communications and Engineering (MSCom)',
    'MicroSolutions Manpower Development (MSMan)',
    'General Inquiry',
  ];

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = encodeURIComponent('New Consultation Booking Request');
    const body = encodeURIComponent(`
CONSULTATION BOOKING REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}

Service of Interest: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Additional Information:
${formData.message || 'No additional information provided'}

---
This booking was submitted from the MicroSolutions website consultation form.
    `.trim());

    // Open mailto link
    window.location.href = `mailto:info@microsolutionsngr.com?subject=${subject}&body=${body}`;
    
    // Show success toast
    toast.success('Consultation booking sent successfully!', {
      description: 'Your email client has been opened. Please send the email to complete your booking.',
      duration: 5000,
    });
    
    // Close modal after a short delay
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              className="bg-white rounded-[20px] max-w-[800px] w-full max-h-[90vh] overflow-hidden shadow-2xl relative my-auto"
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
                <div className="bg-gradient-to-br from-[#2a0079] to-[#0066ff] p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-[36px] leading-[44px] mb-3 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold">
                      Book a Consultation
                    </h2>
                    <p className="text-[16px] leading-[24px] opacity-90 font-['Nunito',_sans-serif]">
                      Schedule a free consultation with our experts to discuss your technology needs
                    </p>
                  </motion.div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Full Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="col-span-2"
                    >
                      <label className="flex items-center gap-2 text-[13px] md:text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <User className="w-4 h-4" />
                        Full Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-2 md:py-3 text-[14px] md:text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 xxx xxx xxxx"
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="col-span-2"
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <Building className="w-4 h-4" />
                        Company/Organization
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name (optional)"
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      />
                    </motion.div>

                    {/* Service Interest */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="col-span-2"
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <MessageSquare className="w-4 h-4" />
                        Service of Interest *
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </motion.select>
                    </motion.div>

                    {/* Preferred Date */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <Calendar className="w-4 h-4" />
                        Preferred Date *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      />
                    </motion.div>

                    {/* Preferred Time */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <Clock className="w-4 h-4" />
                        Preferred Time *
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all font-['Nunito',_sans-serif]"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </motion.select>
                    </motion.div>

                    {/* Additional Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="col-span-2"
                    >
                      <label className="flex items-center gap-2 text-[14px] mb-2 font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-gray-700">
                        <MessageSquare className="w-4 h-4" />
                        Additional Information
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01, borderColor: '#0066ff' }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or any specific requirements..."
                        rows={4}
                        className="w-full bg-gray-50 border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0066ff] transition-all resize-none font-['Nunito',_sans-serif]"
                      />
                    </motion.div>
                  </div>

                  {/* Submit Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, backgroundColor: '#012e60' }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-[#013f7e] px-6 md:px-8 py-3 md:py-4 rounded-[40px] text-white text-[14px] md:text-[16px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
                    >
                      Schedule Consultation
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02, borderColor: '#013f7e' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                      className="flex-1 border-2 border-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-[40px] text-gray-700 text-[14px] md:text-[16px] font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold"
                    >
                      Cancel
                    </motion.button>
                  </motion.div>

                  {/* Note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-[12px] md:text-[13px] text-gray-500 text-center mt-3 md:mt-4 font-['Nunito',_sans-serif]"
                  >
                    * Required fields. We&apos;ll confirm your appointment within 24 hours.
                  </motion.p>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}