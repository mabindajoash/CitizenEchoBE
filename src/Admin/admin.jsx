import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSketch, FaSignsPost } from "react-icons/fa6";
import { BiSolidLogOutCircle } from "react-icons/bi";
import axios from "axios";

function Sidebar({ children }) {
  return <div className="sticky top-20 w-56 py-6 bg-gray-800 text-white h-screen">{children}</div>;
}

function SidebarItem({ to, children }) {
  return (
    <Link to={to} className="block flex-row flex items-center px-4 py-2 hover:bg-gray-700">
      {children}
    </Link>
  );
}

export default function Admin() {
  // State to hold cases
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cases from the backend
  const fetchCases = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      console.error("No token found");
      return;
    };
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:3000/api/cases", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log(response.data);  // Check the response from the server
  
      // Update your state with the cases
      setCases(response.data.cases || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching cases:", error.response?.data || error.message);
    }
  };
  
  useEffect(() => {
    fetchCases();
  }, []);
  

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setCases(cases.map(caseItem => 
      caseItem.id === id ? { ...caseItem, status: newStatus } : caseItem
    ));
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar>
        <SidebarItem to="/admin"><FaHome className="mr-2" />Home</SidebarItem>
        <SidebarItem to="/admin/inquiries"><FaSketch className="mr-2" />Inquiries</SidebarItem>
        {/*<SidebarItem to="/admin/posts"><FaSignsPost className="mr-2" />Posts</SidebarItem>*/}
        <SidebarItem to="/admin/users"><BiSolidLogOutCircle className="mr-2" />Logout</SidebarItem>
      </Sidebar>
      <div className="flex-1 p-8">
        <h1 className="font-medium underline">CASES</h1>
        <div className="py-8">
          {loading ? (
            <p>Loading cases...</p>
          ) : (
            <table className="w-full text-center overflow-auto">
              <thead className="border-b">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Case ID</th>
                  <th className="border border-gray-300 px-4 py-2">Case Type</th>
                  <th className="border border-gray-300 px-4 py-2">Case Title</th>
                  <th className="border border-gray-300 px-4 py-2">Case Description</th>
                  
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                  <th className="border border-gray-300 px-4 py-2">Case Status</th>
                </tr>
              </thead>
              <tbody className="font-light text-sm">
                {cases.map(caseItem => (
                  <tr key={caseItem.id} className="border-b">
                    <td className="border border-gray-300 px-4 py-2">{caseItem.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{caseItem.report_type}</td>
                    <td className="border border-gray-300 px-4 py-2">{caseItem.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{caseItem.description}</td>
                    
                    <td className="border border-gray-300 px-4 py-2">{caseItem.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{caseItem.phone}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <select 
                        value={caseItem.status} 
                        onChange={(e) => handleStatusChange(caseItem.id, e.target.value)} 
                        className="bg-gray-200 rounded px-2 py-1"
                      >
                        <option value="In progress">In progress</option>
                        <option value="Closed">Closed</option>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
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
