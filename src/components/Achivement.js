import React from "react";

export default function Achivement() {
  return (
    <div className="container-fluid" id="achievementBody">
      <div className="container text-danger text-center">
        <br />
        <br />
        <h1 className="dots">.. ___________________</h1>
        <br />
        <br />
        <h2 className="text-center dragon text-danger">Certifications</h2>
      </div>
      <br />
      <div className="container text-center" id="ct">
        <a
          href="/src/docs/HTML and CSS in depth - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          HTML5 & CSS3 in depth
        </a>
        <a
          href="/src/docs/Intro to Front End Web Development - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          Front-End Development - META
        </a>
        <a
          href="/src/docs/Programming with JavaScript - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          JavaScript - META
        </a>
        <br />
        <a
          href="/src/docs/React Basic - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          Basic React Js - META
        </a>
        <a
          href="/src/docs/Advanced React - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          Advanced React JS - META
        </a>
        <a
          href="/src/docs/Design and Develop a Website using Figma and CSS - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          Developing Website using Figma
        </a>
        <a
          href="/src/docs/Version Control - META.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          Version Control
        </a>
        <br />
        <a
          href="/src/docs/UI Design.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          UI Design
        </a>
        <a
          href="/src/docs/Build Wireframes and Low-Fidelity Prototypes.pdf"
          download
          className="btn btn-outline-warning"
          id="buttons"
        >
          Building Low-Fidelity Prototypes
        </a>
      </div>
    </div>
  );
}
