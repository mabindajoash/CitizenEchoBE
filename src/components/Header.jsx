import React from 'react';
import { IoSearchCircle } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white border-b border-[#EFEFEF] shadow-sm text-center flex flex-row items-center justify-between md:px-14">
            <div>
                <img src="/assets/logo.png" alt="logo" className="h-20" />
            </div>
            <div className="flex text-center">
                <ul className="flex flex-row space-x-4 text-base">
                    <li>
                        <a href="/" className="text-gray-600 hover:text-[#000]">Home</a>
                    </li>
                    <li>
                        <a href="/resources" className="text-gray-600 hover:text-[#000]">Resources</a>
                    </li>
                    <li>
                        <a href="/aboutus" className="text-gray-600 hover:text-[#000]">About us</a>
                    </li>
                    <li>
                        <a href="/report" className="text-gray-600 hover:text-[#000]">Report</a>
                    </li>
                    
                </ul>
            </div>
            <div className="flex flex-row space-x-4 items-center">
                {/*<button className="bg-[#F1F1F1] p-2 rounded-full ml-2">
                    <IoSearchCircle size={20} />
                </button>*/}
                <span className="flex flex-row items-center">
                    <FaPhoneAlt size={15} className="text-gray-500 mx-2" />
                    <span className="text-gray-600 text-sm">123-456-7890</span>
                </span>
                <span className="flex flex-row text-gray-600 items-center text-sm" >
                    <p>Joash Asila Mabinda</p>
                    <IoIosArrowDown size={20} />
                </span>
                <Link to="/contactus" className='bg-[#70A8F8] rounded-full px-4 py-1.5'>
                    contact us
                </Link>
            </div>
        </header>
    )
}
