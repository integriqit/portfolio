import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Solutions" },
  { id: "features", label: "Features" },
  { id: "technology", label: "Technology" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);

    // Use Link for navigation instead of navigate
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate to home with hash if element not on this page
      navigate(`/#${id}`);
    }
  };

  // Smooth scroll on Index page if hash exists
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/10">
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <div className="w-32 flex items-center justify-center shadow-glow">
              <img src="/logo.jpeg" alt="Logo" />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-xl font-black text-foreground">
                <span className="text-gradient">IntegriQ</span> IT
              </span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">
                Digital Solutions
              </span>
            </div> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group rounded-lg hover:bg-surface-hover"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={cn(
              "lg:hidden p-3 rounded-xl transition-all duration-300",
              "text-muted-foreground hover:text-primary hover:bg-surface-hover",
              isMenuOpen && "bg-surface-hover text-primary"
            )}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-4 glass rounded-2xl border border-border/20 shadow-elevated animate-fade-in-scale overflow-hidden">
            <div className="p-6 flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="px-4 py-3 text-left text-muted-foreground hover:text-primary hover:bg-surface-hover rounded-xl transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
