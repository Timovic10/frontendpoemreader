import React, { useState } from "react";
import { Menu, Gift } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Profile from "../../assets/img/avatar.jpg";
import HomeIcon from "../../assets/icons/HomeIcon";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import BookmarkIcon from "../../assets/icons/BookmarkIcon";
import ListIoIcon from "../../assets/icons/ListIoIcon";
import CreateIcon from "../../assets/icons/CreateIcon";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const goToSubscription = () => {
    navigate("/subscription");
  };

  return (
    <div>
      {/* Mobile menu button */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3 border-b">
        <h1 className="font-bold text-[#0572E2] text-xl">PR</h1>
        <button onClick={toggleSidebar}>
          <Menu className="text-[#0572E2]" />
        </button>
      </div>
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r p-4 flex flex-col justify-between transition-transform duration-300 z-50
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static sm:w-20`}
      >
        {/* Top Logo */}
        <div className="text-[#0572E2] font-bold text-xl text-center">PR</div>

        {/* Center Navigation Icons */}
        <div className="flex flex-col items-center gap-8">
          <Link to="/home">
            <HomeIcon
              className={`${
                pathname === "/home" ? "text-[#0572E2]" : "text-[#757575]"
              } w-6 h-6`}
            />
          </Link>
          <Link to="/notifications">
            <NotificationIcon
              className={`${
                pathname === "/notification"
                  ? "text-[#0572E2]"
                  : "text-[#757575]"
              } w-6 h-6`}
            />
          </Link>
          <Link to="/bookmarks">
            <BookmarkIcon
              className={`${
                pathname === "/bookmark" ? "text-[#0572E2]" : "text-[#757575]"
              } w-6 h-6`}
            />
          </Link>
          <Link to="/lists">
            <ListIoIcon
              className={`${
                pathname === "/lists" ? "text-[#0572E2]" : "text-[#757575]"
              } w-6 h-6`}
            />
          </Link>

          {/* Divider */}
          <div className="w-6 h-px bg-gray-300 my-2"></div>

          <Link to="/create">
            <CreateIcon
              className={`${
                pathname === "/create" ? "text-[#0572E2]" : "text-[#757575]"
              } w-6 h-6`}
            />
          </Link>
        </div>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </aside>


      {/* The get unlimited access becomes a subscription button on mobile the path is to make sure it does show on any other page/route */}
      {pathname === "/home" && (
        <button
          onClick={goToSubscription}
          className="fixed bottom-5 right-5 bg-[#0572E2] text-white rounded-full p-3 sm:hidden shadow-lg z-50"
          title="Get Unlimited Access"
        >
          <Gift className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
