"use client";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Building2, Landmark, Heart, Star } from "lucide-react";
import Link from "next/link";
import axios from "axios";

const DonateNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [selectedFundType, setSelectedFundType] = useState("zakat");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/donate",
        formData
      );
      if (response.status === 200 || response.status === 201) {
        alert("Thank you for your Generous Donation!");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        alert("There was an issue submitting your donation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert(
        "An error occurred while submitting your donation. Please try again."
      );
    }
  };

  return (
    <div className="py-24 min-h-screen bg-gray-100">
      {/* How Your Donation Helps Section */}
      <div className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 font-hand text-left">
            How Your Donation Helps:
          </h1>
          <p className="text-lg mb-6 text-center">
            At the Autism Rehabilitation Center Lahore (ARCL), we empower
            children with autism through specialized care and therapies. Your
            support helps us create a brighter future for these children.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>Sponsor Therapy Programs:</strong> Help fund speech
              therapy, physical therapy, and vocational training tailored to
              each child’s needs.
            </li>
            <li>
              <strong>Build a Residential Autism Village:</strong> Support our
              vision of a long-term care facility for adults with autism.
            </li>
            <li>
              <strong>Upgrade Our Facilities:</strong> Maintain sensory rooms,
              therapy spaces, and educational areas for optimal care.
            </li>
            <li>
              <strong>Raise Awareness:</strong> Fund campaigns to reduce stigma
              and promote inclusivity for individuals with autism.
            </li>
          </ul>
          <h2 className="text-3xl font-bold font-hand mt-8 mb-4 text-left">
            Ways to Get Involved:
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>Become a Donor:</strong> Every contribution, big or small,
              makes a difference in a child’s life.
            </li>
            <li>
              <strong>Sponsor a Child:</strong> Provide access to education and
              therapy for a child in need.
            </li>
            <li>
              <strong>Volunteer:</strong> Share your skills and time to support
              our mission.
            </li>
          </ul>
          <h2 className="text-3xl font-hand font-bold mt-8 mb-4 text-left">
            Ways to Contribute:
          </h2>
          <p className="text-lg mb-6 font-bold text-left">
            Make a direct contribution via bank transfer
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-left">
            <li>Account Name: Autism Resource Centre Lahore</li>
            <li>Account Number: 0000 0000 1478 4462</li>
            <li>Bank: MCB Bank, Wapda Town Lahore</li>
            <li>Branch Code: [Insert code if applicable]</li>
          </ul>
          <p className="text-lg mb-6 text-left">
            Include your name as a reference when transferring funds.
          </p>
          <p className="text-lg mb-6 text-left font-bold">
            For questions or assistance, contact us:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-left">
            <li>Email: afbhatti1@yahoo.co.uk</li>
            <li>Phone: 042 35248222 | 0300 9579526 | 0303 6655444</li>
          </ul>
          <p className="text-lg mt-6 mb-6 text-center">
            Fill out the form below to ensure we process your donation promptly.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-4xl text-blue-950 font-hand font-bold text-left mb-6">
            I Want to Donate
          </h1>
          <p className="text-center mb-6">
            Complete the form below, and we’ll get in touch with you soon.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">
                First Name (required)
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Last Name (required)
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Phone Number (required)
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Email Address (required)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white p-2 rounded mt-4 hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
