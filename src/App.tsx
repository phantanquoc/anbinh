import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Communication from './pages/Communication';
import Contact from './pages/Contact';

function App() {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/products" element={<Products language={language} />} />
            <Route path="/communication" element={<Communication language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
