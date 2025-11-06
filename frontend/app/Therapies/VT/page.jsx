// pages/therapies/parent-training.jsx
import Link from "next/link";
import React from "react";

const ParentTraining = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Vocational Training (VT)
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Vocational Training (VT)
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Vocational Training (VT) helps older children and young adults with
            autism learn the skills necessary for employment. This therapy
            focuses on teaching job-related skills, work habits, and social
            interactions that will support their future employment
            opportunities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of This Therapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved communication with children</li>
            <li>Effective behavior management strategies</li>
            <li>Enhanced understanding of child development</li>
            <li>Strengthened parent-child bonds</li>
            <li>Empowerment to support children’s learning</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How it Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            VT focuses on teaching practical, real-world job skills in a
            structured and supportive environment. Therapists work with children
            and young adults to help them develop appropriate workplace
            behaviors, such as following instructions, working in teams, and
            managing time effectively. Vocational skills are taught through
            hands-on activities, job simulations, and internships in a variety
            of fields.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When To Recieve This Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Vocational Training is most beneficial for older children, teens, or
            young adults with autism who are approaching adulthood and may be
            looking to enter the workforce. It is ideal for those who need to
            develop skills for future employment or become more independent in a
            work environment.
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

export default ParentTraining;
