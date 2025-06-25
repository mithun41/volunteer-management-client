import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router";

const MyPosts = () => {
  const { user, setLoading } = use(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://volunteer-management-server-drab.vercel.app/my-posts?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyPosts(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    // console.log("deleted", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://volunteer-management-server-drab.vercel.app/posts/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("Task deleted!");
              setMyPosts(myPosts.filter((task) => task._id !== id));
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //   if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">My Volunteer Need Posts</h2>
      {myPosts.length === 0 ? (
        <div className="text-center text-gray-600">
          You haven't added any volunteer posts yet. ☹️
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPosts.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{new Date(post.deadline).toLocaleDateString()}</td>
                  <td className="space-x-2">
                    <Link to={`/update-post/${post._id}`}>
                      <button className="btn btn-sm btn-warning">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <title>My Volunteer Posts | Volunteer-Management</title>
    </div>
  );
};

export default MyPosts;
