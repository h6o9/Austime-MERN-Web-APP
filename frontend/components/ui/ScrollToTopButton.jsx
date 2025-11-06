"use client";
import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa"; // Import the icon from react-icons
import { Button } from "@/components/ui/button"; // Assuming you're using a custom Button component
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track the scroll position to show the "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // Show button after scrolling down 200px
      } else {
        setIsVisible(false); // Hide button when near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-10 right-10 z-50"
    >
      {isVisible && (
        <Button
          variant="destructive"
          className="bg-blue-600 hover:bg-red-700 text-white rounded-full p-6 shadow-lg size-12" // Increased padding for a larger button
          onClick={scrollToTop}
        >
          <FaArrowAltCircleUp
            className="text-white"
            style={{ fontSize: "80px" }}
          />{" "}
          {/* Explicitly set the icon size */}
        </Button>
      )}
    </motion.div>
  );
};

export default ScrollToTopButton;
