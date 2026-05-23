import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'security', label: 'Security' },
  { id: 'technology', label: 'Technology' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    setActiveId(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setActiveId(id);

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  // smooth scroll spy with debounce
  useEffect(() => {
    const handleScrollSpy = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        let current = 'home';

        for (const item of navItems) {
          const el = document.getElementById(item.id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();

          if (rect.top <= 140) {
            current = item.id;
          }
        }

        setActiveId(current);
      }, 60); // smooth + less jitter
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/10 backdrop-blur-xl">
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <div className="flex flex-col">
              <span className="text-xl font-black text-foreground">
                <span className="text-gradient">IntegriQ</span> IT
              </span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => handleScroll(item.id)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-500 ease-out group',
                  activeId === item.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.label}

                {/* Smooth animated underline */}
                <span
                  className={cn(
                    'absolute left-4 right-4 bottom-0 h-[2px] bg-gradient-primary rounded-full',
                    'transition-all duration-500 ease-out origin-center',
                    activeId === item.id
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'lg:hidden p-3 rounded-xl transition-all duration-300 ease-out',
              'text-muted-foreground hover:text-primary hover:bg-surface-hover',
              isMenuOpen && 'bg-surface-hover text-primary rotate-90'
            )}
          >
            <div className="transition-transform duration-300">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu with smooth animation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
            isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          )}
        >
          <div className="mx-4 glass rounded-2xl border border-border/20 shadow-elevated">
            <div className="p-6 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={() => handleScroll(item.id)}
                  className={cn(
                    'px-4 py-3 rounded-xl transition-all duration-300 ease-out',
                    activeId === item.id
                      ? 'text-primary bg-surface-hover scale-[1.02]'
                      : 'text-muted-foreground hover:text-primary hover:bg-surface-hover'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
