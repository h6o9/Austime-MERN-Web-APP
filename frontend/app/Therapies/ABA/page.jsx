// pages/therapies/behavioral-therapy.jsx
import Link from "next/link";
import React from "react";

const BehavioralTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Applied Behavior Analysis (ABA)?
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Applied Behavior Analysis (ABA)?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Applied Behavior Analysis (ABA) is a well-established,
            evidence-based approach for teaching new skills and modifying
            problematic behaviors. It uses reinforcement strategies to encourage
            positive behavior and reduce negative or harmful behaviors.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of This Therapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved emotional regulation</li>
            <li>Development of coping strategies</li>
            <li>Reduction in disruptive behaviors</li>
            <li>Enhanced social and communication skills</li>
            <li>Better understanding of emotions and triggers</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How it Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            ABA therapy is highly individualized and uses positive reinforcement
            (like praise or rewards) to teach specific skills. It breaks down
            complex behaviors into smaller, manageable tasks and teaches them
            through repetition and reinforcement. ABA therapy also focuses on
            teaching self-control, communication, and adaptive behaviors.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive This Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            ABA is beneficial for children with autism who exhibit challenging
            behaviors (e.g., aggression, non-compliance) or have difficulty
            learning new skills. It is often used for children who need help
            with communication, socialization, and self-control. ABA is
            typically used in early childhood and can be adapted throughout a
            child's life.
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

export default BehavioralTherapy;
