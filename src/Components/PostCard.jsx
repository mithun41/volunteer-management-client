import React from "react";
import { Link } from "react-router";

const PostCard = ({ post }) => {
  const { _id, title, category, thumbnail, deadline } = post;

  return (
    <div className="bg-white  rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-44 object-cover rounded-md mb-3"
      />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm mt-1">
          🕒 Deadline: {new Date(deadline).toLocaleDateString()}
        </p>
      </div>
      <Link to={`/details/${_id}`}>
        {" "}
        <button className="mt-4 btn btn-primary w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
