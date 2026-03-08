import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const About = () => {
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
            About TNM Occupational Therapy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Dedicated to providing compassionate, evidence-based, and patient-centered rehabilitation in Vanderbijlpark.
          </motion.p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
                  alt="Tirelo N. Magane" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="text-white font-bold text-lg mb-1">Tirelo N. Magane</p>
                <p className="text-amber-950 text-sm font-medium">Founder & Lead Occupational Therapist</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Meet the Therapist</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compassionate Care Driven by Professionalism</h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Tirelo Magane is the Founder and Director of TNM Occupational Therapy. With a deep commitment to helping patients function better in their everyday lives, Tirelo established the practice to serve the Vanderbijlpark and greater Vaal community.
                </p>
                <p>
                  Her approach is rooted in evidence-based practice and patient-centered rehabilitation. She believes that every individual deserves the opportunity to participate meaningfully in their daily activities, regardless of the challenges they face.
                </p>
                <p>
                  Tirelo's diverse experience across clinical settings, schools, and specialized rehabilitation facilities allows her to provide a holistic perspective on patient care, ensuring that both physical and emotional needs are addressed.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <GraduationCap className="text-blue-900 shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900">BSc OT (Wits)</h4>
                    <p className="text-sm text-slate-500">University of the Witwatersrand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <Award className="text-blue-900 shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900">ErgoScience Certified</h4>
                    <p className="text-sm text-slate-500">Work Performance Evaluation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Briefcase className="text-amber-600" /> Professional Experience
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute w-4 h-4 bg-blue-900 rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-lg font-bold text-slate-900">Founder & Director</h4>
                    <p className="text-blue-700 font-medium">TNM Occupational Therapy | Nov 2023 - Present</p>
                    <p className="text-slate-600 mt-2">Leading private practice in Vanderbijlpark, specializing in adult and paediatric rehabilitation.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-lg font-bold text-slate-900">Occupational Therapist</h4>
                    <p className="text-blue-700 font-medium">Isipho Sethu LSEN School | May 2023 - Present</p>
                    <p className="text-slate-600 mt-2">Providing specialized support for learners with special educational needs.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-lg font-bold text-slate-900">Occupational Therapist</h4>
                    <p className="text-blue-700 font-medium">Life Healthcare | Apr 2023 - May 2023</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-lg font-bold text-slate-900">Community Service OT</h4>
                    <p className="text-blue-700 font-medium">Sebokeng Regional Hospital | Jan 2022 - Dec 2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Heart className="text-amber-600" /> Our Mission & Values
                </h3>
                <p className="text-lg text-slate-600 mb-8">
                  Our mission is to provide high-quality, evidence-based occupational therapy services that empower our patients to achieve their highest level of independence and quality of life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Empathy & Compassion',
                    'Professional Excellence',
                    'Function-Focused Care',
                    'Collaborative Approach',
                    'Evidence-Based Practice',
                    'Patient-Centered Rehabilitation'
                  ].map((value) => (
                    <div key={value} className="flex items-center gap-3">
                      <CheckCircle className="text-amber-500 shrink-0" size={20} />
                      <span className="font-medium text-slate-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-900 p-8 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-6">Education</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-amber-400 font-bold">2018 - 2021</p>
                    <p className="font-semibold">BSc Occupational Therapy</p>
                    <p className="text-blue-200 text-sm">University of the Witwatersrand</p>
                  </div>
                  <div>
                    <p className="text-amber-400 font-bold">2014 - 2017</p>
                    <p className="font-semibold">Matric Certificate</p>
                    <p className="text-blue-200 text-sm">Calvin College</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Certifications</h4>
                <ul className="space-y-4">
                  {BUSINESS_INFO.certifications.map((cert) => (
                    <li key={cert} className="flex gap-3 text-slate-600 text-sm italic">
                      <Award className="text-amber-600 shrink-0" size={18} />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Positioning Your Recovery First</h2>
          <p className="text-lg text-slate-600 mb-10">
            Whether you're a patient, a parent, or a referring professional, we are committed to providing the highest standard of care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all">
              Contact the Practice
            </Link>
            <Link to="/services" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-200 transition-all">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
