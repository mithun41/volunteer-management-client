import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const VolunteerDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();
  // console.log(user.accessToken);

  const [volunteerCount, setVolunteerCount] = useState(data.needed);
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    needed,
    deadline,
    organizerName,
    organizerEmail,
    _id,
  } = data;

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;

    const requestData = {
      postId: _id,
      thumbnail,
      title,
      description,
      category,
      location,
      needed,
      deadline,
      organizerName,
      organizerEmail,
      volunteerName: user?.displayName,
      volunteerEmail: user?.email,
      suggestion: form.suggestion.value,
      status: "requested",
      requestedAt: new Date(),
    };

    axios
      .post(
        "https://volunteer-management-server-drab.vercel.app/volunteer-requests",
        requestData,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
          // Decrease needed count
          axios.patch(
            `https://volunteer-management-server-drab.vercel.app/posts/${_id}`,
            {
              $inc: { needed: -1 },
            },
            {
              headers: {
                authorization: `Bearer ${user.accessToken}`,
              },
            }
          );
          setVolunteerCount((prev) => prev - 1);
          toast.success("Volunteer request sent!");
          form.reset();
          document.getElementById("volunteer_modal").close();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
  };

  const handleJoinClick = () => {
    if (volunteerCount === 0) {
      Swal.fire({
        icon: "info",
        title: "Volunteer Limit Reached",
        text: "Sorry, no more volunteers are needed for this post.",
      });
    } else {
      document.getElementById("volunteer_modal").showModal();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 md:h-[400px] object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full font-medium">
              {category}
            </span>
            <span className="inline-block bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-sm px-3 py-1 rounded-full font-medium">
              📍 {location}
            </span>
            <span className="inline-block bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">
              👥 {volunteerCount} Volunteers Needed
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold text-gray-600 dark:text-gray-400">
                Deadline:
              </p>
              <p className="text-gray-800 dark:text-white">
                {new Date(deadline).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-600 dark:text-gray-400">
                Organizer:
              </p>
              <p className="text-gray-800 dark:text-white">{organizerName}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {organizerEmail}
              </p>
            </div>
          </div>

          {user ? (
            <button
              className="btn btn-primary w-full mt-4"
              onClick={handleJoinClick}
            >
              {volunteerCount === 0
                ? "No Volunteers Needed"
                : "Join as Volunteer"}
            </button>
          ) : (
            <button
              className="btn btn-primary w-full mt-4"
              onClick={() => navigate("/login")}
            >
              {volunteerCount === 0
                ? "No Volunteers Needed"
                : "Join as Volunteer"}
            </button>
          )}
        </div>
      </div>

      {/* Modal untouched as per instruction */}
      <dialog
        id="volunteer_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <h3 className="text-2xl font-semibold mb-4">Be a Volunteer</h3>
          <form onSubmit={handleRequest} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block mb-1 font-medium">Post Title</label>
              <input
                type="text"
                value={title}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                value={description}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                value={category}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                value={location}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Needed Volunteers */}
            <div>
              <label className="block mb-1 font-medium">
                Volunteers Needed
              </label>
              <input
                type="number"
                value={volunteerCount}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block mb-1 font-medium">Deadline</label>
              <input
                type="text"
                value={new Date(deadline).toLocaleDateString()}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Organizer Name */}
            <div>
              <label className="block mb-1 font-medium">Organizer Name</label>
              <input
                type="text"
                value={organizerName}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Organizer Email */}
            <div>
              <label className="block mb-1 font-medium">Organizer Email</label>
              <input
                type="email"
                value={organizerEmail}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Volunteer Name */}
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Volunteer Email */}
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Suggestion */}
            <div>
              <label className="block mb-1 font-medium">Your Suggestion</label>
              <textarea
                name="suggestion"
                placeholder="Write your suggestion here..."
                className="input w-full bg-white dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-full">
              Request
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-gray-200 dark:bg-gray-700 dark:text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VolunteerDetails;
