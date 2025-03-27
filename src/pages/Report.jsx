import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SiTutanota } from "react-icons/si";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import axios from "axios";


export default function Report() {
  // State variables for managing report type and form visibility
  const [reportType, setReportType] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // State variables for Anonymous Report form
  const [anonymousTitle, setAnonymousTitle] = useState("");
  const [anonymousDescription, setAnonymousDescription] = useState("");
  const [anonymousMessage, setAnonymousMessage] = useState("");

  // State variables for Registered User Report form
  const [regTitle, setRegTitle] = useState("");
  const [regDescription, setRegDescription] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regMessage, setRegMessage] = useState("");

  // Function to navigate back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  // Function to set report type to anonymous
  const handleAnonymousReport = () => {
    setReportType("anonymous");
  };

  // Function to set report type to registered
  const handleRegisteredReport = () => {
    setReportType("registered");
  };

  // Function to handle submission of anonymous report
  const handleAnonymousSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const reportData = {
      title: anonymousTitle,
      description: anonymousDescription,
      report_type: "anonymous",
    };

    console.log(reportData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/reports/anonymous",
        {
          title: anonymousTitle,
          description: anonymousDescription,
        }
      );
      console.log(response.data);
      setAnonymousMessage(response.data.message);
      setLoading(false);
      setAnonymousTitle("");
      setAnonymousDescription("");
      setTimeout(() => {
        setAnonymousMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting anonymous report:", error);
      setAnonymousMessage(
        error.response?.data?.error ||
          "An error occurred while submitting the report."
      );
      setLoading(false);
      setTimeout(() => {
        setAnonymousMessage("");
      }, 3000);
    }
  };

  // Function to handle submission of registered user report
  const handleRegisteredSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/reports/registered", {
        title: regTitle,
        description: regDescription,
        report_type: "registered",
        email: regEmail,
        phone: regPhone,
      });
      setRegMessage(response.data.message);
      setRegTitle("");
      setRegDescription("");
      setRegEmail("");
      setRegPhone("");
      setTimeout(() => {
        setRegMessage("");
      }, 3000);
    } catch (error) {
      setRegMessage(error.response?.data?.error || "Error submitting report.");
      setTimeout(() => {
        setRegMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="h-32 bg-gradient-to-r from-[#3A3C5E] via-[#3A3C5E]">
        <span
          onClick={handleBack}
          className="p-2.5 text-white text-xs flex flex-row text-center hover:underline cursor-pointer"
        >
          <IoIosArrowBack className="mt-0.5" /> Back
        </span>
        <h1 className="flex items-center px-10 text-white text-6xl font-light">
          Report
        </h1>
      </div>

      {/* Display options to choose report type if none is selected */}
      {!reportType && (
        <div className="flex justify-center items-center mt-10">
          <div className="flex justify-center h-[25rem] w-[50rem] items-center flex-col space-x-5 mt-10 bg-[#27292A]">
            <div className="flex justify-center items-center flex-col backdrop-blur-sm h-full">
              <h1 className="text-3xl underline font-medium text-center text-blue-500">
                Report Corruption
              </h1>
              <p className="text-center md:w-1/2 mt-5 flex justify-center text-white">
                Ethics and Anti-corruption Commission gathers information on
                corruption occuring in Government and the public Sector from a
                variety of sources. These sources include members of the public,
                heads of government departments and agencies, officials working in
                both the public and private sectors and the media. <br /> The
                reports can be made at the EACC headquater( Integrity Centre) or any
                of the regional offices.
              </p>
              <div className="mt-5 flex flex-row space-x-5">
                <button
                  onClick={handleAnonymousReport}
                  className="px-4 py-2 w-32 text-blue-500 shadow-lg shadow-gray-300 flex justify-center flex-col items-center rounded"
                >
                  <SiTutanota size={28} />
                  Anonymous
                </button>
                <Link
                  to="/contactus"
                  className="px-4 w-32 py-2 text-blue-500 shadow-lg shadow-gray-300 flex justify-center flex-col items-center rounded"
                >
                  <MdMarkEmailRead size={32} />
                  By Email
                </Link>
                <button
                  onClick={handleRegisteredReport}
                  className="px-4 py-2 text-blue-500 w-32 shadow-lg shadow-gray-300 flex justify-center flex-col items-center rounded"
                >
                  <IoLogIn size={32} />
                  Login
                </button>
                <Link
                  to="/contactus"
                  className="px-4 w-32 py-2 text-blue-500 shadow-lg shadow-gray-300 flex justify-center flex-col items-center rounded"
                >
                  <FaPersonBreastfeeding size={32} />
                  In Person
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display form for anonymous report if selected */}
      {reportType === "anonymous" && (
        <div className="flex text-black shadow-lg rounded-tl-full rounded-tr-full bg-gradient-to-br from-[#4E81AD] h-[30rem] mt-10 py-10 items-center text-center flex-col">
          <h2 className="text-3xl mb-3 pt-10 underline font-medium text-center">
            Anonymous Report
          </h2>
          <p>
            Please fill out the form below to submit your report anonymously.
          </p>
          <form className="block flex flex-col space-y-4 mt-4">
            <label>
              <span>Title: </span>
              <input
                type="text"
                value={anonymousTitle}
                onChange={(e) => setAnonymousTitle(e.target.value)}
                className="border border-gray-300 p-2 text-black rounded-full"
              />
            </label>
            <label className="flex items-center">
              <span>Description: </span>
              <textarea
                value={anonymousDescription}
                onChange={(e) => setAnonymousDescription(e.target.value)}
                className="border border-gray-300 p-2 text-black rounded-full"
              />
            </label>
            <button
              onClick={handleAnonymousSubmit}
              className="bg-[#3A3C5E] hover:bg-[#555673] text-white py-2 px-4 rounded-full"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          {anonymousMessage && (
            <p className="text-center text-red-500 mt-4">{anonymousMessage}</p>
          )}
        </div>
      )}

      {/* Display form for registered user report if selected */}
      {reportType === "registered" && (
        <div className="flex text-black shadow-lg rounded-tl-full rounded-tr-full bg-gradient-to-br from-[#4E81AD] h-[30rem] mt-10 py-10 items-center text-center flex-col">
          <h2 className="text-3xl mb-3 font-medium underline">Registered Report</h2>
          <form onSubmit={handleRegisteredSubmit} className="flex flex-col text-black space-y-4 w-1/2 mt-5">
            <input type="email" value={regEmail} required onChange={(e) => setRegEmail(e.target.value)} placeholder="Email" className="border border-gray-300 p-2 text-black rounded-full outline-none" />
            <input type="text" value={regPhone} required onChange={(e) => setRegPhone(e.target.value)} placeholder="Phone" className="border border-gray-300 p-2 text-black rounded-full outline-none" />
            <input type="text" value={regTitle} required onChange={(e) => setRegTitle(e.target.value)} placeholder="Title" className="border border-gray-300 p-2 text-black rounded-full outline-none" />
            <textarea value={regDescription} required onChange={(e) => setRegDescription(e.target.value)} placeholder="Description" className="border border-gray-300 p-2 text-black rounded-full outline-none" />
            <button type="submit" className="bg-[#3A3C5E] text-white py-2 rounded-full">{loading ? "Submitting..." : "Submit"}</button>
          </form>
          {regMessage && <p className="text-red-500 mt-4">{regMessage}</p>}
        </div>
      )}
    </div>
  );
}