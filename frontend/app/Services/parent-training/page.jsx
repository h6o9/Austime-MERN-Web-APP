import Link from "next/link";

const ParentTraining = () => {
  return (
    <section className="bg-white py-32 bg-bl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-hand font-extrabold text-blue-950 text-center mb-8">
          Parent Training
        </h1>

        {/* What is Parent Training? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Parent Training?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Parent training provides guidance and support to parents in managing
            their child’s behavior, learning needs, and emotional challenges. It
            empowers parents with tools and strategies to promote positive
            development at home.
          </p>
        </div>

        {/* Benefits of Parent Training */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Benefits</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Parent training offers numerous benefits to families, such as:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved child behavior and learning outcomes.</li>
            <li>Stronger parent-child relationships.</li>
            <li>Better communication and conflict resolution skills.</li>
            <li>Increased parental confidence in handling challenges.</li>
          </ul>
        </div>

        {/* Approaches to Parent Training */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Approaches</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Parent training can include various methods such as:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Positive reinforcement strategies.</li>
            <li>Setting clear expectations and boundaries.</li>
            <li>Effective discipline techniques.</li>
            <li>Parenting support groups for shared experiences.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Parent training plays a crucial role in enhancing the development of
            children while promoting a positive family dynamic. It helps parents
            navigate the challenges of raising children in a supportive and
            effective way.
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

export default ParentTraining;
