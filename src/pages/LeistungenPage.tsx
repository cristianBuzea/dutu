import React from 'react';
import { ArrowLeft, Flame, Snowflake, Shield, Thermometer, Droplets, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LeistungenPage = () => {
  const waermeVorteile = [
    "Erhebliche Energieeinsparung",
    "Geringerer CO2-Ausstoß",
    "Schonung des Geldbeutels",
    "Berührungsschutz bei heißen Leitungen",
    "Optimale Wärmeverteilung"
  ];

  const kaelteVorteile = [
    "Verhinderung der Medienerwärmung",
    "Schutz vor Legionellenbildung",
    "Keine Schwitzwasserbildung",
    "Schutz vor baulichen Schäden",
    "Korrosionsschutz"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professionelle Isolierungslösungen für Wärme- und Kälteschutz mit über 13 Jahren Erfahrung
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

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Zwei Spezialbereiche, eine Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten Ihnen umfassende Lösungen für alle Ihre Isolierungsanforderungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-4 mr-4">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Wärme Isolierungen</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Energieeffiziente Wärmedämmung für Heizungs-, Sanitär- und Versorgungsleitungen
              </p>
              <a href="#waerme" className="text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-200">
                Mehr erfahren →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-4 mr-4">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Kälte Isolierungen</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Spezialisolierungen für Kälte-, Klima- und Kaltwasseranlagen
              </p>
              <a href="#kaelte" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                Mehr erfahren →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wärme Isolierungen Section */}
      <section id="waerme" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-4 mr-4">
                    <Flame className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    WÄRME ISOLIERUNGEN
                  </h2>
                </div>
                
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p className="text-lg leading-relaxed">
                    Bei der Wärmedämmung liegt das größte Augenmerk der Energieeinsparung zu Grunde. 
                    Auf Heizungs-, Sanitär-, Heisswasser-, Dampf-, Kondensat- oder sonstigen Versorgungsleitungen 
                    sollte grundsätzlich eine Wärmedämmung aufgebracht werden, damit die Wärme dort hingebracht 
                    werden kann, wo sie auch gebraucht wird. Nämlich zum Verbraucher.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Weitere Vorteile sind: die richtige Wärmedämmung, ein geringerer CO2-Ausstoß und zudem 
                    noch die Schonung des Geldbeutels. Als weiteres Ziel einer Wärmedämmung kann zum Beispiel 
                    auch der Berührungsschutz bei Abgas- oder Rauchgasleitungen sein. Hier ist es unerlässlich 
                    eine Wärmedämmung in Form eines Berührungsschutzes aufzubringen, um die sich dort befindenden 
                    Personen vor Verletzungen zu bewahren.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Die Wärmeschutzisolierung erfolgt meist durch Anbringen von Mineralfaserdämmstoffen, 
                    welche anschließend eine Ummantelung bekommen. Meist besteht diese Ummantelung entweder 
                    aus PVC-Folien oder Alu-Grobkornfolie.
                  </p>
                </div>
              </div>

              {/* Vorteile */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  Ihre Vorteile
                </h3>
                <ul className="space-y-3">
                  {waermeVorteile.map((vorteil, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {vorteil}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src="/gallery/20230127_205018-scaled-e1675456487570.jpg"
                  alt="Wärmeisolierung Heizungsanlage"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Komplette kalteisolierrung</p>
                  <p className="text-sm opacity-90">Komplette Wärmeisolierung</p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/gallery/20230127_205847-scaled.jpg"
                  alt="Isolierte Rohrleitungen"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Rohrleitungsisolierung</p>
                  <p className="text-sm opacity-90">Energieeffiziente Dämmung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500"></div>

      {/* Kälte Isolierungen Section */}
      <section id="kaelte" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1250407/pexels-photo-1250407.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kälteisolierung Kühlhaus"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1029802/pexels-photo-1029802.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Klimaanlage Isolierung"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-4 mr-4">
                    <Snowflake className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    KÄLTE ISOLIERUNGEN
                  </h2>
                </div>
                
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p className="text-lg leading-relaxed">
                    Die Anwendung der Kälteschutzisolierung erfolgt meistens bei Kälte- und Klimaanlagen 
                    sowie bei Kaltwasserrohrleitungen. Die Kältedämmung soll eine Erwärmung des Mediums 
                    verhindern (unter anderem zur Verhinderung der Legionellenbildung). Auch das Verhindern 
                    der „Schwitzwasserbildung" wird dadurch verhindert.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Mit Schwitzwasserbildung ist das Auftreten von Tauwasser auf dem Objekt (Rohr / Kanal) 
                    gemeint. Dieses bildet sich durch hohe Luftfeuchtigkeit und einer höheren Umgebungstemperatur. 
                    Durch Schwitzwasser können schwere, bauliche Schäden an der Anlage entstehen. 
                    (z.B. Korrosion/Rost/Grünspan).
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Durch Aufbringen einer dampfdiffusionsdichten Dämmung kann dies verhindert werden.
                  </p>
                </div>
              </div>

              {/* Vorteile */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-2" />
                  Schutz & Vorteile
                </h3>
                <ul className="space-y-3">
                  {kaelteVorteile.map((vorteil, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {vorteil}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Technische Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Materialien und Verfahren auf höchstem Niveau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Thermometer className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Mineralfaserdämmstoffe</h3>
              <p className="text-gray-600 text-sm">Hochwertige Dämmmaterialien für optimale Wärmeisolierung</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">PVC & Alu-Ummantelung</h3>
              <p className="text-gray-600 text-sm">Professionelle Ummantelung für langanhaltenden Schutz</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Droplets className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Dampfdiffusionsdicht</h3>
              <p className="text-gray-600 text-sm">Spezielle Dämmung gegen Schwitzwasserbildung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für Ihr Isolierungsprojekt?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein maßgeschneidertes Angebot
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
          <p className="text-blue-200 mt-6 text-sm">
            Schnelle Antwort innerhalb von 24 Stunden garantiert
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeistungenPage;