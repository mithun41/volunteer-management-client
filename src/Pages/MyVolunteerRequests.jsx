import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyVolunteerRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://volunteer-management-server-drab.vercel.app/volunteer-requests?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
        .then((res) => setRequests(res.data))
        .catch(() => toast.error("Failed to load your requests"));
    }
  }, [user?.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this volunteer request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://volunteer-management-server-drab.vercel.app/volunteer-requests/${id}`,
            {
              headers: {
                authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              axios.patch(
                `https://volunteer-management-server-drab.vercel.app/posts/${id}`,
                {
                  $inc: { needed: +1 },
                },
                {
                  headers: {
                    authorization: `Bearer ${user.accessToken}`,
                  },
                }
              );
              toast.success("Volunteer request cancelled");
              setRequests(requests.filter((req) => req._id !== id));
            }
          })
          .catch(() => toast.error("Failed to cancel request"));
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">My Volunteer Requests</h2>
      {requests.length === 0 ? (
        <div className="text-center text-gray-500">
          You haven't requested to join any volunteer posts yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th>Post Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Your Suggestion</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id}>
                  <td>{req.title}</td>
                  <td>{req.category}</td>
                  <td>{new Date(req.deadline).toLocaleDateString()}</td>
                  <td>{req.suggestion || "N/A"}</td>
                  <td>
                    <button
                      onClick={() => handleCancel(req._id)}
                      className="btn btn-sm btn-error"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <title>My Volunteer Requests | Volunteer-Management</title>
    </div>
  );
};

export default MyVolunteerRequests;
