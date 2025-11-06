"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const TherapeuticSupport = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Therapeutic Support
        </h1>

        {/* What is Therapeutic Support? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Therapeutic Support?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Therapeutic support refers to interventions and therapies that focus
            on improving mental and emotional well-being. These services help
            individuals cope with stress, manage emotions, and address
            behavioral issues.
          </p>
        </div>

        {/* Benefits of Therapeutic Support */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Therapeutic support provides significant mental health benefits,
            such as:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Reduction of stress and anxiety.</li>
            <li>Improved emotional regulation.</li>
            <li>Development of coping strategies for difficult situations.</li>
            <li>Better interpersonal relationships.</li>
          </ul>
        </div>

        {/* Types of Therapeutic Approaches */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Therapeutic Approaches
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Common therapeutic approaches include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Cognitive Behavioral Therapy (CBT)</li>
            <li>Play Therapy</li>
            <li>Family Therapy</li>
            <li>Art Therapy</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Therapeutic support is vital in helping individuals improve their
            emotional and mental health, leading to a more fulfilling and
            balanced life.
          </p>
        </div>

        {/* Back to Home Button */}
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

export default TherapeuticSupport;
