import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSketch, FaSignsPost } from "react-icons/fa6";
import { BiSolidLogOutCircle } from "react-icons/bi";

function Sidebar({ children }) {
  return (
    <div className="sticky top-20 w-56 py-6 bg-gray-800 text-white h-screen">{children}</div>
  );
}

function SidebarItem({ to, children }) {
  return (
    <Link to={to} className="block flex-row flex items-center px-4 py-2 hover:bg-gray-700">
      {children}
    </Link>
  );
}

export default function Posts() {
  // Mock data to simulate posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The future of web development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec felis ac purus...",
      image: "/assets/res1.jpg",
    },
    {
      id: 2,
      title: "React Best Practices",
      description: "Learn about the most effective ways to use React in modern development...",
      image: "/assets/res1.jpg",
    },
  ]);

  // Function to handle deleting a post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Function to handle editing a post
  const handleEdit = (id) => {
    alert(`Edit post with id: ${id}`);
  };

  // Function to handle adding a new post
  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: "New Post Title",
      description: "New post description...",
      image: "/assets/res1.jpg",
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar>
        <SidebarItem to="/admin">
          <FaHome className="mr-2" /> Home
        </SidebarItem>
        <SidebarItem to="/admin/inquiries">
          <FaSketch className="mr-2" /> Inquiries
        </SidebarItem>
        <SidebarItem to="/admin/posts">
          <FaSignsPost className="mr-2" /> Posts
        </SidebarItem>
        <SidebarItem to="/admin/users">
          <BiSolidLogOutCircle className="mr-2" /> Logout
        </SidebarItem>
      </Sidebar>
      <div className="flex-1 p-8 w-full">
        <h1 className="font-medium underline mb-4">POSTS</h1>
        <button
          className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          onClick={handleAddPost}
        >
          Add New Post
        </button>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="font-bold text-lg">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{post.id}</td>
                <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                <td className="border border-gray-300 px-4 py-2">{post.description}</td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                  <button
                    className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-600"
                    onClick={() => handleEdit(post.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
