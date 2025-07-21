import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="h-12 flex items-center justify-center">
              <img src="/logo-Dutu-motage-isolier.jpg" width="170" />
            </Link>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Über uns
            </Link>
            <Link to="/leistungen" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Leistungen
            </Link>
            <Link to="/galeria" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Galeria
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:01747146321"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm">01747146321</span>
            </a>
            <a 
              href="mailto:info@dutu-montageisolier.de?subject=Angebot%20anfordern&body=Hallo,%0D%0A%0D%0AIch%20möchte%20gerne%20ein%20Angebot%20für%20folgendes%20Isolierungsprojekt%20anfordern:%0D%0A%0D%0AProjektart:%20%0D%0AStandort:%20%0D%0AGröße/Umfang:%20%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20unter:%0D%0ATelefon:%20%0D%0AE-Mail:%20%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Angebot anfordern
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Über uns
              </Link>
              <Link to="/leistungen" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Leistungen
              </Link>
              <Link to="/galeria" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Galeria
              </Link>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Kontakt
              </a>
              <div className="px-3 py-2">
                <a 
                  href="mailto:info@dutu-montageisolier.de?subject=Angebot%20anfordern&body=Hallo,%0D%0A%0D%0AIch%20möchte%20gerne%20ein%20Angebot%20für%20folgendes%20Isolierungsprojekt%20anfordern:%0D%0A%0D%0AProjektart:%20%0D%0AStandort:%20%0D%0AGröße/Umfang:%20%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20unter:%0D%0ATelefon:%20%0D%0AE-Mail:%20%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Angebot anfordern
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;