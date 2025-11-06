"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const Admissions = () => {
  return (
    <main className="bg-white min-h-screen py-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-950 to-blue-950 py-48">
        {" "}
        {/* Increased py-32 to py-48 */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-hand font-bold text-center text-white mb-4">
            Admissions
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your child's journey with us- Take the first step
          </p>
        </div>
      </div>

      {/* Admissions Procedure */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-950">
                Registration
              </h3>
              <p className="text-gray-700 mb-6">
                Online registration is available via our{" "}
                <Link
                  href="/Admissions/onlineEnrollment"
                  className="text-blue-950"
                >
                  registration page
                </Link>
                . Alternatively, you can visit the school office for in-person
                registration.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  variant="default"
                  className="bg-blue-950 text-white hover:bg-blue-500 transition-colors w-48"
                >
                  <Link href="/Admissions/appointment">
                    Book an Appointment
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-950">
                Student Admission Policy
              </h3>
              <p className="text-gray-700">
                The application process begins as soon as parents approach for
                admission.
              </p>
              <h3 className="font-bold mb-2 mt-2 text-blue-950">
                Psychological Assessment
              </h3>
              <p className="text-gray-700">
                A certified psychologist will attend to the parents and assess
                the child. Based on the child’s situation, the psychologist will
                recommend the relevant therapist or head therapist for further
                support.
              </p>
              <h3 className="font-bold mb-2 mt-2 text-blue-950">
                Admission Form
              </h3>
              <p className="text-gray-700">
                If the parents agree to pay the full admission fee, they will
                receive the admission form from the accounts department and
                follow the necessary instructions.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-950">
                Subsidy On Admission Policy
              </h3>

              <h3 className="font-bold mb-2 mt-2 text-blue-950">
                Subsidy Request Process
              </h3>
              <p className="text-gray-700">
                Parents requesting a subsidy must provide copies of utility
                bills and any other relevant documents. Upon receipt of this
                information, one of our agents will visit the parent’s home to
                make an assessment report based on the visit and provided
                information.
              </p>
              <h3 className="font-bold mb-2 mt-2 text-blue-950">BOG Review</h3>
              <p className="text-gray-700">
                The case will then be discussed in the Board of Governors (BOG)
                meeting. The BOG will decide whether a subsidy can be granted,
                and if so, how much subsidy will be offered.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-950">
                Admission Requirements
              </h3>
              <p className="text-gray-700">
                Please ensure the following documents are submitted to complete
                the admission process:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  2 recent passport-sized photographs of the student with a
                  white background.
                </li>
                <li>
                  Copy of the student's Form-B or Birth Certificate issued by
                  NADRA.
                </li>
                <li>Copy of the parent's/guardian's CNIC.</li>
                <li>
                  Any medical records or special needs documentation (if
                  applicable).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="pt-0 pb-4 px-6 bg-white">
        {" "}
        {/* Reduced top padding to pt-4 */}
        <div className="max-w-7xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-white text-blue-950 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 te">
                Morning Session
              </h3>
              <p className="text-gray-700 mb-4">Timing: 8:00 AM - 11:30 AM</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Ideal for early learners</li>
                <li>Focused morning energy</li>
                <li>Comprehensive morning curriculum</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-950">
                Evening Session
              </h3>
              <p className="text-gray-700 mb-4">Timing: 12:00 PM - 3:00 PM</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Flexible afternoon timings</li>
                <li>Suitable for working parents</li>
                <li>Comprehensive afternoon curriculum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
