import React from 'react';
import { motion } from 'motion/react';
import { Baby, CheckCircle, ArrowRight, Heart, Brain, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaediatricTherapy = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=2000" 
            alt="Paediatric background" 
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
            Paediatric Occupational Therapy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Supporting children in Vanderbijlpark to develop, learn, and play with confidence and independence.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Helping Your Child Reach Their Full Potential</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Occupational therapy for children focuses on the "occupations" of childhood: play, learning, and self-care. When a child faces challenges in these areas, it can affect their development, school performance, and overall quality of life.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At TNM Occupational Therapy, we provide a supportive and reassuring environment for both children and parents. We work collaboratively to identify barriers to function and develop personalized strategies to overcome them.
              </p>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Heart className="text-amber-600" /> Reassuring Care for Parents
                </h4>
                <p className="text-slate-700 italic">
                  "We understand that every child is unique. Our goal is to provide evidence-based therapy that is engaging for the child and practical for the family."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000" 
                alt="Child playing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Areas of Focus</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Occupational Therapy Helps Children</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sensory Processing',
                desc: 'Helping children manage and respond to sensory information from their environment effectively.',
                icon: <Brain size={28} />
              },
              {
                title: 'Fine Motor Skills',
                desc: 'Developing hand strength and coordination for tasks like writing, cutting, and using buttons.',
                icon: <Activity size={28} />
              },
              {
                title: 'Gross Motor Skills',
                desc: 'Improving balance, coordination, and strength for physical play and school activities.',
                icon: <Activity size={28} />
              },
              {
                title: 'Daily Independence',
                desc: 'Supporting skills for dressing, feeding, hygiene, and following daily routines.',
                icon: <CheckCircle size={28} />
              },
              {
                title: 'School Readiness',
                desc: 'Addressing cognitive and physical skills required for successful classroom participation.',
                icon: <Baby size={28} />
              },
              {
                title: 'Social & Emotional',
                desc: 'Supporting emotional regulation and social interaction skills for better relationships.',
                icon: <Heart size={28} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Common Challenges We Address</h3>
                <ul className="space-y-4">
                  {[
                    'Developmental delays',
                    'Sensory processing disorders',
                    'Autism Spectrum Disorder (ASD)',
                    'ADHD and attention difficulties',
                    'Cerebral Palsy and physical disabilities',
                    'Learning difficulties (Dysgraphia, etc.)',
                    'Fine and gross motor coordination issues',
                    'Challenges with daily self-care routines'
                  ].map((challenge) => (
                    <li key={challenge} className="flex items-center gap-3">
                      <CheckCircle className="text-amber-500" size={20} />
                      <span className="text-blue-100">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-xl font-bold mb-4">The Therapy Process</h4>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white shrink-0">1</span>
                    <div>
                      <p className="font-bold">Initial Assessment</p>
                      <p className="text-sm text-blue-200">Comprehensive evaluation of the child's strengths and challenges.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white shrink-0">2</span>
                    <div>
                      <p className="font-bold">Goal Setting</p>
                      <p className="text-sm text-blue-200">Collaborative planning with parents to set functional goals.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white shrink-0">3</span>
                    <div>
                      <p className="font-bold">Intervention</p>
                      <p className="text-sm text-blue-200">Engaging, play-based therapy sessions tailored to the child.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Support Your Child's Development Today</h2>
          <p className="text-lg text-slate-600 mb-10">
            Early intervention is key to helping children overcome developmental challenges. Contact us to schedule an assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all">
              Book an Assessment
            </Link>
            <Link to="/services" className="bg-white text-blue-900 border border-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all">
              Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaediatricTherapy;
