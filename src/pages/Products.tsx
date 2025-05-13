import { useState } from 'react';
import { Search, Filter, ChevronDown, Sun, Moon } from 'lucide-react';
import ReactPlayer from 'react-player';
import { useTheme } from '../context/ThemeContext';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const products = [
    {
      id: 1,
      name: "Poulets de Chair",
      description: "Poulets élevés en plein air, nourris aux céréales de qualité",
      imageUrl: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      price: "4500 FCFA/kg",
      category: "volailles"
    },
    {
      id: 2,
      name: "Œufs de Poules Pondeuses",
      description: "Œufs frais de poules élevées dans des conditions optimales",
      imageUrl: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg",
      price: "3500 FCFA/plateau",
      category: "volailles"
    },
    {
      id: 3,
      name: "Poisson Tilapia",
      description: "Poissons d'eau douce élevés dans nos bassins",
      imageUrl: "https://images.pexels.com/photos/2110928/pexels-photo-2110928.jpeg",
      price: "2500 FCFA/kg",
      category: "poissons"
    },
    {
      id: 4,
      name: "Escargots Géants",
      description: "Escargots Achatina élevés dans nos parcs",
      imageUrl: "https://images.pexels.com/photos/13010647/pexels-photo-13010647.jpeg",
      price: "5000 FCFA/kg",
      category: "escargots"
    },
    {
      id: 5,
      name: "Porc",
      description: "Viande de porc de qualité supérieure",
      imageUrl: "https://images.pexels.com/photos/6107573/pexels-photo-6107573.jpeg",
      price: "3800 FCFA/kg",
      category: "porcs"
    },
    {
      id: 6,
      name: "Lapins",
      description: "Lapins élevés dans le respect du bien-être animal",
      imageUrl: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg",
      price: "6000 FCFA/unité",
      category: "lapins"
    }
  ];

  const farmVideos = [
    {
      title: "Nos installations avicoles",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnail: "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg"
    },
    {
      title: "Élevage de poissons",
      url: "https://www.youtube.com/watch?v=example2",
      thumbnail: "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg"
    }
  ];
  
  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'volailles', name: 'Volailles' },
    { id: 'poissons', name: 'Poissons' },
    { id: 'escargots', name: 'Escargots' },
    { id: 'porcs', name: 'Porcs' },
    { id: 'lapins', name: 'Lapins' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* En-tête */}
      <section className={`pt-16 pb-20 ${theme === 'dark' ? 'bg-green-800' : 'bg-green-600'} text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn font-playfair">
              Nos Produits
            </h1>
            <p className="text-xl leading-relaxed animate-fadeIn font-poppins">
              Découvrez notre gamme de produits fermiers de qualité supérieure
            </p>
          </div>
        </div>
      </section>
      
      {/* Filtres et recherche */}
      <section className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md sticky top-0 z-30`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              
              <div className="relative flex-1 md:flex-none">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className={`pl-10 pr-4 py-2 w-full md:w-80 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="hidden md:flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-green-600 text-white' 
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vidéos de la ferme */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-playfair">
            Découvrez Notre Ferme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {farmVideos.map((video, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    light={video.thumbnail}
                    controls
                  />
                </div>
                <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-xl font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Liste des produits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="relative h-64">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-300">
                      Commander
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">{product.price}</span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      En stock
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;