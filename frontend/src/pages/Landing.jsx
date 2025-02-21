import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>hello!! you piece of shit</h1>
      
    <p onClick={()=>navigate("/login")}>wanna login ..come here !!</p>
    </div>
  );
}
