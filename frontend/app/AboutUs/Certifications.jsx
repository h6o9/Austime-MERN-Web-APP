// components/ResourcesSection.jsx
import React, { useState, useEffect } from "react";

const certifications = [
  {
    id: 1,
    image: "/Memr/1.png",
    title: "Certification 1",
    description: "Description for Certification 1",
    pdfLink: "/Memr/1.pdf", // Add the PDF link here
  },
  {
    id: 2,
    image: "/Memr/2.png",
    title: "Certification 2",
    description: "Description for Certification 2",
    pdfLink: "/Memr/2.pdf", // Add the PDF link here
  },
  {
    id: 3,
    image: "/Memr/3.png",
    title: "Certification 3",
    description: "Description for Certification 3",
    pdfLink: "/Memr/3.pdf", // Add the PDF link here
  },

  // Add more certifications as needed
];

const CeritFicationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const certificationsPerSlide = 1;

  const numSlides = Math.ceil(certifications.length / certificationsPerSlide);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, numSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-hand text-center text-blue-950 mb-8">
          Our Achievements
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: numSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex flex-shrink-0">
                {certifications
                  .slice(
                    slideIndex * certificationsPerSlide,
                    (slideIndex + 1) * certificationsPerSlide
                  )
                  .map((cert) => (
                    <div
                      key={cert.id}
                      className="w-full flex-shrink-0 flex flex-col items-center text-center p-4"
                    >
                      <a
                        href={cert.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-lg overflow-hidden block"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600">{cert.description}</p>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={goToPrevious}
          >
            &lt;
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={goToNext}
          >
            &gt;
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: numSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                currentIndex === index ? "bg-blue-950" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CeritFicationSlider;
