import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

const UpdatePost = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date(data.deadline));

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const postData = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      needed: parseInt(form.volunteers.value),
      deadline,
      organizerName: user?.displayName,
      organizerEmail: user?.email,
    };

    axios
      .put(
        `https://volunteer-management-server-drab.vercel.app/posts/${data._id},`,
        postData
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Post updated successfully!");
          navigate("/my-posts");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update post.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8 bg-white text-black shadow rounded-lg dark:bg-gray-800 dark:text-white">
      <title>Update Post | Volunteer Management</title>

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Update Volunteer Need Post
      </h2>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4">
        {/* Thumbnail */}
        <input
          type="text"
          name="thumbnail"
          defaultValue={data.thumbnail}
          placeholder="Thumbnail Image URL"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          required
        />

        {/* Title */}
        <input
          type="text"
          name="title"
          defaultValue={data.title}
          placeholder="Post Title"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          defaultValue={data.description}
          placeholder="Description"
          className="textarea textarea-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          required
        />

        {/* Category */}
        <select
          name="category"
          defaultValue={data.category}
          className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        >
          <option value="">Select Category</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="social service">Social Service</option>
          <option value="animal welfare">Animal Welfare</option>
        </select>

        {/* Location */}
        <input
          type="text"
          name="location"
          defaultValue={data.location}
          placeholder="Location"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          required
        />

        {/* Needed Volunteers */}
        <input
          type="number"
          name="volunteers"
          defaultValue={data.needed}
          placeholder="No. of Volunteers Needed"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          required
          min="0"
        />

        {/* Deadline */}
        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          required
        />

        {/* Organizer Name */}
        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
          placeholder="Organizer Name"
        />

        {/* Organizer Email */}
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
          placeholder="Organizer Email"
        />

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
