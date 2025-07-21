import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-green-700/90"></div>
      <div className="absolute inset-0 bg-[url('/WhatsApp%20Image%202025-06-28%20at%208.08.42%20AM.jpeg')] bg-cover bg-center opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight pt-4">
            Profitieren Durch Isolieren
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-4 font-semibold">
            Energie sparen und Schonung des Geldbeutels
          </h2>
          <p className="text-lg md:text-xl text-blue-200 mb-12">
            Präzise Isolierungslösungen seit 13 Jahren in Bietigheim-Bissingen und der Stuttgart Region
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="/leistungen"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center group"
            >
              Leistungen entdecken
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a 
              href="tel:01747146321"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200 flex items-center group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Kontakt aufnehmen
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-2">13+</div>
              <div className="text-blue-200">Jahre Erfahrung</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-200">Projekte</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">Zufriedenheit</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;