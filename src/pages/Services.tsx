import React from 'react';
import { motion } from 'motion/react';
import { Activity, Baby, Brain, FileText, Briefcase, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
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
            Our Specialized Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive occupational therapy solutions for adults and children in Vanderbijlpark and the Vaal area.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-8">
                  {service.icon === 'Hand' && <Activity size={32} />}
                  {service.icon === 'Baby' && <Baby size={32} />}
                  {service.icon === 'Brain' && <Brain size={32} />}
                  {service.icon === 'FileText' && <FileText size={32} />}
                  {service.icon === 'Activity' && <Activity size={32} />}
                  {service.icon === 'Briefcase' && <Briefcase size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.path} 
                  className="inline-flex items-center gap-2 text-blue-900 font-bold hover:text-amber-600 transition-colors"
                >
                  Learn More <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* Hand Therapy */}
            <div id="hand-therapy" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Hand Therapy & Rehabilitation</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Hand therapy is a specialized area of occupational therapy that focuses on treating conditions affecting the hands and upper limbs. It is essential for patients recovering from injuries, surgeries, or chronic conditions that limit their hand function.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Post-surgical rehabilitation (tendon repairs, fractures)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Management of arthritis and repetitive strain injuries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Custom splinting and orthotics fabrication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Scar management and edema control</span>
                  </li>
                </ul>
                <Link to="/services/hand-therapy" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all inline-block">
                  Detailed Hand Therapy Info
                </Link>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hand therapy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Paediatric Therapy */}
            <div id="paediatric-therapy" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000" 
                  alt="Paediatric therapy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Paediatric Occupational Therapy</h2>
                <p className="text-lg text-slate-600 mb-6">
                  We help children develop the skills they need to grow into functional, independent adults. Our paediatric services address challenges that affect a child's ability to play, learn, and perform daily routines.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Sensory processing and integration support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Fine and gross motor skill development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">School readiness and academic participation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Activities of daily living (dressing, feeding, hygiene)</span>
                  </li>
                </ul>
                <Link to="/services/paediatric-therapy" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all inline-block">
                  Detailed Paediatric Info
                </Link>
              </div>
            </div>

            {/* Medico-legal */}
            <div id="medico-legal" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Medico-legal & Assessments</h2>
                <p className="text-lg text-slate-600 mb-6">
                  TNM Occupational Therapy provides professional assessment and reporting services for legal and insurance purposes. Our reports are objective, evidence-based, and medically credible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-1">RAF Assessments</h4>
                    <p className="text-sm text-slate-500">Road Accident Fund claim evaluations.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-1">Medical Negligence</h4>
                    <p className="text-sm text-slate-500">Expert reporting for negligence cases.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-1">FCEs</h4>
                    <p className="text-sm text-slate-500">Functional Capacity Evaluations.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-1">Vocational Rehab</h4>
                    <p className="text-sm text-slate-500">Return-to-work support and planning.</p>
                  </div>
                </div>
                <Link to="/services/medico-legal" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all inline-block">
                  Medico-legal Services
                </Link>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Legal documents" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-slate-600 mb-10">
            We are happy to discuss your specific situation and recommend the best course of therapy or assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-all">
              Enquire Now
            </Link>
            <Link to="/faq" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-200 transition-all">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
