import React from "react";

export default function Info() {
  return (
    <div className="container-fluid" id="secondBody">
      <div className="container text-danger text-center">
        <br />
        <h1 className="dots">.. ___________________</h1>
        <br />
        <br />
        <div className="row" id="cv">
          <div className="col-7">
            <h1
              className="dragon text-center text-danger">
              About Me
            </h1>
            <br />
            <p className="text-white-50" id="about" data-aos="fade-right">
              I'm Wajahat, a web designer and developer residing in
              <b> Islamabad, PK</b> <br />A passionate frontend web developer
              with a knack for turning ideas into stunning, user-friendly
              websites. <br /> With a blend of creativity and coding skills, I
              thrive on crafting pixel-perfect, responsive web experiences that
              not only look great but also function flawlessly across devices.
              I've been on a continuous quest to stay updated with the latest
              technologies and design trends. <br /> From HTML, CSS, CSS
              frameworks like Bootstrap and Tailwind CSS and JavaScript to
              frameworks like React, I love diving into the world of code to
              bring innovative concepts to life.
              <br />
              <br />
              <br />
              <text>Let's build something amazing together!</text>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
