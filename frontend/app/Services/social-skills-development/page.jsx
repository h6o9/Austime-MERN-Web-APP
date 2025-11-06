import Link from "next/link";

const SocialSkillsDevelopment = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Social Skills Development
        </h1>

        {/* What is Social Skills Development? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Social Skills Development?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Social skills development focuses on helping students improve their
            ability to interact and communicate effectively with others. It
            helps students build healthy relationships, manage emotions, and
            develop the confidence needed to engage in social settings.
          </p>
        </div>

        {/* Benefits of Social Skills Development */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Social skills development provides the following benefits:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved communication and interpersonal skills.</li>
            <li>Enhanced emotional intelligence and self-awareness.</li>
            <li>Better conflict resolution abilities.</li>
            <li>Increased confidence in social situations.</li>
          </ul>
        </div>

        {/* Techniques Used */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Techniques Used
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Common techniques used in social skills development include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Role-playing activities to practice communication.</li>
            <li>Group discussions and peer interactions.</li>
            <li>Behavior modeling and reinforcement strategies.</li>
            <li>Encouraging emotional expression through art or writing.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Social skills development helps students not only succeed
            academically but also emotionally and socially. It lays the
            foundation for building positive relationships and adapting to
            various social environments.
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

export default SocialSkillsDevelopment;
