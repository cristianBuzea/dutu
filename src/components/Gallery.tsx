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
    },
    // Neue Bilder für Wärmeisolierung
    {
      id: 201,
      title: "Wärmeisolierung Projekt 1",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (5).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 202,
      title: "Wärmeisolierung Projekt 2",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (6).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 203,
      title: "Wärmeisolierung Projekt 3",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (7).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 204,
      title: "Wärmeisolierung Projekt 4",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (8).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 205,
      title: "Wärmeisolierung Projekt 5",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (9).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 206,
      title: "Wärmeisolierung Projekt 6",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (9).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 207,
      title: "Wärmeisolierung Projekt 7",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (10).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 208,
      title: "Wärmeisolierung Projekt 8",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (11).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 209,
      title: "Wärmeisolierung Projekt 9",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (12).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    {
      id: 210,
      title: "Wärmeisolierung Projekt 10",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (13).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis."
    },
    // Neue Bilder für Demontage
    {
      id: 301,
      title: "Demontage Projekt 1",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (4).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien"
    },
    {
      id: 302,
      title: "Demontage Projekt 2",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (5).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien"
    },
    {
      id: 303,
      title: "Demontage Projekt 3",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (6).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien"
    },
    {
      id: 304,
      title: "Demontage Projekt 4",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (7).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien"
    },
    // Neue Bilder für Warmeisolierung mit Alu-grobkornfolie
    {
      id: 401,
      title: "Warmeisolierung mit Alu-grobkornfolie 1",
      category: "Warmeisolierung mit Alu-grobkornfolie",
      image: "/gallery/Alu-grobkornfolie/WhatsApp Image 2025-07-07 at 1.20.28 PM (5).jpeg",
      description: "Professionelle Warmeisolierung mit Alu-grobkornfolie – Beispiel aus der Praxis."
    },
    {
      id: 402,
      title: "Warmeisolierung mit Alu-grobkornfolie 2",
      category: "Warmeisolierung mit Alu-grobkornfolie",
      image: "/gallery/Alu-grobkornfolie/WhatsApp Image 2025-07-07 at 1.20.28 PM (6).jpeg",
      description: "Professionelle Warmeisolierung mit Alu-grobkornfolie – Beispiel aus der Praxis."
    },
    {
      id: 403,
      title: "Warmeisolierung mit Alu-grobkornfolie 3",
      category: "Warmeisolierung mit Alu-grobkornfolie",
      image: "/gallery/Alu-grobkornfolie/WhatsApp Image 2025-07-07 at 1.20.28 PM (7).jpeg",
      description: "Professionelle Warmeisolierung mit Alu-grobkornfolie – Beispiel aus der Praxis."
    },
    // Neue Bilder für KÄLTEISOLIEUNG
    {
      id: 501,
      title: "Kälteisolierung Projekt 1",
      category: "KÄLTEISOLIEUNG",
      image: "/gallery/Kalteisolieung-dutu/WhatsApp Image 2025-07-07 at 1.13.35 PM (1).jpeg",
      description: "Professionelle Kälteisolierung – Beispiel aus der Praxis."
    },
    {
      id: 502,
      title: "Kälteisolierung Projekt 2",
      category: "KÄLTEISOLIEUNG",
      image: "/gallery/Kalteisolieung-dutu/WhatsApp Image 2025-07-07 at 1.13.36 PM (2).jpeg",
      description: "Professionelle Kälteisolierung – Beispiel aus der Praxis."
    },
    {
      id: 503,
      title: "Kälteisolierung Projekt 3",
      category: "KÄLTEISOLIEUNG",
      image: "/gallery/Kalteisolieung-dutu/WhatsApp Image 2025-07-07 at 1.13.36 PM (3).jpeg",
      description: "Professionelle Kälteisolierung – Beispiel aus der Praxis."
    },
  ];

  // Group projects by category and take up to 2 from each
  type Project = typeof projects[number];
  const projectsByCategory: Project[] = Object.values(
    projects.reduce((acc: Record<string, Project[]>, project: Project) => {
      if (!acc[project.category]) acc[project.category] = [];
      if (acc[project.category].length < 2) acc[project.category].push(project);
      return acc;
    }, {} as Record<string, Project[]>)
  ).flat();

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
          {projectsByCategory.map((project) => (
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
            href="/galerie" 
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