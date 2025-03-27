import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
      });

      // Assuming the server responds with a token on successful login
      if (response.data.token) {
        // Store token in local storage or context
        localStorage.setItem("adminToken", response.data.token);
        // Redirect to the admin dashboard
        navigate("/admin");
      }
    } catch (error) {
      // Set error message for invalid credentials or server issues
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg shadow-[#27292A] w-80 backdrop-brightness-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
