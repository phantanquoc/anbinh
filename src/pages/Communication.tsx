import { useState } from 'react';

interface CommunicationProps {
  language: 'vi' | 'en';
}

interface NewsItem {
  id: number;
  title: {
    vi: string;
    en: string;
  };
  summary: {
    vi: string;
    en: string;
  };
  date: string;
  image: string;
  category: {
    vi: string;
    en: string;
  };
}

const Communication = ({ language }: CommunicationProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const translations = {
    pageTitle: {
      vi: 'TRUYỀN THÔNG',
      en: 'COMMUNICATION'
    },
    heroTitle: {
      vi: 'TIN TỨC & SỰ KIỆN',
      en: 'NEWS & EVENTS'
    },
    allCategories: {
      vi: 'Tất cả',
      en: 'All'
    },
    readMore: {
      vi: 'Đọc thêm',
      en: 'Read more'
    },
    noNews: {
      vi: 'Không có tin tức nào trong danh mục này.',
      en: 'No news items in this category.'
    },
    videoTitle: {
      vi: 'VIDEO',
      en: 'VIDEOS'
    },
    downloadTitle: {
      vi: 'TÀI LIỆU',
      en: 'DOCUMENTS'
    },
    downloadButton: {
      vi: 'Tải xuống',
      en: 'Download'
    }
  };

  const categories = [
    { vi: 'Tin tức', en: 'News' },
    { vi: 'Sự kiện', en: 'Events' },
    { vi: 'Báo chí', en: 'Press' }
  ];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: {
        vi: 'FreshFruits Group mở rộng thị trường xuất khẩu sang Châu Âu',
        en: 'FreshFruits Group expands export market to Europe'
      },
      summary: {
        vi: 'FreshFruits Group vừa ký kết thành công hợp đồng xuất khẩu trái cây tươi sang thị trường Châu Âu, đánh dấu bước tiến quan trọng trong chiến lược mở rộng thị trường quốc tế.',
        en: 'FreshFruits Group has successfully signed a contract to export fresh fruits to the European market, marking an important step in its international market expansion strategy.'
      },
      date: '2023-10-15',
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: { vi: 'Tin tức', en: 'News' }
    },
    {
      id: 2,
      title: {
        vi: 'Hội nghị khách hàng thường niên 2023',
        en: 'Annual Customer Conference 2023'
      },
      summary: {
        vi: 'FreshFruits Group tổ chức thành công Hội nghị khách hàng thường niên 2023 với sự tham gia của hơn 200 đối tác và khách hàng từ khắp nơi trên thế giới.',
        en: 'FreshFruits Group successfully organized the Annual Customer Conference 2023 with the participation of more than 200 partners and customers from around the world.'
      },
      date: '2023-09-20',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: { vi: 'Sự kiện', en: 'Events' }
    },
    {
      id: 3,
      title: {
        vi: 'FreshFruits Group được vinh danh "Doanh nghiệp xuất khẩu tiêu biểu" năm 2023',
        en: 'FreshFruits Group honored as "Outstanding Export Enterprise" in 2023'
      },
      summary: {
        vi: 'FreshFruits Group vinh dự nhận giải thưởng "Doanh nghiệp xuất khẩu tiêu biểu" năm 2023 do Bộ Công Thương trao tặng, ghi nhận những đóng góp của công ty trong lĩnh vực xuất khẩu nông sản.',
        en: 'FreshFruits Group was honored to receive the "Outstanding Export Enterprise" award in 2023 from the Ministry of Industry and Trade, recognizing the company\'s contributions in the field of agricultural exports.'
      },
      date: '2023-08-05',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: { vi: 'Báo chí', en: 'Press' }
    },
    {
      id: 4,
      title: {
        vi: 'FreshFruits Group ra mắt dòng sản phẩm nước ép trái cây mới',
        en: 'FreshFruits Group launches new fruit juice product line'
      },
      summary: {
        vi: 'FreshFruits Group vừa chính thức ra mắt dòng sản phẩm nước ép trái cây mới với công nghệ bảo quản tiên tiến, giúp giữ nguyên hương vị và dưỡng chất tự nhiên của trái cây.',
        en: 'FreshFruits Group has officially launched a new fruit juice product line with advanced preservation technology, helping to preserve the natural flavor and nutrients of fruits.'
      },
      date: '2023-07-10',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: { vi: 'Tin tức', en: 'News' }
    },
    {
      id: 5,
      title: {
        vi: 'Hội chợ trái cây quốc tế 2023',
        en: 'International Fruit Fair 2023'
      },
      summary: {
        vi: 'FreshFruits Group tham gia Hội chợ trái cây quốc tế 2023 tại Singapore, giới thiệu các sản phẩm trái cây tươi và chế biến chất lượng cao đến với khách hàng quốc tế.',
        en: 'FreshFruits Group participated in the International Fruit Fair 2023 in Singapore, introducing high-quality fresh and processed fruit products to international customers.'
      },
      date: '2023-06-15',
      image: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      category: { vi: 'Sự kiện', en: 'Events' }
    },
    {
      id: 6,
      title: {
        vi: 'FreshFruits Group đạt chứng nhận Global G.A.P',
        en: 'FreshFruits Group achieves Global G.A.P certification'
      },
      summary: {
        vi: 'FreshFruits Group vừa được cấp chứng nhận Global G.A.P cho các vùng trồng trái cây, khẳng định cam kết của công ty về an toàn thực phẩm và phát triển bền vững.',
        en: 'FreshFruits Group has been granted Global G.A.P certification for its fruit growing areas, affirming the company\'s commitment to food safety and sustainable development.'
      },
      date: '2023-05-20',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: { vi: 'Báo chí', en: 'Press' }
    }
  ];

  const videos = [
    {
      id: 1,
      title: {
        vi: 'Quy trình sản xuất nước ép trái cây',
        en: 'Fruit juice production process'
      },
      thumbnail: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      url: '#'
    },
    {
      id: 2,
      title: {
        vi: 'Tham quan nhà máy FreshFruits',
        en: 'FreshFruits factory tour'
      },
      thumbnail: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: '#'
    },
    {
      id: 3,
      title: {
        vi: 'Vùng trồng trái cây sạch',
        en: 'Clean fruit growing areas'
      },
      thumbnail: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: '#'
    }
  ];

  const documents = [
    {
      id: 1,
      title: {
        vi: 'Báo cáo thường niên 2022',
        en: 'Annual Report 2022'
      },
      type: 'PDF',
      size: '5.2 MB',
      url: '#'
    },
    {
      id: 2,
      title: {
        vi: 'Catalogue sản phẩm 2023',
        en: 'Product Catalogue 2023'
      },
      type: 'PDF',
      size: '8.7 MB',
      url: '#'
    },
    {
      id: 3,
      title: {
        vi: 'Chứng nhận chất lượng',
        en: 'Quality Certificates'
      },
      type: 'PDF',
      size: '3.1 MB',
      url: '#'
    }
  ];

  const filteredNews = activeCategory
    ? newsItems.filter(item => item.category[language] === activeCategory)
    : newsItems;

  // Format date to locale string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)' }}>
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

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
          
          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded">
                        {item.category[language]}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title[language]}</h3>
                    <p className="text-gray-700 mb-4">{item.summary[language]}</p>
                    <a href="#" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                      {translations.readMore[language]}
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
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{translations.noNews[language]}</p>
            </div>
          )}
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.videoTitle[language]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 bg-opacity-80 rounded-full p-3 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{video.title[language]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.downloadTitle[language]}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{doc.title[language]}</h3>
                  <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                </div>
                <a
                  href={doc.url}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 inline-flex items-center"
                >
                  {translations.downloadButton[language]}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communication;
