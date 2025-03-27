import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSketch } from "react-icons/fa6";
import { FaSignsPost } from "react-icons/fa6";
import { BiSolidLogOutCircle } from "react-icons/bi";

function Sidebar({ children }) {
  // Sidebar component to hold sidebar items
  return <div className="sticky top-20 w-56 py-6 bg-gray-800 text-white h-screen">{children}</div>;
}

function SidebarItem({ to, children }) {
  // SidebarItem component for individual sidebar links
  return (
    <Link to={to} className="block flex-row flex items-center px-4 py-2 hover:bg-gray-700">
      {children}
    </Link>
  );
}

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]); // State to hold inquiries data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(''); // State to manage error messages

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage
        const response = await axios.get('http://localhost:3000/api/inquiries', {
          headers: {
            Authorization: `Bearer ${token}`, // Set authorization header
          }
        });

        setInquiries(response.data); // Set inquiries data
      } catch (err) {
        setError('Failed to load inquiries.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchInquiries(); // Fetch inquiries on component mount
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar>
        <SidebarItem to="/admin"><FaHome className="mr-2" />Home</SidebarItem>
        <SidebarItem to="/admin/inquiries"><FaSketch className="mr-2" /> Inquiries</SidebarItem>
        {/*<SidebarItem to="/admin/posts"><FaSignsPost className="mr-2" />Posts</SidebarItem>*/}
        <SidebarItem to="/admin/logout"><BiSolidLogOutCircle className="mr-2" />Logout</SidebarItem>
      </Sidebar>
      <div className="</div>flex-1 p-8">
        <h1 className="font-medium underline">INQUIRIES</h1>
        <div className="py-8">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="w-full text-center">
              <thead className="border-b">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Inquiry ID</th>
                  <th className="border border-gray-300 px-4 py-2">Inquirer Name</th>
                  <th className="border border-gray-300 px-4 py-2">Inquirer Email</th>
                  <th className="border border-gray-300 px-4 py-2">Inquirer Message</th>
                  <th className="border border-gray-300 px-4 py-2">Inquiry Date</th>
                </tr>
              </thead>
              <tbody className="font-light text-sm">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b">
                    <td className="border border-gray-300 px-4 py-2">{inquiry.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{inquiry.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{inquiry.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{inquiry.message}</td>
                    <td className="border border-gray-300 px-4 py-2">{new Date(inquiry.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
