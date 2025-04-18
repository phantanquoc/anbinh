import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoPlaceholder from '../assets/logo-placeholder.svg';

interface NavbarProps {
  language: 'vi' | 'en';
  toggleLanguage: () => void;
}

const Navbar = ({ language, toggleLanguage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      en: 'HOME',
      vi: 'TRANG CHỦ',
      path: '/'
    },
    {
      en: 'ABOUT US',
      vi: 'GIỚI THIỆU',
      path: '/about'
    },
    {
      en: 'PRODUCTS',
      vi: 'SẢN PHẨM',
      path: '/products'
    },
    {
      en: 'COMMUNICATION',
      vi: 'TRUYỀN THÔNG',
      path: '/communication'
    },
    {
      en: 'CONTACT US',
      vi: 'LIÊN HỆ',
      path: '/contact'
    }
  ];

  return (
    <header>
      {/* Top bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>FreshFruits Group Ecosystem</div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-gray-200"
            >
              {language === 'vi' ? 'English' : 'Tiếng Việt'}
            </button>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="FreshFruits Logo"
                  className="h-12 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = logoPlaceholder;
                  }}
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-800 hover:text-red-600 font-medium"
                >
                  {language === 'vi' ? item.vi : item.en}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-red-600 focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-800 hover:text-red-600 font-medium px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {language === 'vi' ? item.vi : item.en}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
