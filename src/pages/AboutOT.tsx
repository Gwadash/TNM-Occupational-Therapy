import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Activity, CheckCircle, ArrowRight, Brain, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOT = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="OT background" 
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
            What is Occupational Therapy?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Understanding the value of holistic, patient-centered care in restoring independence and daily living skills.
          </motion.p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Science of Doing</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Occupational therapy (OT) is a healthcare profession that helps people of all ages to do the things they want and need to do through the therapeutic use of daily activities (occupations).
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether it's a child learning to write, an adult recovering from a stroke, or a worker returning to their job after an injury, OTs focus on "the job of living"—helping people achieve independence and quality of life.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">A Holistic Approach</h4>
                <p className="text-slate-700">
                  Unlike professions that focus solely on a specific body part or symptom, OT looks at the whole person, their environment, and the activities they need to perform.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="bg-blue-900 p-8 rounded-2xl text-white">
                  <Activity size={32} className="text-amber-500 mb-4" />
                  <h4 className="font-bold mb-2">Physical</h4>
                  <p className="text-xs text-blue-200">Restoring strength and movement.</p>
                </div>
                <div className="bg-slate-100 p-8 rounded-2xl text-slate-900">
                  <Brain size={32} className="text-blue-900 mb-4" />
                  <h4 className="font-bold mb-2">Cognitive</h4>
                  <p className="text-xs text-slate-500">Improving memory and focus.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-amber-500 p-8 rounded-2xl text-white">
                  <Heart size={32} className="text-blue-900 mb-4" />
                  <h4 className="font-bold mb-2">Emotional</h4>
                  <p className="text-xs text-amber-900">Supporting mental well-being.</p>
                </div>
                <div className="bg-blue-50 p-8 rounded-2xl text-blue-900">
                  <Users size={32} className="text-blue-900 mb-4" />
                  <h4 className="font-bold mb-2">Social</h4>
                  <p className="text-xs text-blue-700">Enhancing community participation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Value of OT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">The Value of OT</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Occupational Therapy Impacts Lives</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Interventions',
                desc: 'Every treatment plan is uniquely designed to match the patient\'s specific goals, lifestyle, and environment.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Improved Daily Living',
                desc: 'Focusing on essential skills like dressing, grooming, and cooking to foster independence at home.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Improved Patient Outcomes',
                desc: 'Evidence-based strategies lead to faster recovery times and more sustainable long-term results.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Mental Health Integration',
                desc: 'Addressing the psychological impact of illness or injury to support overall emotional resilience.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Community Reintegration',
                desc: 'Helping patients return to their social circles, hobbies, and community roles with confidence.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Preventative Care',
                desc: 'Providing ergonomic advice and lifestyle modifications to prevent future injuries or complications.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Interdisciplinary Collaboration',
                desc: 'Working alongside doctors, physiotherapists, and teachers to ensure a cohesive care plan.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Support for Chronic Conditions',
                desc: 'Managing long-term illnesses through energy conservation and adaptive equipment.',
                icon: <CheckCircle className="text-amber-500" />
              },
              {
                title: 'Patient-Centered Care',
                desc: 'The patient is an active partner in the therapy process, ensuring their voice is always heard.',
                icon: <CheckCircle className="text-amber-500" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience the Value of Occupational Therapy</h2>
          <p className="text-lg text-slate-600 mb-10">
            Whether for yourself, your child, or a client, TNM Occupational Therapy is here to provide the professional support needed to thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all">
              Book an Assessment
            </Link>
            <Link to="/services" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-200 transition-all">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOT;
