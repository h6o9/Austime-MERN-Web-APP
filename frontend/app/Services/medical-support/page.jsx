import Link from "next/link";

const MedicalSupport = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Medical Support
        </h1>

        {/* What is Medical Support? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Medical Support?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Medical support ensures that students with health-related needs
            receive the necessary care while at school. This service provides
            assistance in managing chronic conditions, emergency health
            situations, and offering support to students with special medical
            needs.
          </p>
        </div>

        {/* Benefits of Medical Support */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Medical support provides the following benefits:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Ensures student health and safety during school hours.</li>
            <li>
              Helps manage chronic health conditions (e.g., asthma, diabetes).
            </li>
            <li>Immediate care for injuries or health emergencies.</li>
            <li>
              Provides health education and guidance for students and families.
            </li>
          </ul>
        </div>

        {/* Medical Support Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Medical Services Provided
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Medical support services include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>First-aid and injury treatment.</li>
            <li>Health screenings and regular check-ups.</li>
            <li>Emergency medical response services.</li>
            <li>Care plans for students with special medical needs.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Medical support plays a crucial role in ensuring students are safe,
            healthy, and ready to learn. By addressing health needs, we help
            students focus on their education without the worry of
            health-related challenges.
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

export default MedicalSupport;
