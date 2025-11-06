"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  // Handle scroll for hide/reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Animate navbar visibility
  useEffect(() => {
    if (isVisible) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: "-100%", opacity: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 80 }}
      className="bg-white text-blue-950 py-2 fixed top-0 left-0 right-0 z-50 shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center">
          <Image
            src="/arcl logo.jpg"
            alt="School Logo"
            width={80}
            height={70}
            className="object-cover"
          />
          <div className="ml-2 font-nunito hidden sm:block">
            <h1 className="text-base sm:text-lg font-bold leading-tight">
              Autism Resource
            </h1>
            <h2 className="text-base sm:text-lg font-bold leading-tight">
              Centre Lahore
            </h2>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-#12373d focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 text-base sm:text-lg font-bold font-nunito">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/AboutUs" className="block hover:text-blue-300">
            About
          </Link>
          <Link href="/Activities" className="hover:text-blue-300">
            Activities
          </Link>
          <Link href="/Gallery" className="block hover:text-blue-300">
            Gallery
          </Link>
          <Link href="/Newsletter" className="block hover:text-blue-300">
            Newsletter
          </Link>
          <Link href="/Admissions" className="hover:text-blue-300">
            Admissions
          </Link>
        </div>

        {/* Donate Button */}
        <div className="hidden lg:block font-bold">
          <Link href="/DonateNow">
            <Button
              variant="destructive"
              className="px-4 py-1 font-bold hover:bg-yellow-400 hover:text-black transition-colors text-sm"
            >
              Donate
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="lg:hidden mt-4 space-y-2 bg-white shadow-lg p-4 rounded-md"
          >
            <Link href="/" className="block hover:text-blue-300">
              Home
            </Link>
            <Link href="/AboutUs" className="block hover:text-blue-300">
              About
            </Link>
            <Link href="/Activities" className="block hover:text-blue-300">
              Activities
            </Link>
            <Link href="/Gallery" className="block hover:text-blue-300">
              Gallery
            </Link>
            <Link href="/Newsletter" className="block hover:text-blue-300">
              Newsletter
            </Link>
            <Link href="/Admissions" className="block hover:text-blue-300">
              Admissions
            </Link>
            <Link href="/DonateNow" className="block">
              <Button
                variant="destructive"
                className="w-full py-2 hover:bg-yellow-500 hover:text-white transition-colors"
              >
                Donate
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
