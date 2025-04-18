import { useState } from 'react';

interface ProductsProps {
  language: 'vi' | 'en';
}

interface Product {
  id: number;
  name: {
    vi: string;
    en: string;
  };
  category: {
    vi: string;
    en: string;
  };
  origin: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  image: string;
}

const Products = ({ language }: ProductsProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const translations = {
    pageTitle: {
      vi: 'SẢN PHẨM',
      en: 'PRODUCTS'
    },
    heroTitle: {
      vi: 'DANH MỤC SẢN PHẨM',
      en: 'PRODUCT CATEGORIES'
    },
    searchPlaceholder: {
      vi: 'Tìm kiếm sản phẩm...',
      en: 'Search products...'
    },
    allCategories: {
      vi: 'Tất cả',
      en: 'All'
    },
    origin: {
      vi: 'Xuất xứ',
      en: 'Origin'
    },
    viewDetails: {
      vi: 'Xem chi tiết',
      en: 'View details'
    },
    noProducts: {
      vi: 'Không tìm thấy sản phẩm phù hợp.',
      en: 'No matching products found.'
    }
  };

  const categories = [
    { vi: 'Trái cây tươi', en: 'Fresh Fruits' },
    { vi: 'Trái cây đông lạnh', en: 'Frozen Fruits' },
    { vi: 'Nước ép trái cây', en: 'Fruit Juice' },
    { vi: 'Trái cây sấy khô', en: 'Dried Fruits' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: { vi: 'Táo Envy', en: 'Envy Apple' },
      category: { vi: 'Trái cây tươi', en: 'Fresh Fruits' },
      origin: { vi: 'New Zealand', en: 'New Zealand' },
      description: {
        vi: 'Táo Envy có vỏ màu đỏ đậm, thịt giòn, ngọt và thơm. Đây là giống táo cao cấp được trồng tại New Zealand.',
        en: 'Envy apples have a deep red skin, crisp flesh, sweet and aromatic. This is a premium apple variety grown in New Zealand.'
      },
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: { vi: 'Cam Valencia', en: 'Valencia Orange' },
      category: { vi: 'Trái cây tươi', en: 'Fresh Fruits' },
      origin: { vi: 'Úc', en: 'Australia' },
      description: {
        vi: 'Cam Valencia có vỏ mỏng, màu vàng cam đẹp mắt, nhiều nước và vị ngọt thanh. Đây là loại cam phổ biến nhất thế giới.',
        en: 'Valencia oranges have thin skin, beautiful orange-yellow color, juicy and sweet taste. This is the most popular orange variety in the world.'
      },
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    },
    {
      id: 3,
      name: { vi: 'Nho xanh không hạt', en: 'Seedless Green Grapes' },
      category: { vi: 'Trái cây tươi', en: 'Fresh Fruits' },
      origin: { vi: 'Mỹ', en: 'USA' },
      description: {
        vi: 'Nho xanh không hạt có vị ngọt đậm đà, thịt giòn và mọng nước. Đây là loại nho được ưa chuộng trên toàn thế giới.',
        en: 'Seedless green grapes have a rich sweet taste, crisp and juicy flesh. This is a popular grape variety worldwide.'
      },
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
    },
    {
      id: 4,
      name: { vi: 'Dâu tây đông lạnh', en: 'Frozen Strawberries' },
      category: { vi: 'Trái cây đông lạnh', en: 'Frozen Fruits' },
      origin: { vi: 'Mỹ', en: 'USA' },
      description: {
        vi: 'Dâu tây đông lạnh giữ nguyên hương vị và giá trị dinh dưỡng của dâu tây tươi, tiện lợi cho việc chế biến sinh tố và các món tráng miệng.',
        en: 'Frozen strawberries retain the flavor and nutritional value of fresh strawberries, convenient for making smoothies and desserts.'
      },
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      name: { vi: 'Xoài đông lạnh', en: 'Frozen Mango' },
      category: { vi: 'Trái cây đông lạnh', en: 'Frozen Fruits' },
      origin: { vi: 'Thái Lan', en: 'Thailand' },
      description: {
        vi: 'Xoài đông lạnh được cắt thành từng miếng vừa ăn, giữ nguyên vị ngọt và hương thơm đặc trưng của xoài tươi.',
        en: 'Frozen mango is cut into bite-sized pieces, preserving the sweetness and distinctive aroma of fresh mango.'
      },
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 6,
      name: { vi: 'Nước ép cam tươi', en: 'Fresh Orange Juice' },
      category: { vi: 'Nước ép trái cây', en: 'Fruit Juice' },
      origin: { vi: 'Việt Nam', en: 'Vietnam' },
      description: {
        vi: 'Nước ép cam tươi 100% không đường, không chất bảo quản, giàu vitamin C và các dưỡng chất tự nhiên.',
        en: '100% fresh orange juice with no added sugar, no preservatives, rich in vitamin C and natural nutrients.'
      },
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 7,
      name: { vi: 'Nước ép táo', en: 'Apple Juice' },
      category: { vi: 'Nước ép trái cây', en: 'Fruit Juice' },
      origin: { vi: 'Đức', en: 'Germany' },
      description: {
        vi: 'Nước ép táo 100% tự nhiên, không đường, không chất bảo quản, giữ nguyên hương vị tươi ngon của táo.',
        en: '100% natural apple juice, no added sugar, no preservatives, preserving the fresh taste of apples.'
      },
      image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 8,
      name: { vi: 'Chuối sấy khô', en: 'Dried Bananas' },
      category: { vi: 'Trái cây sấy khô', en: 'Dried Fruits' },
      origin: { vi: 'Philippines', en: 'Philippines' },
      description: {
        vi: 'Chuối sấy khô giữ nguyên hương vị tự nhiên, không đường, không chất bảo quản, là món ăn vặt lành mạnh và bổ dưỡng.',
        en: 'Dried bananas preserve the natural flavor, no added sugar, no preservatives, a healthy and nutritious snack.'
      },
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = !activeCategory || product.category[language] === activeCategory;
    const matchesSearch = product.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {translations.pageTitle[language]}
          </h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl max-w-2xl">
            {translations.heroTitle[language]}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder={translations.searchPlaceholder[language]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeCategory === null
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(null)}
                >
                  {translations.allCategories[language]}
                </button>
                
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-md ${
                      activeCategory === category[language]
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category[language])}
                  >
                    {category[language]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{product.name[language]}</h3>
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded">
                        {product.category[language]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      <span className="font-medium">{translations.origin[language]}:</span> {product.origin[language]}
                    </p>
                    <p className="text-gray-700 mb-4">{product.description[language]}</p>
                    <button className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                      {translations.viewDetails[language]}
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
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{translations.noProducts[language]}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
