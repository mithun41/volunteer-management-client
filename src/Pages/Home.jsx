import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import axios from "axios";
import PostCard from "../Components/PostCard";
import { useNavigate } from "react-router";
import SuccessStories from "../Components/SuccessStories";
import SecondSection from "../Components/SecondSection";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://volunteer-management-server-drab.vercel.app/posts")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        setPosts(sorted.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <title>Home | Volunteer-Management</title>
      <Slider></Slider>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center mt-8">
          Volunteer Needs Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-11/12 mx-auto">
          {posts.map((post) => (
            <PostCard key={post._id} post={post}></PostCard>
          ))}
        </div>
      </div>
      <div className="text-center my-8">
        <button
          onClick={() => navigate("/all-posts")}
          className="px-6 py-2  rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800"
        >
          See All Volunteer Posts
        </button>
      </div>
      <SuccessStories></SuccessStories>
      <SecondSection></SecondSection>
    </div>
  );
};

export default Home;
