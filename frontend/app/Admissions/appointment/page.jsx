"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const Appointment = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phoneNumber: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send Axios POST request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/appointment",
        formData
      );

      // Show success message
      alert(response.data.message);
      console.log("Appointment booked successfully:", response.data.data);

      // Reset the form
      setFormData({
        parentName: "",
        studentName: "",
        phoneNumber: "",
        email: "",
        preferredDate: "",
        preferredTime: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response && error.response.data.message) {
        alert(error.response.data.message); // Display error message from backend
      } else {
        alert("An error occurred while booking the appointment.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-gray-100 py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-4xl font-hand font-bold text-blue-950 mb-8 text-center">
          Book an Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent's Name</Label>
              <Input
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentName">Student's Name</Label>
              <Input
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select
                name="preferredTime"
                onValueChange={(value) =>
                  handleChange({ target: { name: "preferredTime", value } })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full bg-blue-950 text-white hover:bg-blue-800"
            >
              Book Appointment
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Appointment;
