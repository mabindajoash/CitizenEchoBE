import React, { useState } from "react";
import axios from "axios";
import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";

export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Send a POST request to the server with the form data
      const response = await axios.post("http://localhost:3000/api/inquiries/", {
        name,
        email,
        message,
      });

      // Update the status message with the server's response
      setStatusMessage(response.data.message);
      // Clear the form fields
      setName("");
      setEmail("");
      setMessage("");
      // Clear the status message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } catch (error) {
      // Update the status message with an error message
      setStatusMessage("Error submitting inquiry. Please try again.");
      // Clear the status message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
      // Log the error to the console
      console.error("Error submitting inquiry:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="h-32 bg-gradient-to-r from-[#3A3C5E] via-[#3A3C5E] flex">
        <h1 className="flex items-center px-10 text-white text-6xl font-light">
          CONTACT US
        </h1>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO3iupacf84VxMIQw6lp91CAvQJpczEiWuQAN8WPBFlUrv2gKDwxxoPRdZW3Me7OpWRM&usqp=CAU"
              alt="contact"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Get in touch</h1>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-full"
                  />
                </div>
                <button className="bg-[#70A8F8] text-white px-4 py-2 rounded-full">
                  Send
                </button>
              </form>
              {statusMessage && (
                <p className="mt-4 text-green-500">{statusMessage}</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold mt-10">Our Location</h1>
          <div className="mt-4 space-y-3">
            <p className="flex flex-row items-center ">
              <MdLocationPin size={25} className="text-[#70A8F8] mr-2" />
              Integrity Centre, Milimani Road, Nairobi
            </p>
            <p className="flex flex-row items-center ">
              <MdLocalPhone size={25} className="text-[#70A8F8] mr-2" />
              Phone: 020 2717316
            </p>
            <p className="flex flex-row items-center ">
              <MdEmail size={25} className="text-[#70A8F8] mr-2" />
              Email:{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
