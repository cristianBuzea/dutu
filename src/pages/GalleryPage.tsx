import React, { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProjects = [
    // New category: Isolierung Aussen wärmepumpen anlage
    {
      id: 101,
      title: "Außenisolierung Wärmepumpenanlage 1",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.05 PM (3).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 102,
      title: "Außenisolierung Wärmepumpenanlage 2",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.05 PM (4).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 103,
      title: "Außenisolierung Wärmepumpenanlage 3",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.05 PM (5).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 104,
      title: "Außenisolierung Wärmepumpenanlage 4",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.06 PM (4).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 105,
      title: "Außenisolierung Wärmepumpenanlage 5",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.06 PM (5).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 106,
      title: "Außenisolierung Wärmepumpenanlage 6",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.06 PM (6).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 107,
      title: "Außenisolierung Wärmepumpenanlage 7",
      category: "Isolierung Aussen wärmepumpen anlage",
      image: "/gallery/warmepunpen/WhatsApp Image 2025-07-07 at 1.24.06 PM (7).jpeg",
      description: "Professionelle Außenisolierung einer Wärmepumpenanlage.",
      year: "2025",
      duration: "1 Tag"
    },
    // Neue Bilder für Wärmeisolierung
    {
      id: 201,
      title: "Wärmeisolierung Projekt 1",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (5).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 202,
      title: "Wärmeisolierung Projekt 2",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (6).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 203,
      title: "Wärmeisolierung Projekt 3",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (7).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 204,
      title: "Wärmeisolierung Projekt 4",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (8).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 205,
      title: "Wärmeisolierung Projekt 5",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.29 PM (9).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 206,
      title: "Wärmeisolierung Projekt 6",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (9).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 207,
      title: "Wärmeisolierung Projekt 7",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (10).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 208,
      title: "Wärmeisolierung Projekt 8",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (11).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 209,
      title: "Wärmeisolierung Projekt 9",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (12).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 210,
      title: "Wärmeisolierung Projekt 10",
      category: "Wärmeisolierung",
      image: "/gallery/WARMEISLIERNG/WhatsApp Image 2025-07-07 at 1.09.30 PM (13).jpeg",
      description: "Professionelle Wärmeisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    // Neue Bilder für Demontage
    {
      id: 301,
      title: "Demontage Projekt 1",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (4).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 302,
      title: "Demontage Projekt 2",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (5).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 303,
      title: "Demontage Projekt 3",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (6).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 304,
      title: "Demontage Projekt 4",
      category: "Demontage",
      image: "/gallery/DEMONTAGE/WhatsApp Image 2025-07-07 at 1.15.49 PM (7).jpeg",
      description: "DEMONTAGE ALTE ISOLIERUNG Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien",
      year: "2025",
      duration: "1 Tag"
    },
    // Neue Bilder für Warmeisolierung mit Alu-grobkornfolie
    {
      id: 401,
      title: "Warmeisolierung mit Alu-grobkornfolie 1",
      category: "Warmeisolierung mit Alu-grobkornfolie",
      image: "/gallery/Alu-grobkornfolie/WhatsApp Image 2025-07-07 at 1.20.28 PM (5).jpeg",
      description: "Professionelle Warmeisolierung mit Alu-grobkornfolie – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 402,
      title: "Warmeisolierung mit Alu-grobkornfolie 2",
      category: "Warmeisolierung mit Alu-grobkornfolie",
      image: "/gallery/Alu-grobkornfolie/WhatsApp Image 2025-07-07 at 1.20.28 PM (6).jpeg",
      description: "Professionelle Warmeisolierung mit Alu-grobkornfolie – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 403,
      title: "Warmeisolierung mit Alu-grobkornfolie 3",
      category: "Warmeisolierung mit Alu-grobkornfolie",
      image: "/gallery/Alu-grobkornfolie/WhatsApp Image 2025-07-07 at 1.20.28 PM (7).jpeg",
      description: "Professionelle Warmeisolierung mit Alu-grobkornfolie – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    // Neue Bilder für KÄLTEISOLIEUNG
    {
      id: 501,
      title: "Kälteisolierung Projekt 1",
      category: "KÄLTEISOLIEUNG",
      image: "/gallery/Kalteisolieung-dutu/WhatsApp Image 2025-07-07 at 1.13.35 PM (1).jpeg",
      description: "Professionelle Kälteisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 502,
      title: "Kälteisolierung Projekt 2",
      category: "KÄLTEISOLIEUNG",
      image: "/gallery/Kalteisolieung-dutu/WhatsApp Image 2025-07-07 at 1.13.36 PM (2).jpeg",
      description: "Professionelle Kälteisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    },
    {
      id: 503,
      title: "Kälteisolierung Projekt 3",
      category: "KÄLTEISOLIEUNG",
      image: "/gallery/Kalteisolieung-dutu/WhatsApp Image 2025-07-07 at 1.13.36 PM (3).jpeg",
      description: "Professionelle Kälteisolierung – Beispiel aus der Praxis.",
      year: "2025",
      duration: "1 Tag"
    }
  ];

  const categories = ['Alle', 'Wärmeisolierung', 'Isolierung Aussen wärmepumpen anlage', 'Demontage', 'Warmeisolierung mit Alu-grobkornfolie', 'Kälteisolieung'];

  const filteredProjects = selectedCategory === 'Alle' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Projekt-Galerie
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Entdecken Sie die Vielfalt unserer Isolierungsprojekte und überzeugen Sie sich von der Qualität unserer Arbeit
            </p>
            <div className="flex justify-center">
              <a 
                href="/" 
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Zurück zur Startseite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <video controls poster="/gallery/20230127_205018-scaled-e1675456487570.jpg" className="w-full rounded-xl shadow-lg mb-4">
                <source src="/video/warmeisolierung-dutu.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Wärmeisolierung</h3>
              <p className="text-gray-600 text-center">Einblick in die professionelle Wärmeisolierung durch unser Team.</p>
            </div>
            <div className="flex flex-col items-center">
              <video controls poster="/gallery/20230127_205455-scaled.jpg" className="w-full rounded-xl shadow-lg mb-4">
                <source src="/video/kalteisolierung-dutu.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kälteisolierung</h3>
              <p className="text-gray-600 text-center">Einblick in die professionelle Kälteisolierung durch unser Team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Ansicht:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredProjects.length} Projekt{filteredProjects.length !== 1 ? 'e' : ''} gefunden
              {selectedCategory !== 'Alle' && ` in der Kategorie "${selectedCategory}"`}
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between items-center text-sm">
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Abgeschlossen
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {project.title}
                          </h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>{project.year}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Projektdauer: {project.duration}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Erfolgreich abgeschlossen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ihr Projekt könnte das nächste sein
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Lassen Sie uns gemeinsam Ihr Isolierungsprojekt planen und umsetzen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@dutu-montageisolier.de?subject=Kostenlose%20Beratung%20anfordern&body=Hallo,%0D%0A%0D%0AIch%20möchte%20gerne%20eine%20kostenlose%20Beratung%20für%20mein%20Isolierungsprojekt%20vereinbaren.%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20unter:%0D%0ATelefon:%20%0D%0AE-Mail:%20%0D%0A%0D%0AProjektdetails:%0D%0A%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-200 transform hover:scale-105"
            >
              Kostenlose Beratung anfordern
            </a>
            <a 
              href="mailto:info@dutu-montageisolier.de?subject=Angebot%20anfordern&body=Hallo,%0D%0A%0D%0AIch%20möchte%20gerne%20ein%20Angebot%20für%20folgendes%20Isolierungsprojekt%20anfordern:%0D%0A%0D%0AProjektart:%20%0D%0AStandort:%20%0D%0AGröße/Umfang:%20%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20unter:%0D%0ATelefon:%20%0D%0AE-Mail:%20%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              Angebot einholen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;