import React from "react";
import Nike from "../images/logo.png";
import SpaceX from "../images/spacex.png";

export default function Projects() {
  return (
    <div className="container-fluid" id="projectBody">
      <div className="container">
        <h1 className="dots text-center text-danger">.. ___________________</h1>
        <br />
      </div>
      <h1 className="dragon text-center text-danger mt-3">PROJECTS</h1>
      <div className="container">
        <div className="row mt-5" id="sam">
          <div className="col-4 text-white">
            <div
              className="firstProject d-flex align-items-center justify-content-center"
              data-aos="fade-up"
              id="op"
            >
              <a
                href="https://nike-responsive-clone.vercel.app/"
                target="blank"
              >
                <img src={Nike} alt="/" />
              </a>
            </div>
          </div>
          <div className="col-4 text-white">
            <div
              className="secondProject d-flex align-items-center justify-content-center"
              data-aos="fade-up"
              id="op"
            >
              <a href="https://space-x-clone-sigma.vercel.app/" target="blank">
                <img src={SpaceX} alt="/" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
