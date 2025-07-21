import React from 'react';
import { Flame, Snowflake, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Wärmeisolierungen Stuttgart Region",
      description: "Mineralfaserdämmstoffe mit fachgerechter Ummantelung für optimale Wärmedämmung in Bietigheim-Bissingen, Ludwigsburg und Umgebung",
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-600 hover:to-red-600"
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Kälteisolierungen Baden-Württemberg",
      description: "Spezialisolierungen für Kälte- und Klimaanlagen sowie Kaltwasserrohrleitungen in der gesamten Region Stuttgart",
      color: "from-teal-500 to-blue-500",
      hoverColor: "hover:from-teal-600 hover:to-blue-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Montage/Demontage Service",
      description: "Komplettservice in Bietigheim-Bissingen: Alte Isolation entfernen, Reinigung, neue Materialien montieren",
      color: "from-green-500 to-blue-500",
      hoverColor: "hover:from-green-600 hover:to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Isolierungslösungen in Bietigheim-Bissingen und der Stuttgart Region – 
            von der Beratung bis zur fachgerechten Montage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color} ${service.hoverColor} transition-all duration-300`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center group">
                  Mehr erfahren
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="mailto:info@dutu-montageisolier.de?subject=Kostenlose%20Beratung%20anfordern&body=Hallo,%0D%0A%0D%0AIch%20möchte%20gerne%20eine%20kostenlose%20Beratung%20für%20mein%20Isolierungsprojekt%20vereinbaren.%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20unter:%0D%0ATelefon:%20%0D%0AE-Mail:%20%0D%0A%0D%0AProjektdetails:%0D%0A%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            Kostenlose Beratung anfordern
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;