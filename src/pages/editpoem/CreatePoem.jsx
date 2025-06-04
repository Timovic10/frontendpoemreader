import React, { useState } from 'react';
import Navbar from '../../component/nav/Sidebar';

const CreatePoem = () => {
  const categories = ["Romance", "African", "Power", "Adventure", "Art", "Mindfullness", "Yada Yada"];

  const [selectedCategory, setSelectedCategory] = useState("Romance");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      
      {/* Sidebar (sticky on desktop) */}
      
        <Navbar />
      

      {/* Main Content (scrollable on small screens) */}
      <div className="flex-grow overflow-auto px-4 py-6 md:py-10 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center gap-6">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2 text-[#191919]">Create a Poem</h1>
            <p className="text-[#606F7B]">Craft your piece to capture your audience</p>
          </div>

          {/* Title Input */}
          <div className="bg-[#EDFAF2] w-full px-6 py-2 rounded-2xl">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your Poem Title Here"
              className="w-full border border-[#1A8917] py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Body Textarea */}
          <div className="w-full">
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter Your Poem Body Here"
              rows="8"
              className="w-full border border-[#1A8917] text-green-700 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  selectedCategory === cat
                    ? "bg-[#1A8917] text-white"
                    : "bg-[#F2F2F2] text-[#292929]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between w-full mt-2 gap-4">
            <button
              className="border border-[#044AB1] text-[#044AB1] w-full sm:w-[48%] px-8 py-2 rounded-full hover:bg-blue-50 transition"
            >
              Cancel
            </button>
            <button
              className="border border-[#B2B2B2] bg-[#044AB1] text-white w-full sm:w-[48%] px-8 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Done
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePoem;
