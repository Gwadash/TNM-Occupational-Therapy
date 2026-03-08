import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1516387784550-dd62f2558422?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Reach out to book an appointment or to discuss your therapy and assessment needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We are conveniently located in Vanderbijlpark and serve the greater Vaal area. Whether you are a patient, parent, or referring professional, we look forward to hearing from you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 font-bold text-sm hover:text-amber-600 transition-colors mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Phone Number</h4>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                      className="text-slate-600 hover:text-blue-900 transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-400 mt-1">Available during business hours</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Email Address</h4>
                    <a 
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-slate-600 hover:text-blue-900 transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">{BUSINESS_INFO.hours}</p>
                    <p className="text-xs text-slate-400 mt-1">Closed on weekends and public holidays</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-amber-50 rounded-3xl border border-amber-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-900 mb-1">Quick Contact</h4>
                  <p className="text-amber-800 text-sm">
                    Prefer WhatsApp? You can message us directly for quick enquiries.
                  </p>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\s/g, '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-900 font-bold text-sm hover:underline mt-2 inline-block"
                  >
                    Send WhatsApp Message
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. We have received your enquiry and will get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-900 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Appointment Enquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
                          placeholder="012 345 6789"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="paediatric">Paediatric Therapy</option>
                        <option value="hand">Hand Therapy</option>
                        <option value="neuro">Neuro-rehabilitation</option>
                        <option value="medico-legal">Medico-legal Assessment</option>
                        <option value="fce">Functional Capacity Evaluation</option>
                        <option value="other">Other / General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">How can we help you?</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all resize-none"
                        placeholder="Please provide some details about your enquiry..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10"
                    >
                      Send Enquiry <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 text-blue-900 opacity-50" />
            <p className="font-bold">Google Maps Embed Placeholder</p>
            <p className="text-sm">{BUSINESS_INFO.address}</p>
          </div>
        </div>
        {/* In a real app, use an iframe or map library here */}
        <iframe
          title="Practice Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(BUSINESS_INFO.address)}`}
          allowFullScreen
          className="opacity-0 pointer-events-none" // Hidden because we don't have an API key
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
