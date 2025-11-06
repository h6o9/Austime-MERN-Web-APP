import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Importing the star icon

// Sample testimonials data
const testimonials = [
  {
    name: "Dr. Ayesha Tahir",
    role: "Parent",
    message:
      "My son was diagnosed with ASD at 2.7 years. After 2.5 years of early intervention, he moved to ARCL. It has been 7 months since joining, and I am truly impressed with the therapists' dedication to improving his progress. Alhamdulillah, I have full trust in the ARCL team, and I’m confident we’ll reach our goal of inclusion. Best of luck, ARCL!",
  },
  {
    name: "Ms. Naila Adil",
    role: "Parent",
    message:
      "My son was diagnosed with CP at 1 year old. Initially, we sought therapies from various centers. By the age of 4-5, I felt the need for schooling alongside therapy and found ARCL. He’s been attending since he was 5, and now at 7.9, his progress is remarkable. ARCL’s team has worked tirelessly, and he is about to join a regular school. I am deeply grateful for their efforts.",
  },
  {
    name: "Dr. Irfan Saleem",
    role: "Parent",
    message:
      "“Autism doesn't come with a manual; it comes with a patient family and competent therapists who never give up.” My son Usman was diagnosed with ASD in 2010. We joined ARCL in 2017, thanks to their generous financial support. The ARCL team, under Dr. Faraz Bhatti’s leadership, has been amazing. I wish them continued success.",
  },
  {
    name: "Dr. Raazia Altaf",
    role: "Parent",
    message:
      "My son was diagnosed with CP at 1 year old. Initially, we sought therapies from various centers. By the age of 4-5, I felt the need for schooling alongside therapy and found ARCL. He’s been attending since he was 5, and now at 7.9, his progress is remarkable. ARCL’s team has worked tirelessly, and he is about to join a regular school. I am deeply grateful for their efforts.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Automatic slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000); // Change the 8000 value for timing
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="py-12 bg-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8 font-hand">
          Testimonials
        </h2>
        <div className="flex justify-center">
          <motion.div
            key={currentIndex}
            className="bg-blue-950 p-6 rounded-lg w-96"
            initial={{ x: 300, opacity: 0 }} // Start from right
            animate={{ x: 0, opacity: 1 }} // Slide in from right
            exit={{ x: -300, opacity: 0 }} // Slide out to left
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center mb-4">
              {/* Using the star icon for all testimonials */}
              <FaStar className="w-16 h-16 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-white">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-white italic">
              "{testimonials[currentIndex].message}"
            </p>
          </motion.div>
        </div>
        {/* Dot Navigation */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              } transition-colors`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
