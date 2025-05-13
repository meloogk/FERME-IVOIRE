import { UserCircle, ChevronRight } from 'lucide-react';

const About = () => {
  const timelineEvents = [
    {
      year: "2005",
      title: "Fondation de FERM'IVOIRE",
      description: "Création de la ferme avec une vision d'agriculture durable et respectueuse de l'environnement."
    },
    {
      year: "2010",
      title: "Première certification bio",
      description: "Obtention de la certification bio pour nos produits, marquant un tournant dans notre engagement écologique."
    },
    {
      year: "2018",
      title: "Expansion internationale",
      description: "Début de l'exportation de nos produits vers l'Europe, avec un succès croissant."
    },
    {
      year: "2023",
      title: "Innovation technologique",
      description: "Introduction de technologies modernes pour optimiser notre production tout en restant écologiques."
    }
  ];
  
  const teamMembers = [
    {
      name: "Adama Koné",
      role: "Fondateur & PDG",
      bio: "Adama est un passionné d'agriculture durable et a fondé FERM'IVOIRE avec l'idée de créer une ferme qui allie tradition et innovation.",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Rokia Diallo",
      role: "Responsable des méthodes d'élevage",
      bio: "Passionnée par le bien-être des animaux et l'élevage durable depuis plus de 15 ans.",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "Paul N'Guessan",
      role: "Chef de la production",
      bio: "Expert en gestion de la ferme et des cycles de production durable avec une formation internationale.",
      imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    },
    {
      name: "Aminata Touré",
      role: "Agronome spécialisée",
      bio: "Spécialiste en techniques agricoles durables et en innovation environnementale avec un doctorat en agronomie.",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];
  
  return (
    <div className="bg-gray-50">
      {/* En-tête */}
      <section className="pt-16 pb-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              À propos de FERM'IVOIRE
            </h1>
            <p className="text-xl leading-relaxed animate-fadeIn">
              Plongez dans l'histoire de notre ferme et découvrez notre engagement
              envers une agriculture durable et éthique en Côte d'Ivoire.
            </p>
          </div>
        </div>
      </section>
      
      {/* Histoire et vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Notre histoire et vision</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                FERM'IVOIRE est née de la passion d'un groupe d'agriculteurs déterminés à révolutionner 
                l'agriculture ivoirienne. Face aux défis environnementaux et à la demande croissante 
                de produits agricoles de qualité, nous avons créé une ferme qui allie traditions ancestrales 
                et innovations modernes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre vision est de devenir un modèle d'agriculture durable en Afrique de l'Ouest, 
                en produisant des aliments sains tout en préservant les ressources naturelles pour 
                les générations futures. Nous croyons fermement qu'une agriculture respectueuse de 
                l'environnement est non seulement possible, mais essentielle pour notre avenir commun.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
              <img 
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg" 
                alt="Histoire de la ferme" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Chronologie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Notre histoire en quelques dates</h2>
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-10 pb-10 last:pb-0">
                {/* Ligne verticale */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-green-200"></div>
                )}
                
                {/* Point */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  {event.year.slice(-2)}
                </div>
                
                {/* Contenu */}
                <div className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="text-sm text-green-600 font-semibold mb-1">{event.year}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fondateur */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Rencontrez notre fondateur</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img 
                  className="h-full w-full object-cover md:h-full" 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Fondateur de FERM'IVOIRE"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">Fondateur</div>
                <h3 className="mt-1 text-2xl font-bold text-gray-800 leading-tight">Adama Koné</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Adama Koné est un passionné d'agriculture durable et a fondé FERM'IVOIRE en 2005 avec l'idée 
                  de créer une ferme qui allie tradition et innovation. Titulaire d'un master en agronomie de 
                  l'Université de Yamoussoukro, il a travaillé dans plusieurs exploitations agricoles à travers 
                  le monde avant de revenir en Côte d'Ivoire pour réaliser son rêve.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Grâce à son expertise, il veille à ce que toutes nos méthodes respectent l'environnement et 
                  le bien-être des animaux tout en garantissant des produits de haute qualité. Sa vision d'une 
                  agriculture durable et responsable guide chaque décision prise à FERM'IVOIRE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Méthodes d'élevage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">Nos méthodes d'élevage</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nous prônons un élevage respectueux des animaux, leur offrant des conditions de vie 
                naturelles et un espace pour s'épanouir. L'alimentation des animaux est soigneusement 
                sélectionnée pour être la plus saine et naturelle possible, garantissant ainsi une 
                qualité optimale de nos produits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre engagement envers la nature et la durabilité se reflète dans chaque aspect de 
                notre production. Nous n'utilisons pas d'antibiotiques préventifs et minimisons l'usage 
                de médicaments. Nos animaux sont élevés en plein air autant que possible, avec un accès 
                constant à des aliments biologiques cultivés sur place.
              </p>
              <div className="mt-8">
                <button className="bg-green-600 text-white py-3 px-6 rounded-lg flex items-center hover:bg-green-700 transition duration-300 shadow-md">
                  <span>Voir notre vidéo</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-96">
              <img 
                src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg" 
                alt="Méthodes d'élevage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center cursor-pointer transform transition duration-300 hover:scale-110">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-green-600 ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre équipe */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Notre équipe</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Découvrez les membres passionnés qui composent notre équipe technique. Ils travaillent 
            ensemble pour offrir des produits de qualité et respectueux de l'environnement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 mx-auto relative group">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-600 transition-all duration-300 group-hover:border-8">
                    {member.imageUrl ? (
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-green-100 flex items-center justify-center">
                        <UserCircle className="w-16 h-16 text-green-600" />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm px-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;