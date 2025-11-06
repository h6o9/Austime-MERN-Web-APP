import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaTools,
  FaHandHoldingHeart,
  FaBrain,
  FaWalking,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const therapies = [
  {
    title: "Speech Language Pathology (SLP)",
    icon: <FaHandHoldingHeart size={40} />,
    path: "/Therapies/SLP",
  },
  {
    title: "Activities of Daily Living Skills (ADLS)",
    icon: <FaBrain size={40} />,
    path: "/Therapies/ADLS",
  },
  {
    title: "Physiotherapy (PT)",
    icon: <FaWalking size={40} />,
    path: "/Therapies/PT",
  },
  {
    title: "Applied Behavior Analysis (ABA)",
    icon: <MdSchool size={40} />,
    path: "/Therapies/ABA",
  },
  {
    title: "Occupational Therapy (OT)",
    icon: <IoIosPeople size={40} />,
    path: "/Therapies/OT",
  },
  {
    title: "Vocational Training (VT)",
    icon: <FaUserFriends size={40} />,
    path: "/Therapies/VT",
  },
];

const TherapiesPage = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-950 mb-12 font-hand">
          Our Therapies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {therapies.map((therapy, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={therapy.path} className="text-center">
                <div className="w-40 h-40 flex items-center justify-center bg-blue-950 hover:bg-blue-800 text-white rounded-full transition-colors duration-300">
                  {therapy.icon}
                </div>
                <p className="mt-4 text-lg font-semibold text-blue-950 w-40 text-center">
                  {therapy.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapiesPage;
