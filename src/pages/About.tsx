import { Link } from 'react-router-dom';

interface AboutProps {
  language: 'vi' | 'en';
}

const About = ({ language }: AboutProps) => {
  const translations = {
    pageTitle: {
      vi: 'GIỚI THIỆU',
      en: 'ABOUT US'
    },
    heroTitle: {
      vi: 'CHÚNG TÔI LÀ AI',
      en: 'WHO WE ARE'
    },
    heroContent: {
      vi: 'FreshFruits Group - Nhà cung cấp trái cây tươi quốc tế hàng đầu',
      en: 'FreshFruits Group - Leading international fresh fruit supplier'
    },
    ourStory: {
      title: {
        vi: 'CÂU CHUYỆN CỦA CHÚNG TÔI',
        en: 'OUR STORY'
      },
      content: {
        vi: 'FreshFruits Group được thành lập vào năm 1995, bắt đầu từ một cửa hàng nhỏ chuyên cung cấp trái cây nhập khẩu tại Thành phố Hồ Chí Minh. Trải qua hơn 25 năm phát triển, chúng tôi đã trở thành một trong những nhà nhập khẩu và phân phối trái cây tươi lớn nhất Việt Nam.\n\nVới mạng lưới đối tác rộng khắp các quốc gia như Mỹ, Úc, New Zealand, Chile, Nam Phi và các nước Châu Âu, chúng tôi tự hào mang đến cho người tiêu dùng Việt Nam những loại trái cây tươi ngon, chất lượng cao và an toàn nhất.',
        en: 'FreshFruits Group was established in 1995, starting as a small store specializing in imported fruits in Ho Chi Minh City. Over more than 25 years of development, we have become one of the largest importers and distributors of fresh fruits in Vietnam.\n\nWith a network of partners across countries such as the USA, Australia, New Zealand, Chile, South Africa, and European countries, we are proud to bring Vietnamese consumers the freshest, highest quality, and safest fruits.'
      }
    },
    mission: {
      title: {
        vi: 'SỨ MỆNH CỦA CHÚNG TÔI',
        en: 'OUR MISSION'
      },
      content: {
        vi: 'Sứ mệnh của FreshFruits Group là mang đến những sản phẩm trái cây tươi ngon, chất lượng cao và an toàn cho sức khỏe người tiêu dùng. Chúng tôi cam kết:\n\n- Cung cấp trái cây tươi ngon nhất từ các vùng trồng nổi tiếng trên thế giới\n- Đảm bảo quy trình vận chuyển, bảo quản đạt tiêu chuẩn quốc tế\n- Kiểm soát chất lượng nghiêm ngặt từ nông trại đến tay người tiêu dùng\n- Phát triển bền vững và bảo vệ môi trường',
        en: 'The mission of FreshFruits Group is to bring fresh, high-quality, and health-safe fruit products to consumers. We are committed to:\n\n- Providing the freshest fruits from famous growing regions around the world\n- Ensuring transportation and preservation processes meet international standards\n- Strict quality control from farm to consumer\n- Sustainable development and environmental protection'
      }
    },
    values: {
      title: {
        vi: 'GIÁ TRỊ CỐT LÕI',
        en: 'CORE VALUES'
      },
      values: [
        {
          title: { vi: 'Chất lượng', en: 'Quality' },
          description: {
            vi: 'Chúng tôi luôn đặt chất lượng sản phẩm lên hàng đầu, đảm bảo mỗi trái cây đều đạt tiêu chuẩn cao nhất.',
            en: 'We always put product quality first, ensuring each fruit meets the highest standards.'
          },
          icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
        },
        {
          title: { vi: 'Đổi mới', en: 'Innovation' },
          description: {
            vi: 'Chúng tôi không ngừng tìm kiếm những giải pháp mới để cải thiện sản phẩm và dịch vụ.',
            en: 'We constantly seek new solutions to improve our products and services.'
          },
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: { vi: 'Bền vững', en: 'Sustainability' },
          description: {
            vi: 'Chúng tôi cam kết phát triển bền vững và bảo vệ môi trường trong mọi hoạt động kinh doanh.',
            en: 'We are committed to sustainable development and environmental protection in all business activities.'
          },
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        },
        {
          title: { vi: 'Hợp tác', en: 'Collaboration' },
          description: {
            vi: 'Chúng tôi xây dựng mối quan hệ đối tác bền vững với nông dân, nhà cung cấp và khách hàng.',
            en: 'We build sustainable partnerships with farmers, suppliers, and customers.'
          },
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        }
      ]
    },
    team: {
      title: {
        vi: 'ĐỘI NGŨ LÃNH ĐẠO',
        en: 'LEADERSHIP TEAM'
      },
      members: [
        {
          name: 'Nguyễn Văn A',
          position: {
            vi: 'Tổng Giám đốc',
            en: 'Chief Executive Officer'
          },
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        {
          name: 'Trần Thị B',
          position: {
            vi: 'Giám đốc Vận hành',
            en: 'Chief Operations Officer'
          },
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
        },
        {
          name: 'Lê Văn C',
          position: {
            vi: 'Giám đốc Tài chính',
            en: 'Chief Financial Officer'
          },
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        {
          name: 'Phạm Thị D',
          position: {
            vi: 'Giám đốc Marketing',
            en: 'Chief Marketing Officer'
          },
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        }
      ]
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {translations.pageTitle[language]}
          </h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            {translations.heroTitle[language]}
          </h2>
          <p className="text-xl max-w-2xl">
            {translations.heroContent[language]}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-600">
                {translations.ourStory.title[language]}
              </h2>
              <div className="text-gray-700 space-y-4">
                {translations.ourStory.content[language].split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.mission.title[language]}
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-gray-700 space-y-4">
              {translations.mission.content[language].split('\n\n').map((paragraph, index) => (
                <div key={index}>
                  {paragraph.includes('-') ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-lg leading-relaxed">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-lg leading-relaxed">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.values.title[language]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations.values.values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title[language]}</h3>
                <p className="text-gray-600">{value.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.team.title[language]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations.team.members.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
