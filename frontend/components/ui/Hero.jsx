import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PresidentialMessage from "./PresidentialMessage";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated images array with button text and link for each slide
  const images = [
    {
      src: "/banners/BANNER 1.jpg",
      alt: "ARCL Image 1",
      buttonText: "Learn More About Us",
      link: "/About", // Link to the "About" page
    },
    {
      src: "/banners/BANNER 2.jpg",
      alt: "ARCL Image 2",
      buttonText: "Explore Our Activities",
      link: "/Activities", // Link to the "Activities" page
    },
    {
      src: "/banners/hero-3.jpg",
      alt: "ARCL Image 3",
      buttonText: "See Our Kids in Action",
      link: "/Gallery", // Link to the "Community" page
    },
    {
      src: "/banners/hero-4.jpg",
      alt: "ARCL Image 4",
      buttonText: "Subscribe for Updates",
      link: "/Newsletter", // Link to the "Programs" page
    },
    {
      src: "/banners/hero-5.JPG",
      alt: "ARCL Image 5",
      buttonText: "Apply for Admission",
      link: "/Admissions", // Link to the "Support" page
    },
    {
      src: "/banners/hero-6.jpeg",
      alt: "ARCL Image 6",
      buttonText: "Make a Difference Today",
      link: "/DonateNow", // Link to the "Get Involved" page
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Images */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute h-full w-full transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Centered Text and Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 animate-fade-in-down font-hand drop-shadow-lg">
            Welcome to ARCL
          </h1>
          <Link href={images[currentSlide].link}>
            <Button
              variant="destructive"
              size="lg"
              className="px-8 py-6 text-lg bg-blue-600 text-white hover:bg-yellow-300 hover:text-black font-nunito animate-fade-in-up shadow-lg"
            >
              {/* Dynamic Button Text */}
              {images[currentSlide].buttonText}
            </Button>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* PresidentialMessage Section */}
      <section>
        <PresidentialMessage />
      </section>

      {/* Rest of your existing content */}
      <section className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col sm:flex-row items-center sm:items-start">
          {/* Text Content */}
          <div className="sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="mt-20 text-4xl font-hand sm:text-6xl font-bold text-white mb-6 leading-tight">
              About Autism
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed font-nunito">
              Autism is a spectrum of neurodevelopmental conditions that
              influence how individuals perceive, process, and respond to
              sensory information, social cues, and communication. Each person
              with autism has a unique set of strengths and challenges,
              highlighting the diversity within the spectrum.
            </p>
            {/* Learn More Button */}
            <Link href="/About">
              <Button
                variant="destructive"
                size="lg"
                className="px-6 py-6 text-lg bg-blue-600 text-white hover:bg-yellow-300 hover:text-black font-nunito"
              >
                Learn More About Autism
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="sm:w-1/2 flex justify-end">
            <Image
              src="/header-2.jpg"
              alt="Child Studying"
              width={400}
              height={500}
              className="rounded-lg border-none outline-none"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
