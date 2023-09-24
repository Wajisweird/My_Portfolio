import React from "react";

export default function Skills() {
  return (
    <div className="container-fluid" id="skillsec">
      <br />
      <br />
      <div className="container text-danger text-center">
        <br />
        <h1 className="dots">___________________ ..</h1>
        <br />
        <br />
        <h2 className="dragon text-center">
          SKILLS <i className="fa-solid fa-code" id="code"></i>
        </h2>
      </div>
      <div className="container text-center" id="is">
        <h6 className="text-white-50 my-5">Web Development</h6>
        <i className="fa-brands fa-html5" id="i"></i>
        <i className="fa-brands fa-css3-alt" id="ii"></i>
        <i className="fa-brands fa-js" id="iii"></i>
        <i className="fa-brands fa-bootstrap" id="iv"></i>
        <i className="fa-brands fa-react" id="v"></i>
        <br /><br /><br />
        <h6 className="text-white-50 my-5">Web Design</h6>
        <i className="fa-brands fa-figma" id="vi"></i>
      </div>
    </div>
  );
}
