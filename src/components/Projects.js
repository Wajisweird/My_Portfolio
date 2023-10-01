import React from "react";
import Nike from "../images/logo.png";

export default function Projects() {
  return (
    <div className="container-fluid" id="projectBody">
      <div className="container">
        <h1 className="dots text-center text-danger">.. ___________________</h1>
        <br />
      </div>
      <h1 className="dragon text-center text-danger mt-3">PROJECTS</h1>
      <div className="container">
        <div className="row mt-5" data-aos="fade-up" id="sam">
          <div className="col-4 text-white">
            <div className="firstProject d-flex align-items-center justify-content-center">
              <img src={Nike} alt="/" />
              <div className="overlay">
                <a
                  href="https://nike-responsive-clone.vercel.app/"
                  target="blank"
                >
                  <h3 className="text-center">Nike Clone</h3>
                  <br />
                  <p className="text-center">
                    Responsive Nike clone using React Js and CSS framework i.e
                    Bootstrap 5.{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* <br />
          <div className="col-4 text-white">
            <div className="firstProject d-flex align-items-center justify-content-center">
              <img src={Nike} alt="/" />
              <div className="overlay">
                <a href="/" target="blank">
                  <h3 className="text-center">Nike Clone</h3>
                  <br />
                  <p className="text-center">
                    Responsive Nike clone using React Js and CSS framework i.e
                    Bootstrap 5.{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <br />
          <div className="col-4 text-white">
            <div className="firstProject d-flex align-items-center justify-content-center">
              <img src={Nike} alt="/" />
              <div className="overlay">
                <a href="/" target="blank">
                  <h3 className="text-center">Nike Clone</h3>
                  <br />
                  <p className="text-center">
                    Responsive Nike clone using React Js and CSS framework i.e
                    Bootstrap 5.{" "}
                  </p>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
