import React from "react";

export default function First() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row" id="firstRow">
          <div className="col-5" id="firstCol">
            <div className="container">
              <h1
                className="bestermind text-center my-5
                "
              >
                Qazi Wajahat Hussain
              </h1>
              {/* Img */}
              <div id="my_img">
                <div id="myPic"></div>
                <h1 className="california text-end">WajahatHussain.</h1>
              </div>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/wajahathussain17/"
                  target="blank"
                >
                  <i className="fa-brands fa-linkedin" id="ic"></i>
                </a>
                <a href="https://github.com/Wajisweird" target="blank">
                  <i className="fa-brands fa-github" id="ic"></i>
                </a>
                <i className="fa-brands fa-slack" id="ic"></i>
                <i className="fa-brands fa-stack-overflow" id="ic"></i>
                <i className="fa-brands fa-discord" id="ic"></i>
              </div>
            </div>
          </div>
          <div className="col-7" id="secondCol">
            <div className="container text-center" id="texts">
              <h5 className="papernotes text-white-50">
                .Front-End Web Developer.
              </h5>
              <h4 className="gilroy text-white" data-aos="fade-out">
                QAZI WAJAHAT HUSSAIN
              </h4>
              <p className="song text-white-50">
                I create responsive, user-centric websites using cutting-edge
                technologies. <br /> Let's collaborate to bring your digital
                vision to life! <br />
                "JUST BRING IT ON"
              </p>
              <br />
              <div className="container">
                <a
                  href="/"
                  target="blank"
                  className="btn btn-outline-danger"
                  id="buttons"
                >
                  View CV
                </a>
                <a
                  href="#ContactBody"
                  className="btn btn-danger"
                  id="buttons"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
