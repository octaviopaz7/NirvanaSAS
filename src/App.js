import React from "react";
import Assets from "./Screens/Assets";
import Company from "./Screens/Company";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import MissionVision from "./Screens/MissionVision";
import Portfolio from "./Screens/Portfolio";
import NavBar from "./Components/NavBar"


function App() {
  return (
    <div className="app-container">
      <NavBar/>
      <Home/>
      <Company/>
      <MissionVision/>
      <Assets/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
