import React, { useState } from "react";
import SearchBlog from "./SearchBlog";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  // Fetch data using Redux
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearch = () => setQuery({ search, category });

  return (
    <div className="mt-16 max-w-screen-xl mx-auto px-8 py-12 bg-gray-50 rounded-lg shadow-md">
      {/* Search Bar */}
      <SearchBlog
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />

      {/* Loading and Error States */}
      {isLoading && (
        <div className="text-center mt-8 text-gray-600 text-lg">Loading...</div>
      )}
      {error && (
        <div className="text-center mt-8 text-red-600 text-lg">
          {error.toString()}
        </div>
      )}

      {/* Blog Cards Section */}
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Blog Image */}
            <img
              src={blog?.coverImg}
              alt={blog.title}
              className="w-full h-60 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mt-3">
                {blog.description?.slice(0, 120)}...
              </p>
              {/* Read More Button */}
              <button className="mt-4 px-5 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
                Read More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
