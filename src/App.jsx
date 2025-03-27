import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Admin from "./Admin/admin";
import Inquiries from "./Admin/Inquiries";
import Posts from "./Admin/Posts";
import Report from "./pages/Report";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/login";
import Logout from "./Admin/Logout";

export default function App() {
  return (
    <Router>
      {/* Ensures the page scrolls to the top when navigating */}
      <ScrollToTop />
      {/* Renders the Header component at the top of every page */}
      <Header />
      {/* Defines the routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/inquiries" element={<Inquiries />} />
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </Router>
  );
}
