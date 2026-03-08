import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white">TNM</span>
              <span className="text-xs font-medium tracking-widest text-amber-500">OCCUPATIONAL THERAPY</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional Occupational Therapy services in Vanderbijlpark, supporting adults and children to improve independence and quality of life.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About the Practice</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
              <li><Link to="/services/paediatric-therapy" className="hover:text-amber-500 transition-colors">Paediatric Therapy</Link></li>
              <li><Link to="/services/hand-therapy" className="hover:text-amber-500 transition-colors">Hand Therapy</Link></li>
              <li><Link to="/services/medico-legal" className="hover:text-amber-500 transition-colors">Medico-legal Services</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Specialized Care</h4>
            <ul className="space-y-3 text-sm">
              <li>Neuro-rehabilitation</li>
              <li>Functional Capacity Evaluations</li>
              <li>Vocational Rehabilitation</li>
              <li>RAF Assessments</li>
              <li>Medical Negligence Reports</li>
              <li>Work Performance Evaluation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-amber-500 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-500 transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} TNM Occupational Therapy. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>Designed for professional healthcare excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
