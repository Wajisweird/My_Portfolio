import React from "react";

export default function Third() {
  return (
    <div className="container-fluid" id="thirdDiv">
      <h1 className="container dots text-danger text-center">
        ___________________ ..
      </h1>
      <h1 className="dragon text-danger text-center my-4">Education</h1>
      <div className="container" id="pe">
        <i className="fa-solid fa-graduation-cap" id="ac"></i>
        <h6 className="ms-4 my-2" id="dates">
          2009-2019
        </h6>
        <h5 className="text-white ms-4">Primary Education</h5>
        <h6 className="text-white-50 ms-4">The Educators, Rawalpindi</h6>
      </div>
      <br />
      <div className="container" id="pe">
        <i className="fa-solid fa-graduation-cap" id="ac"></i>
        <h6 className="ms-4 my-2" id="dates">
          2019-2021
        </h6>
        <h5 className="text-white ms-4">Secondary Education</h5>
        <h6 className="text-white-50 ms-4">
          Punjab Group of Colleges, Rawalpindi
        </h6>
      </div>
      <br />
      <div className="container" id="pe">
        <i className="fa-solid fa-graduation-cap" id="ac"></i>
        <h6 className="ms-4 my-2" id="dates">
          2021-2025
        </h6>
        <h5 className="text-white ms-4">Bachelor of Computer Science</h5>
        <h6 className="text-white-50 ms-4">SZABIST University, Islamabad</h6>
      </div>
    </div>
  );
}
