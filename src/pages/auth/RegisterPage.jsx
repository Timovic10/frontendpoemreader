import React, { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Aside from "./aside";
import axiosInstance from "../../helper/api/axiosInstance";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.name.trim()) errs.name = "Name is required";
    if (!emailRegex.test(userData.email)) errs.email = "Invalid email format";
    if (!/^\d{10,15}$/.test(userData.phone))
      errs.phone = "Phone number must be 10 digits";
    if (userData.password.length < 8)
      errs.password = "Password must be at least 8 characters";
    setError(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      console.log(userData);
      const registeredUser = await axiosInstance.post(
        "/user/register",
        userData
      );
      console.log(registeredUser);
      if (registeredUser.status === 201) {
        navigate("/login");
      }
      alert("Registration Successful");
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* aside */}
      <Aside />

      {/* Right hand side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6"
        >
          {/* Welcome Text */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#191919] mb-1">
              Hello
            </h3>
            <p className="text-sm md:text-base text-[#191919]">Register</p>
          </div>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            //error={error.name}
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}

          {/* Phone Number Input */}
          <input
            maxLength={11}
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            //error={error.phone}
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />
          {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            //error={error.email}
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            //error={error.password}
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#044AB1] hover:bg-[#0572E2] text-white font-semibold py-3 rounded-full transition-all"
          >
            Register
          </button>

          {/* Already have account */}
          <p className="text-center text-[#191919] text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#0572E2] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
