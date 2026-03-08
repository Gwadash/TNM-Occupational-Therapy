import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, Award, Users, CheckCircle, Activity, Baby, Brain, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-blue-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Healthcare background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-sm border border-amber-500/30">
              Vanderbijlpark's Trusted OT Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Professional Occupational Therapy Services in Vanderbijlpark
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Supporting adults and children to improve independence, function, recovery, and participation in daily life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-all flex items-center gap-2 shadow-lg shadow-amber-900/20"
              >
                Book an Appointment <ArrowRight size={20} />
              </Link>
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000" 
                  alt="Therapy session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold mb-1">Founder</p>
                <p className="text-amber-500 font-medium">Tirelo N. Magane</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Welcome to TNM Occupational Therapy</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Restoring Function, Enhancing Life
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Occupational Therapy is a client-centred health profession concerned with promoting health and well-being through occupation. Our primary goal is to enable people to participate in the activities of everyday life.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At TNM Occupational Therapy, we provide evidence-based interventions tailored to the unique needs of each patient. Whether you are recovering from an injury, managing a chronic condition, or seeking support for your child's development, we are here to guide you.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-amber-500" size={24} />
                  <span className="font-semibold text-slate-800">Adult Rehab</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-amber-500" size={24} />
                  <span className="font-semibold text-slate-800">Paediatric Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-amber-500" size={24} />
                  <span className="font-semibold text-slate-800">Medico-legal</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-amber-500" size={24} />
                  <span className="font-semibold text-slate-800">Hand Therapy</span>
                </div>
              </div>
              <Link to="/about" className="text-blue-900 font-bold flex items-center gap-2 hover:text-amber-600 transition-colors">
                Learn more about our practice <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Therapy Services</h3>
            <p className="text-lg text-slate-600">
              We offer a wide range of specialized occupational therapy services designed to address physical, cognitive, and developmental challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {service.icon === 'Hand' && <Activity size={28} />}
                  {service.icon === 'Baby' && <Baby size={28} />}
                  {service.icon === 'Brain' && <Brain size={28} />}
                  {service.icon === 'FileText' && <FileText size={28} />}
                  {service.icon === 'Activity' && <Activity size={28} />}
                  {service.icon === 'Briefcase' && <Users size={28} />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link to={service.path} className="text-blue-900 font-bold flex items-center gap-2 group-hover:text-amber-600 transition-colors">
                  Read More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Dedicated to Your Functional Independence</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Qualified & Certified</h4>
                    <p className="text-slate-600">BSc OT from Wits University with ErgoScience certifications in Work Performance Evaluation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Patient-Centered Care</h4>
                    <p className="text-slate-600">We prioritize your goals and lifestyle, creating personalized treatment plans for adults and children.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Evidence-Based Practice</h4>
                    <p className="text-slate-600">Our interventions are grounded in the latest clinical research and functional rehabilitation techniques.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <h3 className="text-2xl font-bold mb-6">Who We Help</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Adults recovering from illness or injury</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Children with developmental or learning challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Patients with neurological conditions (Stroke, TBI)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Individuals needing work-related assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Legal firms requiring medico-legal reporting</span>
                </li>
              </ul>
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="italic text-blue-200">"Our mission is to empower individuals through meaningful occupation and functional rehabilitation."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey to Better Function?</h2>
          <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
            Contact us today to book an initial assessment or to discuss your therapy needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all shadow-xl">
              Book an Appointment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
