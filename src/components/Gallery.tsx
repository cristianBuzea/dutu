import React from 'react';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Kälteanlage mit Kautschuk isolier",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_205018-scaled-e1675456487570.jpg",
      description: "Vollständige Isolierung einer modernen Heizungsanlage mit professioneller Dämmung aller Rohrleitungen und Komponenten"
    },
    {
      id: 2,
      title: "Rohrleitungssystem Sanierung",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_205455-scaled.jpg",
      description: "Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien"
    },
    {
      id: 3,
      title: "Heizungsverteiler Modernisierung",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_205847-scaled.jpg",
      description: "Komplette Neuisolierung des Heizungsverteilers für optimale Energieeffizienz"
    },
    {
      id: 4,
      title: "Regenwaser Leitung isolierung",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_210135-scaled.jpg",
      description: "Präzise Isolierung einzelner Rohrleitungsabschnitte mit maßgeschneiderten Lösungen"
    },
    {
      id: 5,
      title: "Deckenmontage Rohrleitungen",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_210430-scaled.jpg",
      description: "Professionelle Isolierung von Deckenleitungen mit vollständiger Dämmummantelung"
    },
    {
      id: 6,
      title: "Industrielle Wärmeisolierung",
      category: "Wärmeisolierung",
      image: "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Komplette Rohrleitungsisolierung in Produktionsanlage"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Unsere Referenzprojekte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Isolierungsprojekte 
            in Bietigheim-Bissingen, Stuttgart und der gesamten Baden-Württemberg Region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/gallery" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            Zur vollständigen Galerie
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;