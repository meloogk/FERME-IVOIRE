import { NavLink } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Mock data for products
  const featuredProducts = [
    {
      id: 1,
      name: "Oeufs frais biologiques",
      description: "Des œufs frais provenant de poules élevées en plein air",
      imageUrl: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg",
      price: "3500 FCFA"
    },
    {
      id: 2,
      name: "Légumes bio de saison",
      description: "Légumes cultivés sans pesticides, récoltés à maturité",
      imageUrl: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg",
      price: "2800 FCFA"
    },
    {
      id: 3,
      name: "Lait frais entier",
      description: "Lait frais non pasteurisé provenant de nos vaches nourries à l'herbe",
      imageUrl: "https://images.pexels.com/photos/2064129/pexels-photo-2064129.jpeg",
      price: "1200 FCFA"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-green-600 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg')",
              opacity: 0.4
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
             Bienvenue à FERM'IVOIRE, où qualité et savoir-faire se rencontrent !
            </h1>
            <p className="text-xl text-white mb-8">
              Des produits fermiers frais et biologiques, directement du producteur au consommateur,Découvrez nos volailles, poissons, porcs, lapins et escargots élevés avec passion pour une alimentation saine et savoureuse.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/products" 
                className="bg-white text-green-600 hover:bg-green-100 px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Découvrir nos produits
              </NavLink>
              <NavLink 
                to="/contact" 
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1"
              >
                Nous contacter
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">Notre mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Chez <strong>FERM'IVOIRE</strong>, notre mission est simple : 
              </p>
              <ul className="space-y-3">
                {[
                  "Vous offrir des produits fermiers de qualité supérieure",
                  "Promouvoir une alimentation saine et locale",
                  "Soutien à l'économie locale et aux pratiques durables",
                  "Assurer une traçabilité totale, de l’élevage à l’assiette<",
                  "Transparence totale sur nos méthodes de production"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <NavLink to="/about" className="text-green-600 font-semibold flex items-center hover:text-green-700 transition duration-300">
                  En savoir plus sur notre histoire
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
                alt="Ferme biologique" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Produits phares */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Nos produits phares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink 
              to="/products" 
              className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
            >
              Voir tous nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Témoignages */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Kouamé Assouan",
                role: "Chef cuisinier",
                quote: "Les produits de FERM'IVOIRE ont transformé ma cuisine. La fraîcheur et la qualité sont incomparables !",
                avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
              },
              {
                name: "Marie N'Guessan",
                role: "Mère de famille",
                quote: "Je ne fais confiance qu'à FERM'IVOIRE pour l'alimentation de mes enfants. Des produits sains et délicieux.",
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              },
              {
                name: "Ibrahim Koné",
                role: "Restaurateur",
                quote: "La régularité dans la qualité et la livraison fait de FERM'IVOIRE mon partenaire idéal depuis 3 ans.",
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;