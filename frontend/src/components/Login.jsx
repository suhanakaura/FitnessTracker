import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check if the inputs are filled
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, save user data to localStorage or cookies if required
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/"); // Redirect to the homepage or dashboard
      } else {
        alert(data.message); // Show error message from server
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-200 text-violet-950 p-4">
      <h1 className="text-4xl font-bold mb-4">Login to your Account</h1>
      <p className="text-violet-900 mb-8">Track your Fitness! 💪</p>

      <form
        onSubmit={handleLogin}
        className="bg-violet-950 p-6 rounded-2xl w-full max-w-md shadow-lg space-y-4 min-h-[250px]"
      >
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-10 w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400 focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400  focus:outline-none"
          required
        />

        <button
          type="submit"
          className="mt-10 w-full bg-violet-800 hover:bg-violet-700 text-violet-200 font-bold py-3 rounded-md transition-all shadow-md"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4">
        Don't have an account?{" "}
        <Link to="/signup">
          <span className="text-violet-400 cursor-pointer hover:underline">
            SignUp here !
          </span>
        </Link>
      </p>
    </div>
  );
}
