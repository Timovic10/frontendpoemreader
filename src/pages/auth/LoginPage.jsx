import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aside from "./aside";
import { AuthContext } from "../../context/authcontext/AuthContext";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) errs.email = "Invalid email format";
    if (userData.password.length < 8)
      errs.password = "Password must be at least 8 characters";
    setError(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { handleSubmit, isLoading } = useContext(AuthContext);
  const validateUserData = (e) => {
    if (!validate()) return;
    handleSubmit(e, userData);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Aside*/}
      <Aside />

      {/* Right hand side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-12">
        <form
          onSubmit={validateUserData}
          className="w-full max-w-md flex flex-col gap-6"
        >
          {/* Welcome Text */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#191919] mb-1">
              Hello Again
            </h3>
            <p className="text-sm md:text-base text-[#191919]">Welcome back</p>
          </div>

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
          {/* Login Button */}
          <button
            // onClick={handleLogin}
            className="w-full bg-[#044AB1] hover:bg-[#0572E2] text-white font-semibold py-3 rounded-full transition-all"
          >
            Login
          </button>

          {/* Forgot Password */}
          <p className="text-center text-[#B2B2B2] text-sm hover:underline cursor-pointer">
            Forgot password?
          </p>

          {/* Register */}
          <p className="text-center text-[#191919] text-sm">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-[#0572E2] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
