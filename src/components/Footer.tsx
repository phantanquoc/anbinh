import { Link } from 'react-router-dom';

interface FooterProps {
  language: 'vi' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    companyName: {
      vi: 'CÔNG TY CỔ PHẦN FRESHFRUITS GROUP',
      en: 'FRESHFRUITS GROUP JOINT STOCK COMPANY'
    },
    address: {
      vi: 'Địa chỉ: 123 Đường Trái Cây, TP. Hồ Chí Minh',
      en: 'Address: 123 Fruit Street, Ho Chi Minh City'
    },
    phone: {
      vi: 'Điện thoại',
      en: 'Phone'
    },
    email: {
      vi: 'Email',
      en: 'Email'
    },
    website: {
      vi: 'Website',
      en: 'Website'
    },
    copyright: {
      vi: '© 1995 - 2024 FRESHFRUITS GROUP JOINT STOCK COMPANY.',
      en: '© 1995 - 2024 FRESHFRUITS GROUP JOINT STOCK COMPANY.'
    }
  };

  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/logo-white.png" 
                alt="FreshFruits Logo" 
                className="h-16 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/160x80?text=FreshFruits&bg=e63946&fg=ffffff';
                }}
              />
            </Link>
          </div>
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">{translations.companyName[language]}</h3>
            <p className="mb-1">{translations.address[language]}</p>
            <p className="mb-1">{translations.phone[language]}: +84 28 1234 5678</p>
            <p className="mb-1">{translations.email[language]}: sales@freshfruits.com</p>
            <p className="mb-1">{translations.website[language]}: www.freshfruits.com</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-white rounded-full p-2 text-red-600 hover:text-red-700">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full p-2 text-red-600 hover:text-red-700">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full p-2 text-red-600 hover:text-red-700">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-red-500 mt-8 pt-4 text-center">
          <p>{translations.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
