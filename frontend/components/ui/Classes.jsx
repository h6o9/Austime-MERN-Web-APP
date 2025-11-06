"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const classesData = [
  {
    title: "Drawing Classes",
    image: "/portfolio-4.jpg",
    description: "Develop creativity with our engaging drawing classes.",
    details: {
      age: "5-10 years",
      seats: 20,
      duration: "3 months",
      fee: "$50 per month",
    },
  },
  {
    title: "Language Learning",
    image: "/portfolio-5.jpg",
    description: "Learn new languages with fun and interactive sessions.",
    details: {
      age: "8-14 years",
      seats: 25,
      duration: "6 months",
      fee: "$60 per month",
    },
  },
  {
    title: "Basic Science",
    image: "/portfolio-3.jpg",
    description: "Explore the wonders of science with hands-on experiments.",
    details: {
      age: "10-15 years",
      seats: 30,
      duration: "4 months",
      fee: "$70 per month",
    },
  },
];

const Classes = () => {
  return (
    <section className="bg-white text-blue-950 py-26">
      <section className="relative bg-blue-950 text-white h-[500px] flex items-center justify-center">
        <Image
          src="/hero-image.jpg"
          alt="Admissions Hero"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-hand font-bold mb-4">Classes</h1>
          <p className="text-lg">
            Begin your journey with the first step in the right direction.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto text-center">
        <p className="py-12 text-2xl mb-12">
          Explore our diverse range of classes designed to enhance creativity,
          learning, and growth.
        </p>

        {/* Carousel */}
        <Carousel className="relative w-full">
          <CarouselContent className="flex w-full md:basis-1/2 lg:basis-1/3">
            {classesData.map((classInfo, index) => (
              <CarouselItem
                key={index}
                className="w-full p-6  shadow-lg rounded-lg md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={classInfo.image}
                  alt={classInfo.title}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4 mx-auto"
                />
                <h3 className="text-2xl font-semibold text-blue-950 mb-2">
                  {classInfo.title}
                </h3>
                <p className="text-blue-950 mb-6">{classInfo.description}</p>

                {/* Table */}
                <div className="text-blue-950 overflow-x-auto flex justify-center">
                  <Table className="w-full max-w-full table-auto text-left border-collapse">
                    <TableHeader>
                      <TableRow className="text-white items-center">
                        <TableHead>Age</TableHead>
                        <TableHead>Seats</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Tuition Fee</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{classInfo.details.age}</TableCell>
                        <TableCell>{classInfo.details.seats}</TableCell>
                        <TableCell>{classInfo.details.duration}</TableCell>
                        <TableCell>{classInfo.details.fee}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full hover:bg-yellow-300" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full hover:bg-yellow-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default Classes;
