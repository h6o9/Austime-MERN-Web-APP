import Image from "next/image";

const Organogram = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <section className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-12 font-hand">
          Organizational Structure
        </h2>
        <div className="relative w-full h-[400px]">
          <Image
            src="/organogram.jpg"
            alt="Nishtarian Society UK Organizational Structure"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Organogram;
