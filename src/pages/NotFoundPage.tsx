import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 flex items-center justify-center text-white p-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <span className="text-9xl font-bold text-green-400 opacity-80">404</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-xl text-blue-100 mb-12">
          Hoppla! Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-200 transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-3" />
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage; 