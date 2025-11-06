import {
  FaChalkboardTeacher,
  FaHandsHelping,
  FaUserGraduate,
  FaHospital,
  FaRegMoneyBillAlt,
  FaHouseDamage,
  FaUsers,
  FaBriefcaseMedical,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    name: "Specialized Education",
    slug: "specialized-education",
    icon: <FaChalkboardTeacher size={40} />,
  },
  {
    name: "Therapeutic Support",
    slug: "therapeutic-support",
    icon: <FaHandsHelping size={40} />,
  },
  {
    name: "Parent Training",
    slug: "parent-training",
    icon: <FaUserGraduate size={40} />,
  },

  {
    name: "Financial Assistance",
    slug: "financial-assistance",
    icon: <FaRegMoneyBillAlt size={40} />,
  },
  {
    name: "Home Services",
    slug: "home-services",
    icon: <FaHouseDamage size={40} />,
  },
  {
    name: "Social Skills Development",
    slug: "social-skills-development",
    icon: <FaUsers size={40} />,
  },
];

const Facilities = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-950 mb-10 font-hand">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-nunito">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/Services/${service.slug}`} // Directly linking to the individual page
              className="flex flex-col items-center text-center p-6 bg-white text-blue-950 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-950 hover:text-white"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
