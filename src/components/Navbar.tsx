import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20'
          : 'bg-black/50 backdrop-blur-lg'
      } ${isOpen ? 'h-screen md:h-auto' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-light tracking-widest text-white cursor-pointer"
          >
            <a href="/" onClick={handleLogoClick}>BLANQ.</a>
          </motion.div>
          
          <div className="hidden md:flex">
            <div className="flex space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2.5">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  className="px-1"
                >
                  <a
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className={`px-6 py-2 rounded-full text-sm transition-colors ${
                      location.pathname === item.path
                        ? 'bg-white text-black font-medium'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={20} />
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8 text-2xl">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={`transition-colors ${
                    location.pathname === item.path
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}