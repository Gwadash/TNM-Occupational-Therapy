import React from 'react';
import { motion } from 'motion/react';
import { Activity, CheckCircle, ArrowRight, Shield, Zap, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';

const HandTherapy = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Hand therapy background" 
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
            Hand Therapy & Rehabilitation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Specialized care for hand and upper limb injuries, restoring function and independence in Vanderbijlpark.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Care for Your Hands</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our hands are essential for almost every activity we perform. When injury, surgery, or illness affects the function of your hands, it can significantly impact your work, hobbies, and daily self-care.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hand therapy is a specialized area of occupational therapy that combines comprehensive knowledge of the upper limb with clinical skills in assessment and treatment. We work closely with surgeons and physicians to ensure optimal recovery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <Shield className="text-blue-900" size={24} />
                  <span className="font-semibold text-slate-800">Post-Surgical Care</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <Zap className="text-blue-900" size={24} />
                  <span className="font-semibold text-slate-800">Pain Management</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-video"
            >
              <img 
                src="https://images.unsplash.com/photo-1579154235828-451ae143b184?auto=format&fit=crop&q=80&w=1000" 
                alt="Hand assessment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Conditions Treated</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Specialized Treatment for Upper Limb Conditions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fractures & Dislocations',
                desc: 'Rehabilitation following bone injuries in the hand, wrist, or forearm.',
                icon: <Activity size={28} />
              },
              {
                title: 'Tendon & Nerve Injuries',
                desc: 'Specialized care for repaired tendons or nerve compressions like Carpal Tunnel.',
                icon: <Hand size={28} />
              },
              {
                title: 'Arthritis Management',
                desc: 'Strategies and splinting to manage pain and maintain function in arthritic joints.',
                icon: <Shield size={28} />
              },
              {
                title: 'Post-Surgical Recovery',
                desc: 'Guided rehabilitation following hand surgery to ensure optimal healing and movement.',
                icon: <CheckCircle size={28} />
              },
              {
                title: 'Repetitive Strain',
                desc: 'Treatment for overuse injuries and ergonomic advice for prevention.',
                icon: <Zap size={28} />
              },
              {
                title: 'Scar & Edema Control',
                desc: 'Techniques to manage swelling and scar tissue following injury or surgery.',
                icon: <Activity size={28} />
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

      {/* Treatment Techniques */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Our Treatment Approach</h3>
                <p className="text-blue-100 mb-8">
                  We utilize a variety of clinical techniques to restore function and manage symptoms in the hand and upper limb.
                </p>
                <ul className="space-y-4">
                  {[
                    'Custom splinting and orthotics fabrication',
                    'Wound and scar management',
                    'Edema (swelling) control techniques',
                    'Sensory re-education',
                    'Therapeutic exercises for strength and range of motion',
                    'Joint protection education',
                    'Ergonomic assessments and advice',
                    'Activities of daily living retraining'
                  ].map((tech) => (
                    <li key={tech} className="flex items-center gap-3">
                      <CheckCircle className="text-amber-500" size={20} />
                      <span className="text-blue-100">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-xl font-bold mb-4">Why Specialized Hand Therapy?</h4>
                <p className="text-blue-100 mb-6">
                  The hand is a complex structure with intricate anatomy. Specialized hand therapy ensures that:
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-500">01.</span>
                    <span>Recovery is guided by specific anatomical knowledge.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-500">02.</span>
                    <span>Custom splints are made to fit your unique hand shape.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-500">03.</span>
                    <span>Complications like stiffness or nerve damage are minimized.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-500">04.</span>
                    <span>You return to your work and hobbies as safely and quickly as possible.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Restore Your Hand Function</h2>
          <p className="text-lg text-slate-600 mb-10">
            Don't let hand pain or injury limit your life. Contact us to schedule a specialized hand assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all">
              Book a Hand Assessment
            </Link>
            <Link to="/services" className="bg-white text-blue-900 border border-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all">
              View Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandTherapy;
