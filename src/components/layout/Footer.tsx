import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Globe, CheckCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-oppa-dark text-oppa-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-oppa-primary to-oppa-secondary rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-oppa-white" />
              </div>
              <span className="text-xl font-bold">OPPA Services</span>
            </div>
            <p className="text-oppa-light/80">
              Leading ICT System Integrator delivering cost-effective, future-proof solutions across Africa.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-oppa-primary/10 text-oppa-primary px-3 py-1 rounded-full text-xs">
                <CheckCircle className="w-3 h-3" />
                <span>AGPO Certified: PVT-5JUEKP5J</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-oppa-light/80">
              <li><Link href="/services/audio-visual" className="hover:text-oppa-primary transition-colors">Audio Visual</Link></li>
              <li><Link href="/services/security" className="hover:text-oppa-primary transition-colors">Security Solutions</Link></li>
              <li><Link href="/services/networking" className="hover:text-oppa-primary transition-colors">Networking</Link></li>
              <li><Link href="/services/automation" className="hover:text-oppa-primary transition-colors">Automation</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-oppa-light/80">
              <li><Link href="/about" className="hover:text-oppa-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-oppa-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/partners" className="hover:text-oppa-primary transition-colors">Partners</Link></li>
              <li><Link href="/careers" className="hover:text-oppa-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-4 text-oppa-light/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-oppa-primary mt-0.5 flex-shrink-0" />
                <p>Elysee Plaza, 2nd Floor<br />Kilimani Road, Nairobi</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-oppa-primary" />
                <a href="tel:+254705576746" className="hover:text-oppa-primary transition-colors">+254 705 576 746</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-oppa-primary" />
                <a href="mailto:info@oppaservices.com" className="hover:text-oppa-primary transition-colors">info@oppaservices.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-oppa-primary mt-0.5 flex-shrink-0" />
                <p>Mon-Fri: 8AM-5PM<br />Emergency: 24/7</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-oppa-dark/50 mt-12 pt-8 text-center text-sm text-oppa-light/60">
          <p>&copy; {new Date().getFullYear()} OPPA Services Limited. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-oppa-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-oppa-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};