import * as React from "react";
export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href="https://github.com/gitsunitha">
                <i className="fa fa-github" />
              </a>
            </li>
          </ul>{" "}
          <ul class="copyright">
            <li>&copy; Copyright 2014 CeeVee</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@emilep?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Emile Perron
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/technology-developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </li>
            <li>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@casparrubin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Caspar Camille Rubin
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/games?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
