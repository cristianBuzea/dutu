import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/WhatsApp%20Image%202025-06-28%20at%208.07.25%20AM.jpeg')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Möchten Sie weitere Informationen?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot in 
            Bietigheim-Bissingen und der Stuttgart Region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
            <p className="text-blue-100">01747146321</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">E-Mail</h3>
            <p className="text-blue-100">info@dutu-montageisolier.de</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Standort</h3>
            <p className="text-blue-100">Hiller Straße 24<br />74321 Bietigheim-Bissingen<br />Baden-Württemberg</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="mailto:info@dutu-montageisolier.de?subject=Kostenlose%20Beratung%20anfordern&body=Hallo,%0D%0A%0D%0AIch%20möchte%20gerne%20eine%20kostenlose%20Beratung%20für%20mein%20Isolierungsprojekt%20vereinbaren.%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20unter:%0D%0ATelefon:%20%0D%0AE-Mail:%20%0D%0A%0D%0AProjektdetails:%0D%0A%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 animate-pulse"
          >
            Kostenlose Beratung anfordern
          </a>
          <p className="text-blue-100 mt-4">
            Schnelle Antwort innerhalb von 24 Stunden garantiert
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;