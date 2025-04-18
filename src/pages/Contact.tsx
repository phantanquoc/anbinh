import { useState } from 'react';

interface ContactProps {
  language: 'vi' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const translations = {
    pageTitle: {
      vi: 'LIÊN HỆ',
      en: 'CONTACT US'
    },
    heroTitle: {
      vi: 'LIÊN HỆ VỚI CHÚNG TÔI',
      en: 'GET IN TOUCH'
    },
    contactInfo: {
      title: {
        vi: 'THÔNG TIN LIÊN HỆ',
        en: 'CONTACT INFORMATION'
      },
      address: {
        label: {
          vi: 'Địa chỉ',
          en: 'Address'
        },
        value: {
          vi: '123 Đường Trái Cây, Quận 1, TP. Hồ Chí Minh',
          en: '123 Fruit Street, District 1, Ho Chi Minh City'
        }
      },
      phone: {
        label: {
          vi: 'Điện thoại',
          en: 'Phone'
        },
        value: '+84 28 1234 5678'
      },
      email: {
        label: {
          vi: 'Email',
          en: 'Email'
        },
        value: 'info@freshfruits.com'
      },
      workingHours: {
        label: {
          vi: 'Giờ làm việc',
          en: 'Working Hours'
        },
        value: {
          vi: 'Thứ Hai - Thứ Sáu: 8:00 - 17:00',
          en: 'Monday - Friday: 8:00 AM - 5:00 PM'
        }
      }
    },
    form: {
      title: {
        vi: 'GỬI TIN NHẮN',
        en: 'SEND A MESSAGE'
      },
      name: {
        label: {
          vi: 'Họ và tên',
          en: 'Full Name'
        },
        placeholder: {
          vi: 'Nhập họ và tên của bạn',
          en: 'Enter your full name'
        }
      },
      email: {
        label: {
          vi: 'Email',
          en: 'Email'
        },
        placeholder: {
          vi: 'Nhập địa chỉ email của bạn',
          en: 'Enter your email address'
        }
      },
      phone: {
        label: {
          vi: 'Số điện thoại',
          en: 'Phone Number'
        },
        placeholder: {
          vi: 'Nhập số điện thoại của bạn',
          en: 'Enter your phone number'
        }
      },
      subject: {
        label: {
          vi: 'Tiêu đề',
          en: 'Subject'
        },
        placeholder: {
          vi: 'Nhập tiêu đề tin nhắn',
          en: 'Enter message subject'
        }
      },
      message: {
        label: {
          vi: 'Nội dung tin nhắn',
          en: 'Message'
        },
        placeholder: {
          vi: 'Nhập nội dung tin nhắn của bạn',
          en: 'Enter your message'
        }
      },
      submit: {
        vi: 'Gửi tin nhắn',
        en: 'Send Message'
      },
      success: {
        vi: 'Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.',
        en: 'Your message has been sent successfully. We will contact you as soon as possible.'
      }
    },
    locations: {
      title: {
        vi: 'CÁC CHI NHÁNH',
        en: 'OUR LOCATIONS'
      },
      offices: [
        {
          name: {
            vi: 'Trụ sở chính',
            en: 'Headquarters'
          },
          address: {
            vi: '123 Đường Trái Cây, Quận 1, TP. Hồ Chí Minh',
            en: '123 Fruit Street, District 1, Ho Chi Minh City'
          },
          phone: '+84 28 1234 5678',
          email: 'hcm@freshfruits.com'
        },
        {
          name: {
            vi: 'Chi nhánh Hà Nội',
            en: 'Hanoi Branch'
          },
          address: {
            vi: '456 Đường Trái Cây, Quận Cầu Giấy, Hà Nội',
            en: '456 Fruit Street, Cau Giay District, Hanoi'
          },
          phone: '+84 24 8765 4321',
          email: 'hanoi@freshfruits.com'
        },
        {
          name: {
            vi: 'Chi nhánh Đà Nẵng',
            en: 'Da Nang Branch'
          },
          address: {
            vi: '789 Đường Trái Cây, Quận Hải Châu, Đà Nẵng',
            en: '789 Fruit Street, Hai Chau District, Da Nang'
          },
          phone: '+84 236 9876 5432',
          email: 'danang@freshfruits.com'
        }
      ]
    },
    faq: {
      title: {
        vi: 'CÂU HỎI THƯỜNG GẶP',
        en: 'FREQUENTLY ASKED QUESTIONS'
      },
      questions: [
        {
          question: {
            vi: 'Làm thế nào để đặt hàng trái cây tươi?',
            en: 'How can I order fresh fruits?'
          },
          answer: {
            vi: 'Bạn có thể đặt hàng trực tiếp qua website của chúng tôi, gọi điện thoại đến số hotline hoặc gửi email đến địa chỉ sales@freshfruits.com.',
            en: 'You can place an order directly through our website, call our hotline, or send an email to sales@freshfruits.com.'
          }
        },
        {
          question: {
            vi: 'Khu vực nào được giao hàng miễn phí?',
            en: 'Which areas qualify for free delivery?'
          },
          answer: {
            vi: 'Chúng tôi cung cấp giao hàng miễn phí cho các đơn hàng trên 500.000 VNĐ trong khu vực nội thành TP. Hồ Chí Minh, Hà Nội và Đà Nẵng.',
            en: 'We provide free delivery for orders over 500,000 VND in the urban areas of Ho Chi Minh City, Hanoi, and Da Nang.'
          }
        },
        {
          question: {
            vi: 'Làm thế nào để trở thành đại lý phân phối của FreshFruits?',
            en: 'How can I become a distributor for FreshFruits?'
          },
          answer: {
            vi: 'Để trở thành đại lý phân phối, vui lòng gửi thông tin công ty của bạn đến email partner@freshfruits.com. Đội ngũ kinh doanh của chúng tôi sẽ liên hệ với bạn trong vòng 48 giờ.',
            en: 'To become a distributor, please send your company information to partner@freshfruits.com. Our business team will contact you within 48 hours.'
          }
        },
        {
          question: {
            vi: 'Các sản phẩm của FreshFruits có chứng nhận hữu cơ không?',
            en: 'Are FreshFruits products organically certified?'
          },
          answer: {
            vi: 'Một số sản phẩm của chúng tôi được chứng nhận hữu cơ. Bạn có thể xem thông tin chi tiết về chứng nhận trên trang sản phẩm hoặc liên hệ với chúng tôi để biết thêm thông tin.',
            en: 'Some of our products are organically certified. You can view detailed certification information on the product page or contact us for more information.'
          }
        }
      ]
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)' }}>
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

      {/* Contact Information and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-red-600">
                  {translations.contactInfo.title[language]}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{translations.contactInfo.address.label[language]}</h3>
                      <p className="text-gray-600">{translations.contactInfo.address.value[language]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{translations.contactInfo.phone.label[language]}</h3>
                      <p className="text-gray-600">{translations.contactInfo.phone.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{translations.contactInfo.email.label[language]}</h3>
                      <p className="text-gray-600">{translations.contactInfo.email.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{translations.contactInfo.workingHours.label[language]}</h3>
                      <p className="text-gray-600">{translations.contactInfo.workingHours.value[language]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-red-600">
                  {translations.form.title[language]}
                </h2>
                
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p>{translations.form.success[language]}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {translations.form.name.label[language]}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={translations.form.name.placeholder[language]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {translations.form.email.label[language]}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={translations.form.email.placeholder[language]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        {translations.form.phone.label[language]}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={translations.form.phone.placeholder[language]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        {translations.form.subject.label[language]}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={translations.form.subject.placeholder[language]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {translations.form.message.label[language]}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={translations.form.message.placeholder[language]}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                  >
                    {translations.form.submit[language]}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.locations.title[language]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations.locations.offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{office.name[language]}</h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{office.address[language]}</span>
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            {translations.faq.title[language]}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {translations.faq.questions.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-lg flex justify-between items-center">
                    {faq.question[language]}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer[language]}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
