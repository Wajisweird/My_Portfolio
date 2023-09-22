import "./App.css";
import React from "react";
import First from "./components/First";
import Third from "./components/Third";
import Skills from "./components/Skills";
import Achivement from "./components/Achivement";
import Body from "./components/Body";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";

export default function App() {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <>
        <First />
        <Body />
        <Third />
        <Achivement />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <ContactMe />
        {/* Bottom to Up Button */}
        <div className="container-fluid" id="topButton">
          <button onClick={top} className="btn btn-warning me-4">
            <i className="fa-solid fa-caret-up"></i>
          </button>
        </div>
        <Footer />
      </>
    </div>
  );
}
