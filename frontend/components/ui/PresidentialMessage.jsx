import Image from "next/image";

const PresidentialMessage = () => {
  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Message Content */}
          <div className="px-6 lg:max-w-[55%]">
            <h2 className="text-4xl font-bold font-hand text-blue-950 mb-4">
              Presidential Message
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              ARCL, founded in 2015, is committed to providing compassionate
              care and support for children with autism. We believe autism is
              not a disease to be cured but a condition to be understood,
              managed, and embraced. Through personalized therapies such as
              speech, physical, and vocational training, we aim to help each
              child reach their full potential. Inspired by personal experience,
              our mission extends to creating a residential autism village to
              empower adults with autism, fostering independence and dignity. We
              invite you to support our cause and join us in building a more
              inclusive world for children and families affected by autism.
            </p>
            <p className="text-lg text-gray-700 mb-6">Sincerely,</p>
            <p className="text-lg text-gray-700 font-semibold">
              Dr. Ahmad faraz bhatti
            </p>
            <p className="text-lg text-gray-700">
              President, Autism Resource Center Lahore
            </p>
          </div>
          {/* President's Image */}
          <div className="mt-8 lg:mt-0 lg:ml-auto">
            <div className="relative h-[500px] w-[400px]">
              <Image
                src="/message.jpg"
                alt="President Name"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentialMessage;
