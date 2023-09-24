import React from "react";

export default function Body() {
  return (
    <div className="container-fluid" id="secondBody">
      <div className="container text-danger text-center">
        <br />
        <h1 className="dots">.. ___________________</h1>
      </div>
      <div className="container">
        <div className="my-5 ms-4 text-danger text-center" id="hell">
          <br />
          <h1 className="dragon" data-aos="fade-left">
            About Me
          </h1>
          <br />
          <p className="text-white-50" id="about" data-aos="fade-right">
            I'm Wajahat, a web designer and developer residing in
            <b> Islamabad, PK</b> <br />
            I dedicate my time to the development of my own products.{" "}
            <br />
            Additionally, I'm a stock market trader. <br /> I've a huge interest
            in investing my time and money in stock market.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}
