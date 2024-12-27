import React, { useState } from "react";
import { formatDate } from "../../../utilis/formateDate";
import EditorJSHTML from "editorjs-html";
import { FaStar } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const editorJSHTML = EditorJSHTML();

const SingleBlogCard = ({ blog }) => {
  const {
    title,
    description,
    content,
    coverImg,
    category,
    rating,
    author,
    createdAt,
  } = blog || {};
  const htmlContent = editorJSHTML.parse(content).join("");
  const [likes, setLikes] = useState(0);

  // Handle like button
  const handleLike = () => setLikes(likes + 1);

  // Social Share Button
  const handleShare = () => {
    // Implement share logic (e.g., social media sharing)
    alert("Sharing this post...");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Blog Header */}
      <div>
        <h1 className="md:text-4xl text-3xl font-medium mb-4 text-gray-800 hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h1>
        <p className="mb-6 text-gray-600">
          {formatDate(createdAt)} by{" "}
          <a
            href={`/profile/${author?.username || "unknown"}`}
            className="text-blue-400 cursor-pointer hover:text-blue-600 transition-colors duration-300"
          >
            {author?.username ? author.username : ""}
            {/* this section is for author profile  need to chnage the auther name manualy  */}
          </a>
        </p>
      </div>

      {/* Blog Cover Image */}
      <div>
        <img
          src={coverImg}
          alt="Cover Image"
          className="w-full md:h-[520px] bg-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-8 space-y-4">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="space-y-3 editorjsdiv text-gray-700"
        />

        {/* Rating Section */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-800">Rating: </span>
          <div className="flex items-center">
            {/* Display Stars */}
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`text-yellow-500 ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">
              ({rating} based on 2,370 reviews)
            </span>
          </div>
        </div>

        {/* Like Button */}
        <div className="flex items-center space-x-4 mt-4">
          <button
            onClick={handleLike}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            👍 Like {likes > 0 && `(${likes})`}
          </button>

          {/* Social Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            <IoIosShareAlt className="mr-2" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
