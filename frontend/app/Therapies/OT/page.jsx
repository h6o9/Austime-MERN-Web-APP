// pages/therapies/awareness-campaigns.jsx
import Link from "next/link";
import React from "react";

const AwarenessCampaigns = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Occupational Therapy (OT)
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Occupational Therapy (OT)
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Occupational Therapy (OT) helps children with autism develop the
            skills they need to perform everyday activities. OT focuses on
            improving fine motor skills, sensory processing, and the ability to
            engage in daily tasks
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Occupational Therapy (OT)
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Increased knowledge on key issues</li>
            <li>Encourages community engagement</li>
            <li>Reduces stigma around sensitive topics</li>
            <li>Promotes healthier lifestyles and behaviors</li>
            <li>Empowers individuals to make informed decisions</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How it Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            OT helps children practice activities like writing, drawing, using
            utensils, and other fine motor tasks. Therapists also work on
            improving sensory processing issues, helping children cope with
            sensory overload or difficulties with touch, sound, or light. OT
            uses both structured exercises and playful activities to engage
            children and help them learn new skills.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When to Receive This Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            OT is ideal for children who have trouble with fine motor skills or
            who are sensitive to sensory stimuli. It is also beneficial for
            children who struggle with activities like writing, using scissors,
            dressing, or managing sensory challenges in the environment.
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

export default AwarenessCampaigns;
