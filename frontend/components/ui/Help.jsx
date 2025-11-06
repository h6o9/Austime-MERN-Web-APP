import Image from "next/image";

const HowWeHelp = () => {
  return (
    <section className="py-10 bg-blue-950 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-hand">How We Help</h2>
        <p className="mb-10 text-lg font-nunito">
          We work individually with each family to understand their specific
          needs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Educate */}
          <div className="bg-blue-950 p-6 rounded-lg">
            <div className="h-80 w-full relative overflow-hidden rounded-t-lg">
              <Image
                src="/help-1.jpg"
                alt="Educate"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-white text-xl font-extrabold mt-4 font-nunito">
              Educate
            </h3>
            <p className="mt-2 text-white font-nunito text-lg">
              We strive to improve the lives of our students through education
              of academic, behavioral, cognitive, and social skills.
            </p>
          </div>

          {/* Engage */}
          <div className="bg-blue-950 p-6 rounded-lg">
            <div className="h-80 w-full relative overflow-hidden rounded-t-lg">
              <Image
                src="/help-2.jpg"
                alt="Engage"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl text-white font-extrabold mt-4 font-nunito">
              Engage
            </h3>
            <p className="mt-2 text-white font-nunito text-lg">
              It is important to have teachers & therapists engaging students to
              learn and parents involved in both student programs and school
              activities.
            </p>
          </div>

          {/* Inspire */}
          <div className="bg-blue-950 p-6 rounded-lg">
            <div className="h-80 w-full relative overflow-hidden rounded-t-lg">
              <Image
                src="/help-3.jpg"
                alt="Inspire"
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl text-white font-extrabold mt-4 font-nunito">
              Inspire
            </h3>
            <p className="mt-2 text-white font-nunito text-lg">
              We strive to improve the lives of our students through education
              of academic, behavioral, cognitive, and social skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
