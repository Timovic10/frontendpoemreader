import React from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Author from "../../assets/img/author1.jpg";

/**
 * RightSidebar Component
 * Displays a subscription button, search input, reading recommendations, and category tags.
 */
const RightSidebar = ({ categories }) => {
  const navigate = useNavigate();

  const goToSubscription = (e) => {
    e.preventDefault();
    navigate("/subscription");
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Subscription button */}
      <button
        onClick={goToSubscription}
        className="w-full bg-[#044AB1] py-3 rounded-full text-sm text-white mb-2 mt-5 font-roboto font-semibold hover:bg-[#4570b0fb] transition-colors"
      >
        Get unlimited access
      </button>

      {/* Search input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 pl-10 border rounded-full text-sm font-roboto focus:outline-none focus:ring-1 focus:ring-[#044AB1] focus:border-[#044AB1]"
        />
        <Search className="absolute left-3 top-3 w-4 h-5 text-black" />
      </div>

      {/* Reading Recommendations */}
      <div className="mb-6">
        <h2 className="text-md font-bold flex items-center">
          <span className="bg-[#1A8917] rounded-full w-2 h-2 font-roboto mr-2"></span>
          What We’re Reading Today
        </h2>

        <div className="flex flex-col mt-4 mb-4 space-y-4">
          {/* Each recommendation */}
          <div>
            <div className="flex items-center gap-2">
              <img src={Author} alt="author" className="w-8 h-8 rounded-full" />
              <div className="flex flex-col">
                <span className="text-xs text-[#292929] font-roboto font-thin">
                  Amit Das
                </span>
                <small className="text-[#7f7f7f]">@amitdas</small>
              </div>
            </div>
            <p className="text-md text-[#191919] font-roboto font-medium mt-1">
              Brown Dust Desert
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={Author} alt="author" className="w-8 h-8 rounded-full" />
              <div className="flex flex-col">
                <span className="text-xs text-[#292929] font-roboto font-thin">
                  Amit Das
                </span>
                <small className="text-[#7f7f7f]">@amitdas</small>
              </div>
            </div>
            <p className="text-md text-[#191919] font-roboto font-medium mt-1">
              Ten Little Birds Flying High in The Sky
            </p>
          </div>

          
        </div>

        {/* Link to full list */}
        <Link
          to=""
          className=" font-roboto text-sm text-[#1A8917] mt-4 font-semibold hover:underline"
        >
          See the full list
        </Link>

        {/* Category Tags */}
        <div className="mb-8">
          <h2 className="text-md font-bold text-[#292929] font-roboto mt-4 mb-4">
            Recommended Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#F2F2F2] rounded-full text-sm text-[#292929]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
