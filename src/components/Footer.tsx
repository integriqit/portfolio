import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Separator } from './ui/Separator';

const socialLinks = [
  { icon: Facebook, href: '#', color: 'hover:text-neo-purple' },
  { icon: Twitter, href: '#', color: 'hover:text-neo-cyan' },
  { icon: Linkedin, href: '#', color: 'hover:text-neo-pink' },
  { icon: Github, href: '#', color: 'hover:text-neo-blue' },
];

const FooterLink = ({ label, id }: { label: string; id: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
    >
      {label}
    </button>
  );
};

const footerLinks = {
  Solutions: [
    { label: 'Digital Identity', id: 'services' },
    { label: 'Mobile Financial Services', id: 'services' },
    { label: 'Payment Service Provider', id: 'services' },
    { label: 'Digital Savings Platform', id: 'services' },
  ],
  Support: [
    { label: 'Help Center', id: 'contact' },
    { label: 'Contact', id: 'contact' },
    { label: 'FAQ', id: 'contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', id: 'privacy-policy' },
    { label: 'Terms of Service', id: 'terms-of-service' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-dark-surface/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neo-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neo-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Logo" className="w-32" />
              {/* <div className="flex flex-col">
                <span className="text-xl font-black text-foreground">
                  <span className="text-gradient">IntegriQ</span> IT
                </span>
                <span className="text-xs text-muted-foreground font-medium -mt-1">
                  Digital Solutions
                </span>
              </div> */}
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transforming trust into digital finance for Bangladesh. Secure payments, savings, and
              investment solutions.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap">
              <a
                href="#"
                className="flex items-center gap-2  px-4 py-2 rounded-lg  transition-colors"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-32 h-auto"
                />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg  transition-colors"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="w-32 h-auto"
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-dark-elevated border border-border/30 rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-neon`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground mb-4">{category}</h3>
              <ul className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <FooterLink label={link.label} id={link.id} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-5 bg-border/30" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} IntegriQ IT. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Licensed by Bangladesh Bank | Secure & Compliant
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 bg-gradient-to-r from-neo-purple to-neo-cyan rounded-full opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
