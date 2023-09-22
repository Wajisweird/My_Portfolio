import React from "react";

export default function ContactMe() {
  return (
    <div className="container-fluid" id="ContactBody">
      <div className="container text-danger text-center">
        <br />
        <h1 className="dots">___________________ ..</h1>
        <br />
        <br />
        <h1 className="dragon text-center text-warning">Contact Me</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="inputBox text-center">
          <i className="fa-solid fa-at" id="email"></i>
          <b>
            <p className="text-white-50">wajahathuss17@gmail.com</p>
          </b>
          <i className="fa-brands fa-whatsapp" id="wp"></i>
          <h6 className="text-white-50">03xx-xxxxxxx</h6>
          <i className="fa-brands fa-telegram" id="telegram"></i>
          <h6 className="text-white-50">03xx-xxxxxxx</h6>
        </div>
      </div>
    </div>
  );
}
