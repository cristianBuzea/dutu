import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "13+ Jahre Erfahrung",
      description: "Bewährte Expertise im Isolierungsbereich"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "100+ Projekte",
      description: "Zufriedene Kunden in ganz Deutschland"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Pünktliche Ausführung",
      description: "Termingerechte Projektabwicklung"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Qualitätsgarantie",
      description: "Langfristige Sicherheit für Ihre Investition"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/public/WhatsApp%20Image%202025-06-28%20at%208.07.25%20AM.jpeg"
                alt="Professional Insulation Installation - Heating System"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-6 z-0">
              <div className="w-32 h-32 opacity-20"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-600 font-semibold text-lg mb-2">Qualität im Handwerk</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                CATALIN DUTU
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Ihr Isoliertechniker in Bietigheim-Bissingen
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Komfort im eigenen Zuhause ist etwas Wertvolles. Als erfahrener Isoliertechniker in 
                Bietigheim-Bissingen sorge ich dafür, dass Ihre Räume optimal gedämmt sind – für maximale 
                Energieeffizienz und niedrige Heizkosten. Mit über 13 Jahren Erfahrung in der Stuttgart Region 
                und modernsten Materialien biete ich Ihnen professionelle Lösungen für Wärme- und Kälteisolierung 
                in Ludwigsburg, Vaihingen, Kornwestheim und der gesamten Baden-Württemberg Region.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-blue-50 transition-colors duration-200">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600 text-white rounded-lg p-2 mr-2 sm:mr-3 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="mailto:info@dutu-montageisolier.de?subject=Anfrage%20für%20Isolierungsleistungen&body=Hallo,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20Isolierungsleistungen%20und%20würde%20gerne%20eine%20kostenlose%20Beratung%20vereinbaren.%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-200 transform hover:scale-105"
              >
                Zu unseren Leistungen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;