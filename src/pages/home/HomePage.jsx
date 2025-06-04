import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../component/nav/Sidebar";
import PostCard from "../../component/cards/PostCard";
import RightSidebar from "../../component/aside/RightSidebar";
import Author from "../../assets/img/author1.jpg";
import Author1 from "../../assets/img/author2.jpg";
import PoemImage from "../../assets/img/poemimage.jpg";
import AddIcon from "../../assets/icons/AddIcon";
import { AuthContext } from "../../context/authcontext/AuthContext";
import axiosInstance from "../../helper/api/axiosInstance";
import PoemsPage from "./Poems";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * HomePage Component
 * Main landing page showing the post feed and right sidebar.
 */
const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Navbar />
      
      <main className="flex-1 overflow-y-auto p-7">
        <PoemsPage />
      </main>
      <aside className="hidden md:block w-[25%] h-screen overflow-y-auto p-4 border-1 font-roboto bg-white">
        <RightSidebar
          categories={[
            "Romance",
            "African",
            "Power",
            "Adventure",
            "Art",
            "Mindfulness",
            "Yada Yada",
          ]}
        />
      </aside>
    </div>
  );
};

export default HomePage;

