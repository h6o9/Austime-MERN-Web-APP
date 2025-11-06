"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import EventModal from "./EventModal"; // Make sure to create this component

const Activities = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const events = [
    {
      id: 1,
      title: "Annual Charity Dinner 2024",
      date: "March 15, 2024",
      image: "/Thumbnails/MOU Signed.jpg",
      slug: "annual-charity-dinner-2024",
      description:
        "We welcomed Alkhidmat's Vice President, Sir Mushtaq Mangat and the team members of Alkhidmat Foundation Pakistan The signing of our MOU (Memorandum of understanding) paves the way for collaborative efforts in supporting individuals with autism",
    },
    {
      id: 2,
      title: "Empowering Future Leaders",
      date: "January 29, 2024",
      image: "/Thumbnails/Event 2.jpg",
      slug: "medical-camp-2024",
      description:
        "We are proud to share that our Director, Syeda Mehwish Raees, was invited as a guest speaker at Alkhidmat’s event, where she had the opportunity to inspire and empower the next generation of leaders. During her session, she shared valuable insights, experiences, and guidance, encouraging young minds to embrace leadership, personal growth, and community service.",
    },
    {
      id: 3,
      title: "Unforgettable Moments at Qaddafi Stadium",
      date: "January 27, 2024",
      image: "/Thumbnails/Event 3.jpg",
      slug: "youth-leadership-2024",
      description: `Our special needs kids lit up Trust School’s Sports Day at Qaddafi Stadium with their incredible energy, enthusiasm, and talent! It was a heartwarming sight to see them participate with confidence, showcasing their abilities and enjoying every moment of the event.

A huge thank you to Trust School for promoting inclusivity and providing our children with this wonderful opportunity to shine. Events like these help create a more accepting and supportive society, where every child gets a chance to thrive. We cherish these unforgettable moments and look forward to more such inclusive initiatives!`,
    },
    {
      id: 4,
      title: "Spreading Autism Awareness",
      date: " January 24, 2024",
      image: "/Thumbnails/Event 4.jpg",
      slug: "spreading-autism-awareneness-2024",
      description: `
      I feel truly blessed to have had the opportunity to share my passion for Autism Awareness with the incredible team at The Trust School. It was an enlightening and engaging session where we discussed the importance of understanding, acceptance, and inclusivity for children with autism. The enthusiasm and eagerness to learn displayed by the team were truly inspiring, reaffirming the power of knowledge in creating a more supportive and accommodating environment.

      A heartfelt thank you to Mam Saira, whose dedication and commitment to this cause serve as a beacon of inspiration. Her leadership and passion for inclusivity are shaping a brighter future for children with special needs. The warm hospitality and genuine willingness to embrace new perspectives made this experience deeply rewarding.

      Together, we can continue to empower one another, advocate for inclusivity, and make a meaningful difference in the lives of children with autism. This is just the beginning of a journey toward a more accepting and compassionate society!
    `,
    },
    {
      id: 5,
      title: "A Day of Joy and Laughter",
      date: "January 17, 2024",
      image: "/Thumbnails/Event 5.jpg",
      slug: "education-outreach-2024",
      description: `Every child deserves a day filled with pure fun, excitement, and laughter, and our special needs kids experienced just that at the funfair! It was a heartwarming sight to see them exploring, playing, and fully enjoying every moment of the event. From colorful rides and engaging games to delicious treats and cheerful music, the day was packed with endless smiles and unforgettable memories.

This funfair was more than just a recreational event—it was an opportunity to foster inclusivity, confidence, and joy for our children, allowing them to interact, express themselves, and feel a part of something truly special. Their happiness and enthusiasm reminded us of the importance of creating spaces where every child, regardless of their abilities, can participate and thrive.

We are incredibly grateful to everyone who helped make this event possible, ensuring that our children had a day to cherish. Seeing their faces light up with joy was the greatest reward, and we look forward to organizing more such experiences that celebrate their uniqueness and bring them endless happiness!`,
    },
    {
      id: 6,
      title: "Exciting Two-Day Trip to Emporium Mall ",
      date: "December 26, 2024",
      image: "/Thumbnails/Event 6.jpg",
      slug: "cleanup-drive-2024",
      description: `Our students had an unforgettable two-day trip to Emporium Mall, filled with fun, laughter, and memorable experiences! The visit provided an excellent opportunity for them to explore, socialize, and enjoy a variety of activities in a vibrant and engaging environment.

From exciting rides at the Fun Factory to indulging in delicious treats and experiencing the lively atmosphere of the mall, every moment was filled with joy and excitement. The trip also allowed the students to develop social and sensory skills in a real-world setting, making it both an educational and enjoyable experience.

A huge thank you to everyone who made this trip possible, ensuring our students had a safe, inclusive, and fun-filled adventure. We look forward to more such enriching outings that bring smiles to their faces!`,
    },
    {
      id: 7,
      title: "Celebrating 10 Years of ARCL",
      date: "November 30, 2024",
      image: "/Thumbnails/Event 7.jpg",
      slug: "tech-workshop-2024",
      description: `November 30 marked a significant milestone as we celebrated 10 years of ARCL, reflecting on a decade of dedication, perseverance, and impact in the lives of children with special needs. This anniversary was more than just a celebration; it was a moment to recognize the progress made, the challenges overcome, and the future we continue to build.

To commemorate this occasion, our center underwent a thoughtful renovation, symbolizing renewed commitment, fresh opportunities, and a stronger foundation for supporting our children. The transformed space represents our vision for growth, inclusivity, and excellence in special education and care.

A key highlight of the event was the award ceremony, where we honored the dedication of our team members, educators, and supporters who have played a crucial role in ARCL’s journey. The event was graced by our esteemed board members, our dedicated director, and distinguished guests, whose words of encouragement reinforced the significance of our mission.

The day was filled with meaningful reflections, inspiring discussions, and a shared sense of accomplishment as we looked back at our journey and reaffirmed our purpose. This celebration was not just about the past but also about the promise of the future—a future where we continue to break barriers, nurture potential, and create lasting change.

With renewed energy and determination, we step into the next decade, committed to advancing our mission and making a profound difference in the lives of our children and their families.`,
    },
    {
      id: 8,
      title: "Honored to be a Part of Al-Khidmat Youth Gathering 9.0",
      date: "November 20, 2024",
      image: "/Thumbnails/Event 8.jpg",
      slug: "arts-festival-2024",
      description: `The ARCL team had the privilege of joining the Al-Khidmat Youth Gathering 9, and it was truly an inspiring experience! We were thrilled to meet such dedicated professionals and compassionate individuals who are working tirelessly to make a difference.
A special mention to:
Sadia Naz, Principal of TTI, for her impactful leadership.
Amna Waseem and Mariam from the Mariyam Foundation, whose efforts are truly commendable.
The incredible team of Hum Mashaale Raha, spreading light and hope through their work.
We were deeply moved by the talented students of Hamza Foundation, who showcased their powerful paintings reflecting the pain and resilience of Gaza. Their art spoke volumes and touched every heart present.
A heartfelt thank you to Al-Khidmat for giving us this amazing opportunity to connect, learn, and grow together. Here’s to more collaborations and collective efforts for a brighter future!`,
    },
  ];

  const workshops = [
    {
      id: 1,
      title: "Healthcare Professional Training",
      date: "May 5, 2024",
      image: "/Thumbnails/Workshop 1.jpg",
      slug: "healthcare-training-2024",
      description: `Autism Resource Centre Lahore Welcomed the participants of GOVT. IN-SERVICE TRAINING COLLEGE FOR THE TEACHERS OF DISABLED CHILDREN LAHORE.
Our centre facilitated a knowledge sharing visit with participants of training on "Capacity Building of Teachers & professionals for education & Rehabilitation of children with autism spectrum disorder (ASD), (Batch-II)`,
    },
    {
      id: 2,
      title: "OMM Workshop",
      date: "January 31, 2024",
      image: "/Thumbnails/Workshop 2.jpg",
      slug: "community-service-2024",
      description:
        "On January 31, our experts conducted an insightful session on Oral Motor Mechanism (OMM) for parents, equipping them with valuable knowledge and practical strategies to support their child's speech and language development. Through interactive discussions and expert guidance, parents gained a deeper understanding of how OMM impacts communication skills and learned effective techniques to enhance their child's oral motor abilities. This session aimed to empower parents with the tools necessary to foster better speech and language outcomes in their children.",
    },
    {
      id: 3,
      title: "Empowering ARCL Staff with Behavior Management Techniques",
      date: "January 13, 2024",
      image: "/Thumbnails/Workshop 3.jpg",
      slug: "Behavior-Management-Techniques",
      description: `Our Director, Syeda Mehwish Raees, successfully spearheaded a comprehensive 2-day training workshop on Reinforcement and Punishment, equipping ARCL staff with essential Behavior Management techniques. This interactive and insightful session provided participants with the tools to foster positive behaviors while effectively addressing undesirable actions in diverse settings.

Through engaging discussions and hands-on activities, participants developed a deeper understanding of:

✔ Positive and negative reinforcement strategies to encourage desired behaviors
✔ Effective application of positive and negative punishment to reduce unwanted actions

This workshop served as a valuable platform for ARCL staff to enhance their skills, share experiences, and gain practical insights to implement in their professional roles. By strengthening their expertise in behavior management, the team is now better equipped to create a more structured, supportive, and positive learning environment.`,
    },
    {
      id: 4,
      title: "Open Discussion on Fee Revision & Extended Timing",
      date: "January 13, 2024",
      image: "/Thumbnails/Workshop 4.jpg",
      slug: "mental-health-2024",
      description: `Our Director, Syeda Mehwish Raees, conducted an important meeting with parents to discuss the revision of fees and extended timings at our center. The session provided a transparent platform for parents to voice their concerns, share feedback, and gain a clear understanding of the adjustments being made to enhance our services.

During the meeting, our director emphasized the importance of these changes in improving the quality of education and care provided to the children. Parents were encouraged to share their thoughts, suggestions, and concerns, fostering an open dialogue that strengthened the collaborative relationship between our team and families.

We truly appreciate the engagement, support, and valuable feedback from our parents, as their insights play a crucial role in shaping the best possible learning environment for their children. Moving forward, we remain committed to maintaining transparency, quality, and inclusivity in all aspects of our center’s operations.`,
    },
  ];

  return (
    <div className="pt-16">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-b from-blue-950 to-blue-950 py-48">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-hand font-bold text-center text-white mb-4">
            Activities
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover events and workshops that inspire growth and connection.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        {/* Events Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold font-hand text-blue-950">
              Events
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative h-36">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-3 flex-grow">
                      <h4 className="text-lg font-semibold text-blue-950 mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold font-hand text-blue-950">
              Workshops
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                onClick={() => handleEventClick(workshop)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative h-36">
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-3 flex-grow">
                      <h4 className="text-lg font-semibold text-blue-950 mb-1">
                        {workshop.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {workshop.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        {workshop.location}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />
    </div>
  );
};

export default Activities;
