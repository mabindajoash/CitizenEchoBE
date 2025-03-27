import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#3A3C5E] via-[#3A3C5E] text-white text-center py-5">
      <div className="flex-row flex justify-between px-20">
        <div>
          <img src="/assets/logo.png" alt="logo" className="w-28 mx-auto" />
          <p className="mt-3 text-xs">© 2024 Whistleblower</p>
        </div>
        <div className="flex flex-col md:mt-5">
        <div className="flex flex-row space-x-5 justify-end">
            <Link to="#" className="text-sm font-light cursor-pointer">
              <FaFacebook size={20} className="inline-block hover:text-[#70A8F8]" />
            </Link>
            <Link to="#" className="text-sm font-light cursor-pointer">
              <FaInstagramSquare size={20} className="inline-block hover:text-[#70A8F8]" />
            </Link>
            <Link to="#" className="text-sm font-light cursor-pointer ">
              <FaTwitterSquare size={20} className="inline-block hover:text-[#70A8F8]" />
            </Link>
          </div>
          <div className="flex flex-row justify-end divide-x mt-5">
            <Link to="/" className="text-sm font-light cursor-pointer pr-2 hover:text-[#70A8F8]">
              Home
            </Link>
            <Link to="/resources" className="text-sm font-light cursor-pointer px-2 hover:text-[#70A8F8]">
              Resources
            </Link>
            <Link to="/report" className="text-sm font-light cursor-pointer px-2 hover:text-[#70A8F8]">
              Report
            </Link>
            <Link to="/aboutus" className="text-sm font-light cursor-pointer pl-2 hover:text-[#70A8F8]">
              About Us
            </Link>
          </div>
          <div className="mt-5 flex justify-end">
            <input type="email" placeholder="Search" className="py-1 px-4 md:w-80 outline-none text-black text-end rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
