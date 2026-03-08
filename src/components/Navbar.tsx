import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Paediatrics', path: '/services/paediatric-therapy' },
    { name: 'Hand Therapy', path: '/services/hand-therapy' },
    { name: 'Medico-legal', path: '/services/medico-legal' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>TNM</span>
            <span className={`text-xs font-medium tracking-wider ${scrolled ? 'text-blue-700' : 'text-blue-700 md:text-blue-100'}`}>OCCUPATIONAL THERAPY</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  location.pathname === link.path 
                    ? 'text-amber-600' 
                    : scrolled ? 'text-slate-700' : 'text-slate-700 lg:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-700' : 'text-blue-900'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg text-center font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
