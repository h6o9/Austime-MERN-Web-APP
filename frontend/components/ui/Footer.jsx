"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    try {
      // Send Axios POST request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/newsletter",
        formData
      );

      // Show success message
      alert(response.data.message);
      console.log("Subscription successful:", response.data.data);

      // Reset the form
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response && error.response.data.message) {
        alert(error.response.data.message); // Display error message from backend
      } else {
        alert("An error occurred while subscribing.");
      }
    }
  };
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3">
              <Image
                src="/arcl logo.jpg"
                alt="Arcl Logo"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <h1 className="text-white text-2xl font-bold font-nunito">
                ARCL
              </h1>
            </div>
            <p className="text-sm mt-4">
              Autism Resource Centre Lahore (ARCL) was established in 2015 as a
              Not for Profit Company under The Societies Registration Act, 1860.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/autismresourcecentrelahore/"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://www.instagram.com/stories/autism_resource_center_lahore/"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://www.youtube.com/@autismresourcecentrelahore7553"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-bold font-hand mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary">
                  <i className="fa fa-map-marker-alt"></i>
                </span>
                <div>
                  <h5 className="text-2xl font-bold font-hand">Address</h5>
                  <p className="text-sm">
                    74 C2 Sector A, Phase 1, Engineers Town, Lahore.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary">
                  <i className="fa fa-envelope"></i>
                </span>
                <div>
                  <h5 className="text-2xl font-bold font-hand">Email</h5>
                  <p className="text-sm">Info@arcl.org.pk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary">
                  <i className="fa fa-phone-alt"></i>
                </span>
                <div>
                  <h5 className="text-2xl font-bold font-hand">Phone</h5>
                  <p className="text-sm">042-35248222,</p>
                  <p className="text-sm">0303-6655444,</p>
                  <p className="text-sm">0300-9575926</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-bold font-hand mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Home
                </Link>
              </li>
              <li>
                <Link href="/AboutUs" className="text-sm hover:text-primary">
                  {">"}About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Activites
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}NewsLetter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-2xl font-hand font-bold mb-4">
              Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-300 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-300 text-black"
              />
              <button className="w-full p-3 bg-red-600 text-white rounded hover:bg-blue-800 hover:text-black">
                Submit Now
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white mt-10 pt-5">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="#" className="text-white hover:text-blue-100">
              ARCL
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
