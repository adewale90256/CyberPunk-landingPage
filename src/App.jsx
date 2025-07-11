import { useState, useEffect } from "react";
import Header from "./component/Header";
import Meddtech from "./pages/Meddtech";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Why from "./pages/Why";
import Tech from "./pages/Tech";
import Milestone from "./pages/Milestone";
import BusinessTeam from "./pages/BusinessTeam";
import Ask from "./pages/Ask";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <>
      <div>
        <Header />
        <Meddtech />
        <Problem />
        <Solution />
        <Why />
        <Tech />
        <Milestone />
        <BusinessTeam />
        <Ask />
      </div>
    </>
  );
}

export default App;
