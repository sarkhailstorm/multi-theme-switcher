import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen transition-all duration-500 ${theme} flex`}>

      {/* Conditionally render Sidebar or Header based on theme */}
      {theme === 'theme2' ? <Sidebar /> : <Header />}
      <div className={`flex-1 p-4 ${theme === 'theme2' ? 'pt-4' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;