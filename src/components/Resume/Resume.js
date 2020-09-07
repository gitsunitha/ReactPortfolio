// @flow
import * as React from "react";
export default function Resume() {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>University of Central Florida</h3>
              <p className="info">
                Full Stack Coding Bootcamp<span>•</span>
                <em className="date">September 2020</em>
              </p>
              <p>
                Developed Skills on HTML5, CSS3, JavaScript, jQuery, Bootstrap,
                Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>University of South Florida</h3>
              <p className="info">
                MSc <span>•</span>
                <em className="date">May 2007</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Verizon</h3>
              <p className="info">
                MTS III <span>•</span>
                <em className="date">March 2010 - Present</em>
              </p>
              <p>
                Lorem ipsum dolor sit amet, 
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Super Cool Studio</h3>
              <p className="info">
                UX Designer <span>•</span>
                <em className="date">March 2007 - February 2010</em>
              </p>
              <p>
                This is Photoshop's version of Lorem Ipsum. 
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>I am trained in both Front-end and back-end development.</p>
          <div className="bars">
            <ul className="skills">
              <li>
                <span className="bar-expand react" />
                <em>React JS</em>
              </li>
              <li>
                <span className="bar-expand bootstrap" />
                <em>Bootstrap JS</em>
              </li>
              <li>
                <span className="bar-expand node-express" />
                <em>Node-Express</em>
              </li>
              <li>
                <span className="bar-expand css" />
                <em>CSS</em>
              </li>
              <li>
                <span className="bar-expand html5" />
                <em>HTML5</em>
              </li>
              <li>
                <span className="bar-expand jquery" />
                <em>jQuery</em>
              </li>
              <li>
                <span className="bar-expand mongodb" />
                <em>Mongo DB</em>
              </li>

              <li>
                <span className="bar-expand mysql" />
                <em>MySQL</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
