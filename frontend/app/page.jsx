"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";
import Facilities from "@/components/ui/Facilities";
import Help from "@/components/ui/Help";
import TherapiesSection from "@/components/ui/Therapies";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import HeroEvents from "@/components/ui/HeroEvents";
import HomeContact from "@/components/ui/HomeContact";

const Home = () => {
  // useEffect to ensure the animations run after the component mounts
  useEffect(() => {
    // You can add logic here if needed to execute when the page is loaded.
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
      >
        <Facilities />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Help />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <TherapiesSection />
      </motion.div>
      {/* <HeroEvents /> */}
      <TestimonialsSection />
      <HomeContact />
    </div>
  );
};

export default Home;
