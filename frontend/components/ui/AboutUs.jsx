import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-26 bg-bl">
      <section className="relative bg-blue-950 text-white h-[500px] flex items-center justify-center">
        <Image
          src="/hero-image.jpg"
          alt="Admissions Hero"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-hand font-bold mb-4">About Autism</h1>
          <p className="text-lg">
            Autism is a spectrum of neurodevelopmental conditions that influence
            how individuals perceive, process, and respond to sensory
            information, social cues, and communication. Each person with autism
            has a unique set of strengths and challenges, highlighting the
            diversity within the spectrum
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* What is Autism */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font hand text-blue-950 mb-4">
            What is Autism
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Autism, also known as Autism Spectrum Disorder (ASD), is a
            developmental condition that affects how a person experiences and
            interacts with the world around them. It impacts communication,
            behavior, social interaction, and learning, and it varies
            significantly from person to person.
          </p>
        </div>

        {/* Understanding the Spectrum */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Understanding the Spectrum
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Autism is referred to as a "spectrum" because it presents
            differently in each individual. Some children with autism may have
            challenges in one area, while others may experience difficulties
            across multiple areas of development. It's important to understand
            that each child with autism is unique, with their own strengths,
            abilities, and needs.
          </p>
        </div>

        {/* Common Signs of Autism */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Common Signs of Autism
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            The signs of autism typically appear before the age of 3 and can
            include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>
              <h2 className="font-bold">Social Challenges:</h2>
              <span>
                {" "}
                Difficulty with eye contact, making friends, or understanding
                social cues. Communication Differences: Delayed speech
                development, difficulty with language, or challenges in starting
                or maintaining conversations.
              </span>
            </li>
            <li>
              <h2 className="font-bold">Repetitive Behaviors:</h2>
              <span>
                {" "}
                Engaging in repetitive movements or routines, such as
                hand-flapping, rocking, or insistence on sameness.
              </span>
            </li>
            <li>
              <h2 className="font-bold">Sensory Sensitivities:</h2>
              <span>
                {" "}
                Over- or under-sensitivity to sensory inputs such as lights,
                sounds, textures, or smells.
              </span>
            </li>
          </ul>
        </div>

        {/* Causes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Causes Of Autism
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            While the exact cause of autism is still not fully understood,
            research suggests that a combination of genetic and environmental
            factors may play a role. Autism does not have a single cause, and it
            is important to note that it is not caused by vaccines or parenting
            styles.
          </p>
        </div>

        {/* Incidence */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Incidence</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Since the mid-1990s, the number of children diagnosed with Autism
            Spectrum Disorder (ASD) has increased significantly. Although
            diagnostic facilities and records are limited in some regions, the
            prevalence of ASD is comparable worldwide.
          </p>
        </div>

        {/* Diagnosis */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Diagnosis</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Diagnosing autism requires careful observation by an experienced
            professional, as there are no medical or genetic tests that can
            detect it. Several screening instruments have been developed to aid
            in diagnosis, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Autism Diagnostic Observation Scale (ADOS)</li>
            <li>Autism Diagnostic Interview – Revised (ADI-R)</li>
            <li>Childhood Autism Rating Scale (CARS)</li>
            <li>The Checklist for Autism in Toddlers (CHAT)</li>
            <li>Diagnostic Statistical Manual – IV (DSM-IV)</li>
          </ul>
        </div>

        {/* Common Characteristics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold  text-blue-950 mb-4">
            Common Characteristics of Autism
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Individuals with autism may exhibit a range of characteristics,
            including challenges with social interactions, communication
            difficulties, repetitive behaviors, and unique strengths and
            differences. It's important to recognize that autism manifests
            differently in each individual.
          </p>
        </div>

        {/* Autism and Society */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Autism and Society
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Understanding and acceptance of autism have grown over the years,
            leading to better support and resources for individuals and families
            affected by the disorder. Early intervention and inclusive practices
            are essential in helping individuals with autism lead fulfilling
            lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
