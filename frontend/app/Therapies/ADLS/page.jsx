// pages/therapies/occupational-therapy.jsx
import Link from "next/link";
import React from "react";

const OccupationalTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Activities of Daily Living Skills (ADLS)
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Activities of Daily Living Skills (ADLS)
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Activities of Daily Living Skills (ADLS) therapy focuses on teaching
            children with autism the basic skills needed to perform everyday
            tasks independently. These skills are vital for promoting
            independence and helping children take care of themselves in daily
            life.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Activities We Do Under ADLS
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Teaching how to brush teeth, wash hands, and comb hair.</li>
            <li>
              Training on dressing independently (e.g., buttoning a shirt,
              putting on shoes).
            </li>
            <li>Encouraging self-feeding using utensils.</li>
            <li>Learning how to clean up after meals or activities.</li>
            <li>Practicing proper table manners and basic social etiquette.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How it Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            ADLS therapy is structured to break down complex tasks into simple,
            manageable steps. The therapist guides the child through these tasks
            repeatedly, using modeling, prompts, and visual aids. This therapy
            emphasizes practice and reinforcement, enabling children to perform
            tasks like dressing, feeding, hygiene, and basic household chores.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive Occupational Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            ADLS therapy is essential for children who struggle with self-care
            tasks and independence. It’s ideal for children who need extra
            support in developing routine skills like dressing, eating, and
            personal hygiene. It helps children lead a more independent and
            functional life.
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

export default OccupationalTherapy;
