// pages/therapies/physical-therapy.jsx
import Link from "next/link";
import React from "react";

const PhysicalTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Physiotherapy (PT)
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Physiotherapy (PT)
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Physiotherapy (PT) helps children with autism develop and improve
            their physical abilities. This type of therapy is designed to work
            on movement, coordination, and balance, which are often areas of
            difficulty for children with autism.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Physiotherapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Increased mobility and flexibility</li>
            <li>Improved posture and body alignment</li>
            <li>Strengthening of muscles and joints</li>
            <li>Enhanced balance and coordination</li>
            <li>Pain relief and injury prevention</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How it Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            PT uses physical exercises and activities to improve motor skills
            and mobility. The therapist may incorporate games and activities
            that focus on strengthening muscles, improving posture, and
            enhancing motor coordination. Therapy often includes exercises to
            improve gross motor skills (e.g., walking, running) and fine motor
            skills (e.g., writing, handling small objects).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive This Therapy
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            PT is recommended for children who have difficulty with movement,
            balance, or coordination. If a child has issues with motor planning
            (the ability to plan and execute movements), PT can help them
            improve these skills. It’s also beneficial for children who are late
            to walk or have poor posture or muscle strength.
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

export default PhysicalTherapy;
