"use client";
import { useEffect, useState } from "react";
import MemberCard from "./Member";
import Link from "next/link";
import FinancialStatements from "@/components/ui/FinancialStatements";
import Image from "next/image";
import Organogram from "./Organogram";
import CertificationsSlider from "./Certifications";
import Audits from "@/components/ui/Audits";

const AboutUs = () => {
  const images = ["/test2.jpg", "/test-1.jpg", "/test2.jpg", "/test-1.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const governingBodyMembers = [
    {
      imageSrc: "/faraz.jpg",
      name: "Dr Ahmad Faraz Bhatti",
      position: "President",
    },
    {
      imageSrc: "/younas.jpg",
      name: "Muhammad Younas Mehrose",
      position: "Vice President",
    },
    {
      imageSrc: "/ahmadshehzad.jpg",
      name: "Mr Ahmad Shahzad Bhatti",
      position: "General Secretary",
    },
    {
      imageSrc: "/arshadmehmood.jpg",
      name: "Arshad Mehmood",
      position: "Treasurer",
    },
    {
      imageSrc: "/sherazraza.jpg",
      name: "Sheraz Raza Civil Society",
      position: "Coordinator",
    },
    {
      imageSrc: "/ahmadsaeed.jpg",
      name: "Ahmad Saeed Bhatti",
      position: "Joint Secretary",
    },
    {
      imageSrc: "/muhammadramzan.jpg",
      name: "Dr Muhammad Ramzan",
      position: "Member",
    },
  ];

  const executiveMembers = [
    {
      imageSrc: "/mehwish.jpg",
      name: "Syeda Mahwish Raees",
      position: "Director",
    },
    {
      imageSrc: "/iqra.jpg",
      name: "Iqra Ashraf",
      position: "Assistant Director",
    },
    {
      imageSrc: "/sahar.jpg",
      name: "Syeda Saher Shoaib",
      position: "Associate Director",
    },
    {
      imageSrc: "/laiba.jpg",
      name: "Laiba Iqbal",
      position: "Accounts Manager",
    },
    {
      imageSrc: "/shaina.jpg",
      name: "Shaina Safdar",
      position: "Administrator and HR Head",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 md:py-28">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative mb-8 md:mb-12 text-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/centre-1.jpg"
              alt="Background"
              fill
              className="object-cover object-center w-full h-full md:h-[500px] h-[200px]"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          {/* Content */}
          <div className="relative z-10 py-8 px-4 md:py-28 md:px-28 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold font-hand mb-4 md:mb-6">
              About Us
            </h1>
            <p className="text-sm md:text-base max-w-md md:max-w-3xl mx-auto">
              Autism Resource Centre Lahore (ARCL) is a dedicated non-profit
              organization committed to enhancing the lives of children with
              autism and related developmental disorders.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-8 md:mb-16 grid gap-8 md:grid-cols-2">
          <div className="p-4 md:p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md hover:bg-blue-950 hover:text-white transition duration-300">
            <h2 className="text-2xl md:text-4xl font-extrabold font-hand mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              At ARCL, our mission is to enhance the lives of children with
              autism by providing specialized care, therapy, and education.
            </p>
          </div>
          <div className="p-4 md:p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md hover:bg-blue-950 hover:text-white transition duration-300">
            <h2 className="text-2xl md:text-4xl font-extrabold font-hand mb-4 text-center">
              Our Vision
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Our vision at ARCL is to create an inclusive community where
              children with autism can thrive.
            </p>
          </div>
        </section>

        {/* Governing Body Members */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold font-hand text-blue-950 mb-4 md:mb-8 text-center">
            Governing Body Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {governingBodyMembers.map((member, index) => (
              <MemberCard
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </section>

        {/* Executive Body Members */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold font-hand text-blue-950 mb-4 md:mb-8 text-center">
            Executive Body Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {executiveMembers.map((member, index) => (
              <MemberCard
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </section>

        {/* Organogram */}
        <section className="mb-8 md:mb-16">
          <Organogram />
        </section>

        {/* Audits */}
        <section className="mb-8 md:mb-16">
          <Audits />
        </section>

        {/* Certifications Slider */}
        <section>
          <CertificationsSlider />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
