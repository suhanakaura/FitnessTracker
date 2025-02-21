import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
      e.preventDefault();
    
      if (password !== passwordConfirm) {
        alert("Passwords do not match!");
        return;
      }
    
      const userData = {
        name: username,
        email,
        phoneNumber: number,
        password,
        confirmedPassword: passwordConfirm,
        gender,
      };
    
      try {
        const response = await fetch("http://localhost:4000/api/v1/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          credentials: "include", // For cookies
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.message || "Signup failed");
        }
    
        // Save user to localStorage
        localStorage.setItem("user", JSON.stringify(data));
    
        // Redirect to homepage or dashboard
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    };
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-200 text-violet-950 p-4">
      <h1 className="text-4xl font-bold mb-4">Create Account</h1>
      <p className="text-violet-900 mb-8">Join the fitness revolution! 💪</p>

      <form
        onSubmit={handleSignup}
        className="bg-violet-950 p-6 rounded-2xl w-full max-w-md shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400 focus:outline-none"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400  focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400  focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400  focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Confirmed Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="w-full p-3 rounded-md bg-violet-100 text-gray-900 placeholder-gray-400  focus:outline-none"
          required
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-3 rounded-md bg-violet-100 text-gray-400 placeholder-gray-400 focus:outline-none"
          required
        >
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
{/* 
        <label className="w-full p-3 rounded-md bg-violet-100 text-gray-400 placeholder-gray-400 focus:outline-none cursor-pointer flex items-center justify-center">
          {profile ? profile.name : "Upload Your Profile Picture"}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfile(e.target.files[0])}
            className="hidden"
          />
        </label> */}

        <button
          type="submit"
          className="w-full bg-violet-800 hover:bg-violet-700 text-violet-200 font-bold py-3 rounded-md transition-all shadow-md"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4">
        Already have a account?{" "}
        <Link to="/login"><span
           className="text-violet-400 cursor-pointer hover:underline"
        >
          Login here !
        </span>
        </Link>
      </p>
    </div>
  );
}