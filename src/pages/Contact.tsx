import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const Contact = () => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      question: "Comment puis-je visiter la ferme ?",
      answer: "Nous organisons des visites guidées sur rendez-vous. Contactez-nous pour planifier votre visite.",
      isOpen: false
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Notre ferme est ouverte du lundi au vendredi de 8h à 18h et le samedi de 9h à 14h.",
      isOpen: false
    },
    {
      question: "Proposez-vous des produits bio ?",
      answer: "Oui, tous nos produits sont certifiés bio et cultivés selon des méthodes durables.",
      isOpen: false
    },
    {
      question: "Comment devenir partenaire ?",
      answer: "Cliquez sur le bouton \"Devenir partenaire\" ci-dessus pour remplir le formulaire de partenariat.",
      isOpen: false
    }
  ]);
  
  const toggleFaqItem = (index: number) => {
    setFaqItems(faqItems.map((item, i) => 
      i === index ? { ...item, isOpen: !item.isOpen } : item
    ));
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* En-tête */}
      <section className="pt-16 pb-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Contactez-nous
            </h1>
            <p className="text-xl leading-relaxed animate-fadeIn">
              Nous sommes à votre écoute ! N'hésitez pas à nous contacter pour toute question ou collaboration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Section Contact */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-green-600 mb-6">Envoyez-nous un message</h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Votre nom</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Entrez votre nom"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Entrez votre email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Votre téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Entrez votre numéro de téléphone"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Rédigez votre message ici..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md"
                  >
                    Envoyer le message
                  </button>
                </form>
                
                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-green-600 mb-6">Questions fréquentes</h3>
                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                          onClick={() => toggleFaqItem(index)}
                        >
                          <span className="font-medium text-gray-800">{item.question}</span>
                          {item.isOpen ? 
                            <ChevronDown className="h-5 w-5 text-green-600" /> : 
                            <ChevronRight className="h-5 w-5 text-green-600" />
                          }
                        </button>
                        {item.isOpen && (
                          <div className="px-4 pb-4 text-gray-600">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-50">
                <div className="p-8">
                  <div className="flex justify-end mb-8">
                    <button className="bg-amber-500 text-white py-3 px-6 rounded-lg flex items-center hover:bg-amber-600 transition duration-300 shadow-md">
                      Devenir partenaire
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                    <h3 className="text-xl font-bold text-green-600 mb-4">Nos coordonnées</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <p>123 Rue de la Ferme, Abidjan, Côte d'Ivoire</p>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <p>+225 01 23 45 67 89</p>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <p>contact@fermivoire.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-lg h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.837149999999!2d-4.008905685734974!3d5.320847996138344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTknMTUuMCJOIDTCsDAwJzMyLjAiVw!5e0!3m2!1sfr!2sci!4v1629999999999!5m2!1sfr!2sci"
                      title="FERM'IVOIRE location"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;