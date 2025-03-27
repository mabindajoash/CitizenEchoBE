import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

export default function Blog() {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle the back navigation
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  return (
    <div className="min-h-screen">
      <div className="h-32 bg-gradient-to-r from-[#3A3C5E] via-[#3A3C5E]">
        <span
          onClick={handleBack}
          className="p-2.5 text-white text-xs flex flex-row text-center hover:underline cursor-pointer"
        >
          <IoIosArrowBack className="mt-0.5" /> Back
        </span>
        <h1 className="flex items-center px-10 text-white text-6xl font-light">
          RESOURCES
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-xl font-semibold mb-5">
          Access Essential Resources on Anti-Corruption Laws and Whistleblower
          Protections
        </h1>
        <p>
          EACC has developed a robust prevention strategy that has seen the
          development of the National Ethics and Anti-Corruption Policy, the
          National Anti-Corruption Campaign Steering Committee, the National
          Integrity Academy, and the National Ethics and Anti-Corruption Policy.
        </p>

        {/* Table of Downloadable Resources */}
        <table className="mt-10 border-collapse border border-gray-300 w-full max-w-2xl text-left">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                Resource Title
              </th>
              <th className="border border-gray-300 px-4 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow-lg">
              <td className="border border-gray-300 px-4 py-2">
                UN Anti-Corruption Toolkit
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <a
                  href="/assets/UN Anti-Corruption toolkit.pdf"
                  download
                  className="flex flex-row items-center text-blue-500 hover:underline"
                >
                  <FaDownload />
                  Download PDF
                </a>
              </td>
            </tr>
            <tr className="shadow-lg">
              <td className="border border-gray-300 px-4 py-2">
                National Ethics Policy
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href="/assets/UN Anti-Corruption toolkit.pdf"
                  download
                  className="flex flex-row items-center text-blue-500 hover:underline"
                >
                  <FaDownload />
                  Download PDF
                </a>
              </td>
            </tr>
            <tr className="shadow-lg">
              <td className="border border-gray-300 px-4 py-2">
                Whistleblower Protections Guide
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href="/assets/UN Anti-Corruption toolkit.pdf"
                  download
                  className="flex flex-row items-center text-blue-500 hover:underline"
                >
                  <FaDownload />
                  Download PDF
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 pb-10">
          <a
            href="https://blogs.worldbank.org/en/governance/role-ethical-leadership-curbing-corruption"
            target="_blank"
            className='bg-[url("/assets/res1.jpg")] rounded-lg shadow-md'
          >
            <div className="w-full h-52"></div>
            <div className="p-4 text-center border-t backdrop-blur-md">
              <h1 className="text-xl font-semibold text-white">
                The role of ethical leadership in curbing corruption
              </h1>
              <p className="text-gray-300 text-sm">
                Corruption fuels transnational crime and conflict, displacing
                communities, and destabilizing governments...
              </p>
            </div>
          </a>
          <a
            href="https://blog.theaaci.com/the-importance-of-ethics-in-preventing-corruption/"
            className='bg-[url("/assets/res1.jpg")] rounded-lg shadow-md'
          >
            <div className="w-full h-52"></div>
            <div className="p-4 text-center border-t backdrop-blur-md">
              <h1 className="text-xl font-semibold text-white">
                The Importance of Ethics in Preventing Corruption
              </h1>
              <p className="text-gray-300 text-sm">
                Corruption is a pervasive issue worldwide and can take on many
                forms. Its detrimental effects...
              </p>
            </div>
          </a>
          <a
            href="https://blog.theaaci.com/the-importance-of-ethics-in-preventing-corruption/"
            className='bg-[url("/assets/res1.jpg")] rounded-lg shadow-md'
          >
            <div className="w-full h-52"></div>
            <div className="p-4 text-center border-t backdrop-blur-md">
              <h1 className="text-xl font-semibold text-white">
                The role of transparency and accountability in curbing
                corruption speech
              </h1>
              <p className="text-gray-300 text-sm">
                There is a general consensus that transparency - a situation in
                which information about a decision-making process is made
                publicly available...
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
