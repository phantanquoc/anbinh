import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  language: 'vi' | 'en';
}

const Home = ({ language }: HomeProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const translations = {
    hero: {
      title: {
        vi: 'NHÀ SẢN XUẤT VÀ XUẤT KHẨU SẢN PHẨM TỪ TRÁI CÂY VÀ HẠT',
        en: 'MANUFACTURER AND EXPORTER OF PRODUCTS FROM FRUITS AND NUTS'
      },
      subtitle: {
        vi: 'Chúng tôi cung cấp trái cây tươi chất lượng cao từ khắp nơi trên thế giới',
        en: 'We provide high-quality fresh fruits from around the world'
      },
      button: {
        vi: 'Khám phá ngay',
        en: 'Explore now'
      }
    },
    productSection: {
      title: {
        vi: 'DANH MỤC SẢN PHẨM',
        en: 'PRODUCT CATEGORIES'
      },
      viewMore: {
        vi: 'Tìm hiểu thêm',
        en: 'View more'
      }
    },
    aboutSection: {
      title: {
        vi: 'VỀ CHÚNG TÔI',
        en: 'ABOUT US'
      },
      content: {
        vi: 'FreshFruits Group là nhà cung cấp trái cây tươi quốc tế hàng đầu, chuyên về việc nhập khẩu và phân phối các loại trái cây cao cấp từ khắp nơi trên thế giới. Với hơn 20 năm kinh nghiệm, chúng tôi tự hào mang đến những sản phẩm tươi ngon, an toàn và chất lượng cao nhất cho người tiêu dùng Việt Nam.',
        en: 'FreshFruits Group is a leading international fresh fruit supplier, specializing in importing and distributing premium fruits from around the world. With over 20 years of experience, we pride ourselves on bringing the freshest, safest, and highest quality products to Vietnamese consumers.'
      },
      button: {
        vi: 'Tìm hiểu thêm',
        en: 'Learn more'
      }
    }
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Fresh fruits display'
    },
    {
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Fruit processing'
    },
    {
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Fruit export'
    }
  ];

  const productCategories = [
    {
      name: {
        vi: 'Nước ép trái cây',
        en: 'Fruit Juice'
      },
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      path: '/products'
    },
    {
      name: {
        vi: 'Trái cây đông lạnh',
        en: 'Frozen Fruits'
      },
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      path: '/products'
    },
    {
      name: {
        vi: 'Trái cây tươi',
        en: 'Fresh Fruits'
      },
      image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      path: '/products'
    },
    {
      name: {
        vi: 'Trái cây sấy khô',
        en: 'Dried Fruits'
      },
      image: 'https://images.unsplash.com/photo-1596591868231-05e882e38a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
      path: '/products'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
                {translations.hero.title[language]}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                {translations.hero.subtitle[language]}
              </p>
              <Link
                to="/products"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                {translations.hero.button[language]}
              </Link>
            </div>
          </div>
        ))}
        
        {/* Slider indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-red-600' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.productSection.title[language]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.name[language]}</h3>
                  <Link
                    to={category.path}
                    className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
                  >
                    {translations.productSection.viewMore[language]}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="About FreshFruits"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-600">
                {translations.aboutSection.title[language]}
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {translations.aboutSection.content[language]}
              </p>
              <Link
                to="/about"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                {translations.aboutSection.button[language]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
