import React from "react";

export default function Header() {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          {/* <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Sunitha Pillai.</h1>
          <h3>
            I'm a aspiring <span>Full Stack Developer</span>
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/sunitha-pillai-7612147/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/gitsunitha">
                <i className="fa fa-github" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <i className="fa fa-skype" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
}
