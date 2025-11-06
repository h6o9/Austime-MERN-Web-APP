import Link from "next/link";

const HealthAndSafety = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Health & Safety
        </h1>

        {/* What is Health & Safety? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Health & Safety?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Health and safety services focus on ensuring the well-being of
            students and staff within an educational environment. These services
            aim to prevent accidents and promote a healthy and safe learning
            atmosphere.
          </p>
        </div>

        {/* Benefits of Health & Safety Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Health and safety services offer the following benefits:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Prevention of accidents and injuries.</li>
            <li>Improved mental and physical well-being.</li>
            <li>Promotion of healthy lifestyle choices.</li>
            <li>Ensuring a safe environment for learning and growth.</li>
          </ul>
        </div>

        {/* Key Health & Safety Measures */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Key Measures
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Some of the key health and safety measures include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Regular health screenings and check-ups.</li>
            <li>First aid training for staff and students.</li>
            <li>Routine safety drills and emergency preparedness.</li>
            <li>Strict hygiene protocols to prevent illness outbreaks.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Health and safety services play a vital role in ensuring that
            students and staff are protected from harm. A well-maintained focus
            on health and safety enables a conducive learning environment.
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

export default HealthAndSafety;
