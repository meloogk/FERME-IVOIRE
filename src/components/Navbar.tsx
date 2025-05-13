import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <nav className={`sticky top-0 z-50 shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2 font-bold text-xl md:text-2xl">
            <Leaf className={`h-7 w-7 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            <span className={`font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>FERM'IVOIRE</span>
          </NavLink>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:bg-opacity-80 transition-colors duration-300`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={({isActive}) => 
                `font-poppins hover:text-green-500 transition duration-300 ${isActive ? 'font-bold text-green-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`
              }>
                ACCUEIL
              </NavLink>
              <NavLink to="/products" className={({isActive}) => 
                `font-poppins hover:text-green-500 transition duration-300 ${isActive ? 'font-bold text-green-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`
              }>
                PRODUITS
              </NavLink>
              <NavLink to="/about" className={({isActive}) => 
                `font-poppins hover:text-green-500 transition duration-300 ${isActive ? 'font-bold text-green-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`
              }>
                A PROPOS
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => 
                `font-poppins hover:text-green-500 transition duration-300 ${isActive ? 'font-bold text-green-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`
              }>
                CONTACT
              </NavLink>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden focus:outline-none"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} px-4 py-3 shadow-lg transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `py-2 px-4 block rounded transition duration-300 ${
                  isActive 
                    ? 'bg-green-600 text-white' 
                    : isDark 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-900 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              ACCUEIL
            </NavLink>
            <NavLink 
              to="/products" 
              className={({isActive}) => 
                `py-2 px-4 block rounded transition duration-300 ${
                  isActive 
                    ? 'bg-green-600 text-white' 
                    : isDark 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-900 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              PRODUITS
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `py-2 px-4 block rounded transition duration-300 ${
                  isActive 
                    ? 'bg-green-600 text-white' 
                    : isDark 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-900 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              A PROPOS
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `py-2 px-4 block rounded transition duration-300 ${
                  isActive 
                    ? 'bg-green-600 text-white' 
                    : isDark 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-900 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;