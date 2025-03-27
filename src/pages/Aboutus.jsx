import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbDeviceVisionPro } from "react-icons/tb";
import { SiTransmission, SiSitecore } from "react-icons/si";

export default function Aboutus() {
  // Hook to navigate programmatically
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
          About us
        </h1>
      </div>
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO3iupacf84VxMIQw6lp91CAvQJpczEiWuQAN8WPBFlUrv2gKDwxxoPRdZW3Me7OpWRM&usqp=CAU')] bg-no-repeat bg-center bg-cover h-80">
        <div className="text-white p-5 flex flex-col items-center justify-center backdrop-brightness-50 h-full">
          <h1 className="text-3xl font-medium pb-5">Our Achievement</h1>
          <p>
            Since 2003, EACC has secured convictions against 1,000 individuals,
            enhanced financial investigations and recovvered assets acquired
            through corruption. EACC has also developed a robust prevention
            strategy that has seen the development of the National Ethics and
            Anti-Corruption Policy, the National Anti-Corruption Campaign
            Steering Committee, the National Integrity Academy and the National
            Ethics and Anti-Corruption Policy.
          </p>
          <div className="flex flex-row mt-10 w-full justify-evenly">
            <span className="flex flex-col items-center">
              <span className="flex flex-row text-2xl items-center">
                <p className="font-semibold mr-1 text-4xl">32 </p> Billion
              </span>
              <p className="text-[#70A8F8]">Assets Recovered</p>
            </span>
            <span className="flex flex-col items-center">
              <p className="font-semibold mr-1 text-4xl">1,000 </p>
              <p className="text-[#70A8F8]">Convictions</p>
            </span>
            <span className="flex flex-col items-center">
              <span className="flex flex-row text-2xl items-center">
                <p className="font-semibold mr-1 text-4xl">300 </p> Billion
              </span>
              <p className="text-[#70A8F8]">Loses Averted</p>
            </span>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5 py-14 px-10">
        <div className="border rounded-lg shadow-xl h-60 w-60 relative">
          <span className="absolute -top-6 right-24 text-[#70A8F8]">
            <IoPersonCircleSharp size={40} />
          </span>
          <span className="flex justify-center flex-col text-center items-center py-5">
            <p className="text-lg font-medium mt-2 text-[#70A8F8]">Mandate</p>
            <p className="text-sm mt-5">To combat and prevent corruption, economic crime and unethical conduct in Kenya through law enforcement, prevention, promotion of standards and practices of integrity, ethic and anti-corruption.</p>
          </span>
        </div>
        <div className="border rounded-lg shadow-xl h-60 w-60 relative">
          <span className="absolute -top-6 right-24 text-[#70A8F8]">
            <TbDeviceVisionPro size={50} />
          </span>
          <span className="flex justify-center flex-col text-center items-center py-5">
            <p className="text-lg font-medium mt-2 text-[#70A8F8]">Vision</p>
            <p className="text-sm mt-5">An integrity driven Kenyan society.</p>
          </span>
        </div>
        <div className="border rounded-lg shadow-xl h-60 w-60 relative">
          <span className="absolute -top-4 right-24 text-[#70A8F8]">
            <SiTransmission size={30} />
          </span>
          <span className="flex justify-center flex-col text-center items-center py-5">
            <p className="text-lg font-medium mt-2 text-[#70A8F8]">Mission</p>
            <p className="text-sm mt-5">To promote integrity and combat corruption through law enforcement, prevention and education.</p>
          </span>
        </div>
        <div className="border rounded-lg shadow-xl h-60 w-60 relative">
          <span className="absolute -top-4 right-24 text-[#70A8F8]">
            <SiSitecore size={30} />
          </span>
          <span className="flex justify-center flex-col text-center items-center py-5">
            <p className="text-lg font-medium mt-2 text-[#70A8F8]">Core Values</p>
            <ul className="text-sm mt-5">
              <li>Integrity</li>
              <li>Professionalism</li>
              <li>Transparency</li>
              <li>Accountability</li>
              <li>Teamwork</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
