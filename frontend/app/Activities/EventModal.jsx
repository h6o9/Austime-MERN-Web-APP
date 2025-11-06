import React from "react";
import Image from "next/image";

const EventModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  // Replace line breaks with <br /> tags
  const formattedDescription = event.description.replace(/\n/g, "<br />");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      {/* Modal Container with custom-scrollbar class */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Thumbnail Image */}
        <div className="relative h-48 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-t-lg"
          />
        </div>
        {/* Event Details */}
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-950 mb-4">
            {event.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            {event.date} | {event.location}
          </p>
          <p
            className="text-sm sm:text-base text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          />
        </div>
        {/* Close Button */}
        <div className="sticky bottom-0 bg-white p-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
