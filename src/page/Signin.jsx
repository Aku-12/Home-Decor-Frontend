import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Chair from "../assets/images/Chair.jpg";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenAndRedirect = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      const userId = localStorage.getItem("userId");

      if (refreshToken && userId) {
        try {
          const response = await axios.post(
            "http://localhost:8080/api/auth/refresh",
            null,
            {
              headers: {
                "Refresh-Token": refreshToken,
              },
            }
          );
          const { accessToken } = response.data;
          localStorage.setItem("token", accessToken);
          navigate("/home");
        } catch (error) {
          console.error("Failed to refresh token:", error);
          localStorage.clear();
          // No need to navigate here, as we're already on the signin page
        }
      }
    };

    checkTokenAndRedirect();
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      console.log("Login response:", response.data);

      const { accessToken, refreshToken, userId, roles } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userId", userId);
      localStorage.setItem("roles", JSON.stringify(roles));

      console.log("Token set in localStorage:", localStorage.getItem("token"));
      console.log("UserId set in localStorage:", localStorage.getItem("userId"));

      const role = roles.includes("ADMIN") ? "/admin/dashboard" : "/home";
      navigate(role);
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <img src={Chair} alt="Sign In" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">
              Sign Up
            </Link>
          </p>
          <div className="mt-4 text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;