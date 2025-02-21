import { useState, React, use } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Leaderboard from "./components/Leaderboard";
import SignupPage from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Thankyou from "./components/Thankyou";
import Feedback from "./components/Feedback";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  const isAuthenticated = localStorage.getItem("user") !== null;
  const Navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Leaderboard" element={<Leaderboard />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/thankyou" element={<Thankyou />}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
