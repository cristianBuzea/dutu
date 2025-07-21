import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "M. Schmidt",
      rating: 5,
      text: "Professionelle Arbeit, pünktlich und sauber! Die Heizkosten haben sich bereits nach einem Jahr deutlich reduziert.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "A. Müller",
      rating: 5,
      text: "Herr Dutu hat unsere Industrieanlage komplett isoliert. Exzellente Qualität und faire Preise. Sehr empfehlenswert!",
      image: "https://images.pexels.com/photos/3777553/pexels-photo-3777553.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "K. Weber",
      rating: 5,
      text: "Kompetente Beratung und schnelle Umsetzung. Die Kälteisolierung funktioniert perfekt. Danke für die tolle Arbeit!",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kundenstimmen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Was unsere Kunden über unsere Arbeit sagen
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <img
                    src="/Screenshot 2025-07-04 at 14.50.49.png"
                    alt="Customer testimonial"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-800">{testimonials[currentIndex].name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;