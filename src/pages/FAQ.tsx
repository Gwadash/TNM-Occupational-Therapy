import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does an occupational therapist do?",
      answer: "An occupational therapist (OT) helps people of all ages participate in the activities (occupations) they want and need to do. This includes self-care, work, school, and play. We address physical, cognitive, and emotional barriers to help patients achieve independence."
    },
    {
      question: "Do you treat both adults and children?",
      answer: "Yes, TNM Occupational Therapy provides services for both paediatric and adult patients. We have specialized programs for children with developmental challenges and adults recovering from injury, illness, or surgery."
    },
    {
      question: "What conditions can occupational therapy help with?",
      answer: "We help with a wide range of conditions, including hand injuries, neurological conditions (like stroke or TBI), developmental delays in children, sensory processing disorders, physical disabilities, and work-related injuries."
    },
    {
      question: "What is a functional capacity evaluation (FCE)?",
      answer: "An FCE is a comprehensive, objective assessment of an individual's ability to perform work-related tasks. It is often used to determine if a person is ready to return to work after an injury or to support disability claims."
    },
    {
      question: "Do you provide medico-legal reports?",
      answer: "Yes, we provide professional medico-legal assessments and reports for Road Accident Fund (RAF) claims, medical negligence cases, and personal injury litigation. Our reports are evidence-based and medically credible."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling us at 064 679 8934, emailing tnm.occupationaltherapy@gmail.com, or using the enquiry form on our Contact page."
    },
    {
      question: "Do I need a referral to see an occupational therapist?",
      answer: "While many of our patients are referred by doctors, specialists, or teachers, you do not strictly need a referral to book an initial assessment in private practice. However, some medical aids may require a referral for reimbursement."
    },
    {
      question: "Where is the practice located?",
      answer: "We are located at 49 Livingstone Blvd, Vanderbijlpark C. E. 1, Vanderbijlpark, 1900. We serve the greater Vanderbijlpark and Vaal area."
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=2000" 
            alt="FAQ background" 
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Find answers to common questions about occupational therapy and our practice.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-amber-500 bg-amber-50/30' : 'border-slate-200 bg-white'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold ${activeIndex === index ? 'text-blue-900' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 p-1 rounded-full ${activeIndex === index ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center shrink-0">
              <HelpCircle size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Still have questions?</h4>
              <p className="text-slate-600 mb-4 md:mb-0">
                If you couldn't find the answer you're looking for, please don't hesitate to contact us directly.
              </p>
            </div>
            <Link to="/contact" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold whitespace-nowrap hover:bg-blue-800 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Experience the Benefits of OT?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Book your initial assessment today and take the first step towards improved function and independence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-all">
              Book an Appointment
            </Link>
            <Link to="/services" className="bg-white text-blue-900 border border-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
