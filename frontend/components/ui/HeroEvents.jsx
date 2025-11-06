import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventImages = [
    { src: "/test2.jpg", alt: "Event Image 1" },
    { src: "/test-1.jpg", alt: "Event Image 2" },
    { src: "/test2.jpg", alt: "Event Image 3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [eventImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-blue-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-hand font-bold text-center text-white mb-8">
          Events
        </h2>
        <div className="relative h-[350px] w-full overflow-hidden">
          {eventImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={350}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {/* Dot Navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {eventImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/Events">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-4 bg-blue-600 text-white hover:bg-yellow-300 hover:text-black font-nunito"
            >
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroEvents;
