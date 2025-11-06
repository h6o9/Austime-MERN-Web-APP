import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

const ContactUs = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send Axios POST request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/contact-us",
        formData
      );

      // Show success message
      alert(response.data.message);
      console.log("Form submitted successfully:", response.data.data);

      // Reset the form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="py-8 bg-gray-100 mb-10 mt-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-10 font-hand">
          Contact Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-4">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone No.
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter Your Number Here."
                    className="w-full"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-800 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Map */}
          <Card className="h-full">
            <CardContent className="p-0 h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d435905.4420382967!2d74.284617!3d31.400037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900eb3219ff09%3A0x2c6e5f9511fbca1c!2sAutism%20Resource%20Center%20Lahore!5e0!3m2!1sen!2sus!4v1738164805379!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
