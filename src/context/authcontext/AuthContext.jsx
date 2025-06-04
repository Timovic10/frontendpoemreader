import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../../helper/api/axiosInstance";
//import { notify } from '../hooks/toastconfig';
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Initialize the context
const AuthContext = createContext();

// create a Provider component
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? JSON.parse(savedToken) : "";
  });

  useEffect(() => {
    // save to local storage
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);
  const [isLoading, setIsLoading] = useState(false); //setting your loading state to be boolean (false)

  // const BASE_URL = 'https://e7fd-102-216-183-116.ngrok-free.app'
  //the handle submit makes use of axios
  const handleSubmit = async (e, payload) => {
    e.preventDefault(); //it helps not to reuse the input you you've used
    setIsLoading(true); //show the spinner
    try {
      const response = await axiosInstance.post(`${API_BASE_URL}/user/login`, payload);
      console.log(response.data);
      if (response.status === 200) {
        setToken(response.data.accessToken); //set the token
        //notify('Login Successful')
        //alert("Login successfull");
        navigate('/home')
      }
    } catch (err) {
      console.error(err);
      //notify(`Login failed: ${err.message}`)
    }
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider value={{ handleSubmit, isLoading, token }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
