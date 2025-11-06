// components/MemberCard.js
import Image from "next/image";

const MemberCard = ({ imageSrc, name, position }) => {
  return (
    <div className="bg-white p-6 rounded-lg text-center">
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className="mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold font-hand text-blue-950">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default MemberCard;
