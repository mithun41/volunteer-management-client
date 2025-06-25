import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import PostCard from "../Components/PostCard";
import { FaSearch } from "react-icons/fa";

const AllPosts = () => {
  const posts = useLoaderData();
  const [isTable, setIsTable] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto my-8 bg-white text-black dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        All Volunteer Needs Posts
      </h2>

      {/* Search + Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Layout Toggle */}
        <button
          onClick={() => setIsTable(!isTable)}
          className="btn btn-sm btn-success dark:bg-green-600 dark:hover:bg-green-700 dark:text-white"
        >
          {isTable ? "Switch to Card View" : "Switch to Table View"}
        </button>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 w-full rounded-md pr-10"
            type="text"
            placeholder="Search by title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 dark:text-gray-300">
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      {/* Layout */}
      {isTable ? (
        // 📄 Table View
        <div className="overflow-x-auto">
          <table className="table w-full border text-sm text-gray-900 dark:text-white">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Deadline</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr
                  key={post._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.location}</td>
                  <td>{new Date(post.deadline).toLocaleDateString()}</td>
                  <td className="text-center">
                    <button
                      onClick={() => navigate(`/details/${post._id}`)}
                      className="btn btn-xs btn-primary dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // 📦 Card View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPosts;
