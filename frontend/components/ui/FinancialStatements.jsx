import React from "react";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const FinancialStatements = () => {
  const statements = [
    { year: "2018", url: "/financials/2018.pdf" },
    { year: "2019", url: "/financials/2019.pdf" },
    { year: "2020", url: "/financials/2020.pdf" },
    { year: "2021", url: "/financials/2021.pdf" },
    { year: "2022", url: "/financials/2022.pdf" },
    { year: "2023", url: "/financials/2023.pdf" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <section className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-10 font-hand">
          Financial Statements
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-950/80 text-center">
          Access our annual financial statements to stay informed about our
          financial transparency and accountability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statements.map((statement) => (
            <Link
              key={statement.year}
              href={statement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-blue-950 flex items-center justify-between px-6 py-4 rounded-xl shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <FaFilePdf className="text-red-500 text-2xl group-hover:text-red-600" />
                <span className="text-lg font-semibold">
                  Financial Statements FY {statement.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FinancialStatements;
