import Link from "next/link";

const FinancialAssistance = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Financial Assistance
        </h1>

        {/* What is Financial Assistance? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Financial Assistance?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Financial assistance programs are designed to support students and
            families who are facing economic challenges. These programs offer
            financial support to ensure that every student has access to quality
            education, regardless of their financial background.
          </p>
        </div>

        {/* Benefits of Financial Assistance */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Financial assistance provides numerous advantages to students,
            including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>
              Increased access to education for families with limited resources.
            </li>
            <li>Reduction of financial stress for students and parents.</li>
            <li>
              Opportunity to focus on academic success rather than financial
              constraints.
            </li>
            <li>
              Increased participation in extracurricular activities and
              enrichment programs.
            </li>
          </ul>
        </div>

        {/* Types of Financial Assistance */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Types of Assistance
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Financial assistance can take several forms, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Scholarships</li>
            <li>Grants</li>
            <li>Loans</li>
            <li>Work-study programs</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Financial assistance is a critical resource that ensures every
            student has the opportunity to succeed academically, regardless of
            their financial situation. This support helps create a more
            inclusive educational environment.
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

export default FinancialAssistance;
