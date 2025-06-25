import axios from "axios";
import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import DatePicker from "react-datepicker";

const AddVolunteerPost = () => {
  const { user } = use(AuthContext);
  const [deadline, setDeadline] = useState(new Date());

  //   const [deadline, setDeadline] = useState(null);

  const handleAddPost = (e) => {
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
      .post(
        "https://volunteer-management-server-drab.vercel.app/add-volunteer",
        postData,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Volunteer post added successfully!");
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        Add Volunteer Need Post
      </h2>
      <form onSubmit={handleAddPost} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          className="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        >
          <option value="">Select Category</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="social service">Social Service</option>
          <option value="animal welfare">Animal Welfare</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />

        <input
          type="number"
          name="volunteers"
          placeholder="No. of Volunteers Needed"
          className="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
          min="0"
        />

        <DatePicker
          selected={deadline}
          name="date"
          onChange={(date) => setDeadline(date)}
          className="input w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />

        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
          placeholder="Organizer Name"
        />

        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
          placeholder="Organizer Email"
        />

        <button
          type="submit"
          className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>
      <title>Add Volunteer | Volunteer-Management</title>
    </div>
  );
};
export default AddVolunteerPost;
