import React, { useRef } from "react";

const Home = () => {
  // Creating refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the selected section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, width: "100%", background: "#000", color: "#fff", padding: "10px", display: "flex", gap: "15px" }}>
        <button onClick={() => scrollToSection(homeRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      {/* Sections */}
      <div ref={homeRef} style={{ height: "100vh", background: "lightblue", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Home Section</h1>
      </div>
      <div ref={aboutRef} style={{ height: "100vh", background: "lightgreen", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>About Section</h1>
      </div>
      <div ref={contactRef} style={{ height: "100vh", background: "lightcoral", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Contact Section</h1>
      </div>
    </div>
  );
};

export default Home;