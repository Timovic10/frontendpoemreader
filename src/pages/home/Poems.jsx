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
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;


/**
 * HomePage Component
 * Main landing page showing the post feed and right sidebar.
 */
const PoemsPage = () => {
  const { token } = useContext(AuthContext);
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await axiosInstance.get(
          `${API_BASE_URL}/poemapi/poem`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data.data)
        setPoems(response.data.data || [])
       //response ? setPoems
      } catch (err) {
        setError("Failed to fetch poems")
        console.log(err)
      } finally {
        setLoading(false)
      }
    };
    if (token) fetchPoems();
  }, [token]);
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  

  return (
    <div className="space-y-10">
      {poems && poems.length > 0 ? (
        poems.map((item, index) => (
          <div 
          key={item._id}
          className="flex flex-col md:flex-row border-b pb-6">
            <div className="flex-1">
                <div className="flex items-center gap-2 font-roboto text-sm mb-4">
                    {item.image && (
                        <img
                        src={`${VITE_IMG_BASE_URL}/${item.image}`}
                        alt= "author"
                        className="w-10 h-10 rounded-full"
                        />
            )}
          <div className="flex flex-col">
            <span className="text-[#292929]">{item.author}</span>
            <small className="text-[#7f7f7f]">{item.author}</small>
          </div>
          <span className="text-[#757575]">·</span>
          <span className="text-[#757575]">5days ago</span>
        </div>
        <div className="flex items-center gap-2 font-roboto text-sm mb-4">
            <div className="flex flex-col">
                 <span className="text-[#292929]">{item.title}</span>
            <small className="text-[#7f7f7f]">{item.body}</small>
          </div>
         </div>
        </div>
        </div>
        ))
      ) : (
        <p>Could,t load poem at the moment</p>
      )}
    </div>
  );
};

export default PoemsPage;

