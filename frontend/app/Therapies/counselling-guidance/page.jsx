// pages/therapies/counseling-guidance.jsx
import Link from "next/link";
import React from "react";

const CounselingGuidance = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Counseling and Guidance
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Counseling and Guidance?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Counseling and guidance provide emotional and psychological support
            to individuals, helping them navigate challenges and make informed
            decisions about their personal and academic lives.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Counseling and Guidance
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved emotional well-being</li>
            <li>Better decision-making skills</li>
            <li>Enhanced self-awareness</li>
            <li>Reduced anxiety and stress</li>
            <li>Improved academic and social performance</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Counseling and Guidance Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Counselors use active listening, empathy, and evidence-based
            techniques to provide support and guidance. Sessions may include
            discussions, role-playing, and activities to address personal and
            academic challenges.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CounselingGuidance;
