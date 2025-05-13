import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`${isDark ? 'bg-gray-800' : 'bg-green-600'} text-white pt-12 pb-6 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="mb-6">
            <h4 className="font-playfair font-bold text-xl mb-4">À propos de nous</h4>
            <p className={`${isDark ? 'text-gray-300' : 'text-green-50'} font-poppins`}>
              Chez FERM'IVOIRE, nous nous engageons à offrir des produits fermiers 
              de la plus haute qualité, tout en respectant des pratiques d'élevage 
              responsables et durables.
            </p>
          </div>

          {/* Liens importants */}
          <div className="mb-6">
            <h4 className="font-playfair font-bold text-xl mb-4">Liens utiles</h4>
            <ul className="space-y-2 font-poppins">
              <li>
                <NavLink 
                  to="/" 
                  className={`${isDark ? 'text-gray-300' : 'text-green-50'} hover:text-white transition duration-300`}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/products" 
                  className={`${isDark ? 'text-gray-300' : 'text-green-50'} hover:text-white transition duration-300`}
                >
                  Produits
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={`${isDark ? 'text-gray-300' : 'text-green-50'} hover:text-white transition duration-300`}
                >
                  A propos de nous
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={`${isDark ? 'text-gray-300' : 'text-green-50'} hover:text-white transition duration-300`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <h4 className="font-playfair font-bold text-xl mb-4">Contactez-nous</h4>
            <div className="space-y-2 font-poppins">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Rue de la Ferme, Abidjan, Côte d'Ivoire</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+225 07 07 55 01 01</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@fermivoire.com</span>
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="mb-6">
            <h4 className="font-playfair font-bold text-xl mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={`${isDark ? 'text-gray-300' : 'text-white'} hover:text-green-200 transition-transform duration-300 hover:scale-110`}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className={`${isDark ? 'text-gray-300' : 'text-white'} hover:text-green-200 transition-transform duration-300 hover:scale-110`}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className={`${isDark ? 'text-gray-300' : 'text-white'} hover:text-green-200 transition-transform duration-300 hover:scale-110`}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <hr className={`my-6 ${isDark ? 'border-gray-700' : 'border-green-500'}`} />
        
        {/* Copyright */}
        <div className="text-center font-poppins">
          <p>© {new Date().getFullYear()} FERM'IVOIRE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;