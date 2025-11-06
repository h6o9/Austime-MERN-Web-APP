import Link from "next/link";

const HomeService = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Home Service
        </h1>

        {/* What is Home Service? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Home Service?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Home services offer in-home support to students who require
            additional care, learning assistance, or other educational needs.
            This service brings the classroom experience into the home
            environment, ensuring students continue their educational journey.
          </p>
        </div>

        {/* Benefits of Home Service */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Home service offers various advantages:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Personalized education in the comfort of home.</li>
            <li>Assistance for students with disabilities or special needs.</li>
            <li>Convenient and flexible scheduling for families.</li>
            <li>Continued support without the need for travel.</li>
          </ul>
        </div>

        {/* Services Provided */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Services Offered
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            The home service includes:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>One-on-one tutoring sessions.</li>
            <li>Behavioral therapy and emotional support.</li>
            <li>Assistance with homework and projects.</li>
            <li>Customized learning plans for individual needs.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Home services provide a supportive and adaptable learning
            environment that allows students to thrive while staying in their
            home. It ensures that they do not miss out on essential learning
            opportunities.
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

export default HomeService;
