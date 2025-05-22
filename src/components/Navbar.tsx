
import { Link } from "react-router-dom";
import { Home, BookText, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white">
              Your Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:text-white"
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link
                to="/writing"
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:text-white"
              >
                <BookText size={18} />
                <span>Writing</span>
              </Link>
              <Link
                to="/work"
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:text-white"
              >
                <Briefcase size={18} />
                <span>Work</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:text-white"
              >
                <Mail size={18} />
                <span>Contact</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              to="/writing"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookText size={18} />
              <span>Writing</span>
            </Link>
            <Link
              to="/work"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase size={18} />
              <span>Work</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail size={18} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
