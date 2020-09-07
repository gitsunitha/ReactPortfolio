import React from "react";

export default function About(props) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>I am a new Full Stack Developer.</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Sunitha Pillai</span>
                <br />
                <span>
                  3114 W Euclid Ave
                  <br />
                  Tampa, Fl 33629 US
                </span>
                <br />
                <span>(408)420-6068</span>
                <br />
                <span>sunitha.pillai@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="#" className="button">
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
