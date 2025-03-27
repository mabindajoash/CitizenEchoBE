import React, { useState, useEffect, useRef } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { TbTopologyStar3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import Marquee from "../components/marquee";

export default function Home() {
  // Reference to the section to scroll to
  const scrollToSectionRef = useRef(null);

  // Array of image paths for the hero section
  const images = [
    "/assets/quote1.jpg",
    "/assets/quote3.jpg",
    "/assets/quote2.jpg",
  ];
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle scrolling to the target section
  const handleScroll = () => {
    scrollToSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Effect to change the hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Array of quotes to display
  const quotes = [
    {
      name: "Albert Einstein",
      body: "'The world will not be destroyed by those who do evil, but by those who watch them without doing anything.'",
    },
    {
      name: "Martin Luther King Jr",
      body: "'Our lives begin to end the day we become silent about things that matter.'",
    },
    {
      name: "William Faulkner",
      body: "'Never be afraid to raise your voice for honesty and truth and compassion against injustice and lying and greed.'",
    },
  ];
  return (
    <div className="min-h-[100vh] mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-2 h-[30rem] mb-10">
        <div className="flex flex-col ml-16 justify-center">
          <h1 className="text-5xl mb-10 text-[#212529]">
            Welcome to Citizen echo where your voice has the power to create
            <p className="underline decoration-wavy decoration-[0.6rem] decoration-[#70A8F8]">
              change.
            </p>
          </h1>
          <p className="text-[#5A5D60]">
            Join us in the fight for integrity and accountability. Together,
            let’s make a difference. Speak up, stand tall, and help protect the
            future.
          </p>
          {/* Scroll to section when button is clicked */}
          <button
            onClick={handleScroll}
            className="bg-[#70A8F8] animate-bounce rounded-full w-40 px-4 py-3 mt-8"
          >
            Get started
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={images[currentImageIndex]}
            alt="hero"
            className="transition-opacity shadow-2xl shadow-[#474973] duration-1000 rounded-full flex justify-center ease-in-out h-96 w-96"
          />
        </div>
      </div>

      {/* Target Section to Scroll to */}
      <div
        className="bg-[#F0F2F5] text-[#141E2E] text-center flex flex-col justify-evenly items-center h-[30rem] px-16 my-20 rounded-tl-full rounded-br-full"
      >
        <div className="flex flex-row border items-center rounded-full border-[#E2E4E5] py-2 px-4 bg-white">
          <FaCircleInfo />
          <p className="mx-1">What do you want to report?</p>{" "}
          <Link
            to="/resources"
            className="text-[#70A8F8] ml-3 flex flex-row items-center"
          >
            Learn now <GrFormNextLink />
          </Link>
        </div>
        <div>
          <h1 className="text-6xl">Discover our reporting solutions</h1>
        </div>
        <div>
          <p className="">
            Our whistleblower service offers a secure and anonymous way for
            employees to report misconduct. We prioritize your safety and
            confidentiality, ensuring that your voice is heard without fear of
            retaliation. Our commitment to ethical practices helps foster a
            culture of trust and accountability in your organization.
          </p>
        </div>
        <div className="flex flex-row space-x-3 font-medium">
          <Link
            to="/resources"
            className="rounded-full py-2 px-4 text-[#212529] bg-[#6FA8F8]"
          >
            Learn more
          </Link>
          <Link
            to="/contactus"
            className="rounded-full py-2 text-white px-4 bg-[#474973]"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Other Sections */}
      <div className="grid grid-cols-2 h-[30rem] gap-5 mb-28 mx-10">
        <div className="border-b">
          <h1 className="text-4xl mb-10 text-[#212529] flex flex-row ">
            Features
            <p className="mx-2 underline decoration-wavy decoration-[#70A8F8]">
              showcase
            </p>
          </h1>
          <p className="text-[#5A5D60]">
            Our platform is designed to provide a seamless experience for both
            whistleblowers and organizations. We offer a range of features that
            ensure the safety and confidentiality of your reports. Here are some
            of the key features that make our platform stand out.
          </p>
          <ul className="list-disc list-inside mt-5 md:space-y-3">
            <li>Secure and anonymous reporting</li>
            <li>Customizable reporting forms</li>
            <li>Real-time notifications</li>
            <li>Case management tools</li>
            <li>Compliance with data privacy regulations</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/image.jpg"
            alt="image"
            className="rounded-xl h-96 w-auto"
          />
        </div>
      </div>

      <div ref={scrollToSectionRef} className=" flex justify-start flex-col items-center">
        <span className="flex flex-row space-x-3 mb-8 items-center">
          <TbTopologyStar3 /> What We Offer
        </span>
        <div className="grid grid-cols-1 text-[#212529] md:grid-cols-3 gap-4 md:mx-10 md:mb-28">
          <div className="flex flex-col space-y-5">
            <h1 className="text-6xl text-[#70A8F8]">1</h1>
            <p className="border-b"></p>
            <h2 className="font-medium text-3xl ">Submitting a Whistleblower Report</h2>
            <ul className="list-decimal ml-5">
              <li>Access the Reporting Form</li>
              <li>Fill in the Report Details</li>
              <li>Submit Your Report</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5">
            <h1 className="text-6xl">2</h1>
            <p className="border-b"></p>
            <h2 className="font-medium text-3xl ">Anonymous? No worries</h2>
            <ul className="list-decimal ml-5">
              <li>Select the Reporting Option</li>
              <li>Complete the Form</li>
              <li>Submit and Confirm:</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5">
            <h1 className="text-6xl">3</h1>
            <p className="border-b"></p>
            <h2 className="font-medium text-3xl ">Tracking the Status of Your Report</h2>
            <ul className="list-decimal ml-5">
              <li>Access the Tracking Page</li>
              <li>Enter Your Reference Number</li>
              <li>View Updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
