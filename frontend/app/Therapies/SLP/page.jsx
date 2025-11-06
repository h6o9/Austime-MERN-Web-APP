// pages/therapies/speech-therapy.jsx
import React from "react";
import Link from "next/link";

const SpeechTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Speech Language Pathology (SLP)
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Speech Language Pathology (SLP)?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Speech therapy helps students improve their communication skills,
            focusing on speech sound production, language development, fluency,
            and social communication. It includes exercises and activities
            designed to enhance speech and language abilities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Speech Language Pathology (SLP)
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved articulation and speech clarity</li>
            <li>Better understanding and use of language</li>
            <li>Increased confidence in communication</li>
            <li>Enhanced social interaction and conversation skills</li>
            <li>Addressing stuttering and fluency issues</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How it Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            SLP therapy uses a variety of techniques to improve speech and
            language. This might include teaching children how to form words,
            use sentences, understand language, and use communication aids (such
            as picture symbols or devices). The therapy often includes working
            on social communication skills like taking turns in conversation,
            maintaining eye contact, and understanding body language.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When to Receive This Therapy
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Children should receive speech therapy if they have difficulty
            speaking clearly, understanding spoken language, or using language
            in appropriate social situations. It’s particularly beneficial for
            those who have delayed speech development or struggle to make
            themselves understood. Early intervention is crucial for optimal
            outcomes.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:text-black transition-colors"
          >
            Back to Therapies List
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeechTherapy;
