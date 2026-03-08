import React from 'react';
import { motion } from 'motion/react';
import { FileText, Shield, Scale, Briefcase, CheckCircle, ArrowRight, Gavel, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicoLegal = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Medico-legal background" 
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
            Medico-legal & Assessment Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Professional, objective, and evidence-based occupational therapy assessments and reports for legal and insurance purposes.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Reporting for Legal Excellence</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                TNM Occupational Therapy offers specialized assessment services for attorneys, insurers, case managers, and employers. Our reports provide a comprehensive analysis of an individual's functional abilities, limitations, and future needs.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We utilize standardized assessment tools and clinical reasoning to deliver high-quality, medically credible documentation that supports the legal process and ensures fair outcomes for all parties involved.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-sm border border-blue-100">
                  <Scale size={16} /> Objective Analysis
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-sm border border-blue-100">
                  <Shield size={16} /> Medically Credible
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-sm border border-blue-100">
                  <FileText size={16} /> Evidence-Based
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-12 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Gavel className="text-amber-500" /> Our Legal Scope
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold">RAF Assessments</h4>
                    <p className="text-sm text-slate-400">Road Accident Fund claim evaluations and reporting.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold">Medical Negligence</h4>
                    <p className="text-sm text-slate-400">Expert occupational therapy reporting for negligence cases.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold">Personal Injury</h4>
                    <p className="text-sm text-slate-400">Functional impact assessments for various injury claims.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Assessment Types</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Specialized Functional Evaluations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-8">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Functional Capacity Evaluations (FCE)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                An FCE is an objective assessment of an individual's ability to perform work-related tasks and activities of daily living. It is used to determine physical capabilities, endurance, and safety in the workplace.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-amber-500" size={18} />
                  <span>Objective work-performance testing</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-amber-500" size={18} />
                  <span>Determination of return-to-work readiness</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-amber-500" size={18} />
                  <span>Identification of work accommodations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-8">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vocational Rehabilitation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We support patients in returning to work or finding suitable alternative employment after an injury or illness. This includes job analysis, work hardening, and ergonomic advice.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-amber-500" size={18} />
                  <span>Job-site visits and task analysis</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-amber-500" size={18} />
                  <span>Work hardening programs</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-amber-500" size={18} />
                  <span>Ergonomic recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Legal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Legal Professionalism</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Why Attorneys Choose TNM OT</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Clinical Excellence</h4>
                    <p className="text-slate-600">Reports are written by a qualified OT with specialized ErgoScience certifications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Objective Methodology</h4>
                    <p className="text-slate-600">We use standardized testing protocols to ensure data-driven, defensible conclusions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Timely Delivery</h4>
                    <p className="text-slate-600">We understand legal timelines and are committed to providing reports within agreed timeframes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Comprehensive Analysis</h4>
                    <p className="text-slate-600">Our reports cover physical, cognitive, and psychosocial aspects of function.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Request a Medico-legal Assessment</h2>
          <p className="text-lg text-blue-100 mb-10">
            Contact us to discuss your specific reporting needs or to request a fee schedule for our medico-legal services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-all">
              Enquire Now
            </Link>
            <a href={`mailto:tnm.occupationaltherapy@gmail.com`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
              Email the Practice
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicoLegal;
