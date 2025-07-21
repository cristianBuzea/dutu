import React, { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProjects = [
    {
      id: 1,
      title: "Kälteanlage mit Kautschuk isolier",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_205018-scaled-e1675456487570.jpg",
      description: "Vollständige Isolierung einer modernen Heizungsanlage mit professioneller Dämmung aller Rohrleitungen und Komponenten. Das Projekt umfasste die komplette Erneuerung der Isolierung sowie die Installation neuer Dämmschalen.",
      year: "2023",
      duration: "3 Tage"
    },
    {
      id: 2,
      title: "Rohrleitungssystem Sanierung",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_205455-scaled.jpg",
      description: "Fachgerechte Erneuerung der Rohrleitungsisolierung mit hochwertigen Dämmmaterialien. Komplette Sanierung eines älteren Rohrleitungssystems mit modernen Isoliermaterialien für optimale Energieeffizienz.",
      year: "2023",
      duration: "2 Tage"
    },
    {
      id: 3,
      title: "Heizungsverteiler Modernisierung",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_205847-scaled.jpg",
      description: "Komplette Neuisolierung des Heizungsverteilers für optimale Energieeffizienz. Modernisierung einer veralteten Heizungsverteilung mit neuen Isoliermaterialien und verbesserter Wärmedämmung.",
      year: "2023",
      duration: "4 Tage"
    },
    {
      id: 4,
      title: "Rohrleitungen Einzelisolierung",
      category: "Wärmeisolierung",
      image: "/gallery/20230127_210135-scaled.jpg",
      description: "Präzise Isolierung einzelner Rohrleitungsabschnitte mit maßgeschneiderten Lösungen. Individuelle Anpassung der Dämmung an spezielle Rohrleitungsführungen und -durchmesser.",
      year: "2023",
      duration: "1 Tag"
    },
    {
      id: 6,
      title: "Industrielle Wärmeisolierung",
      category: "Wärmeisolierung",
      image: "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Komplette Rohrleitungsisolierung in Produktionsanlage mit speziellen Anforderungen für industrielle Anwendungen.",
      year: "2023",
      duration: "5 Tage"
    },
    {
      id: 8,
      title: "Heizungsrohre Wohngebäude",
      category: "Wärmeisolierung",
      image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Energieeffiziente Isolierung im Wohnbereich für reduzierte Heizkosten und verbesserten Wohnkomfort.",
      year: "2023",
      duration: "3 Tage"
    },
    {
      id: 9,
      title: "Klimaanlage Bürogebäude",
      category: "Kälteisolierung",
      image: "https://images.pexels.com/photos/1029802/pexels-photo-1029802.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Moderne Isolierungslösungen für Klimasysteme in einem großen Bürogebäude mit komplexer Lüftungsanlage.",
      year: "2023",
      duration: "4 Tage"
    }
  ];

  const categories = ['Alle', 'Wärmeisolierung', 'Kälteisolierung'];

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
                      <span>Dauer: {project.duration}</span>
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