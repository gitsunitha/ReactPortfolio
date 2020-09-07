import * as React from "react";
export default function Portfolio(props) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title>
                  <img alt="" src="images/portfolio/library.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Google Books</h5>
                      <p>MERN Project</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-02" title>
                  <img alt="" src="images/portfolio/console.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Memonomics</h5>
                      <p>React Js Project</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-03" title>
                  <img alt="" src="images/portfolio/vizfinance.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>VizFinance</h5>
                      <p>Javascript/MySQL</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="modal-01" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/library.jpg"
            alt=""
          />
          <div className="description-box">
            <h4>Google Books Search</h4>
            <p>
              This is a full stack project using React, Mongo db, Node/Express.
              Google Books API provides a list of books based on the user search
              and the user can save the books to be read later.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              MERN, Full Stack
            </span>
          </div>
          <div className="link-box">
            <a href="https://googlebooksearch-sp.herokuapp.com/">
              <i className="fa fa-external-link" />
            </a>
            <a href="https://github.com/gitsunitha/BooksApp">
              <i className="fa fa-github" />
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        <div id="modal-02" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-console.jpg"
            alt=""
          />
          <div className="description-box">
            <h4>Memonomics - React Js Game</h4>
            <p>
              This is a React Js project , to explore the components and basic
              working of React Js
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              React, Node, Express
            </span>
          </div>
          <div className="link-box">
            <a href="https://react-click-game-sp.herokuapp.com/">
              <i className="fa fa-external-link" />
            </a>
            <a href="https://github.com/gitsunitha/reactclickgame">
              <i className="fa fa-github" />
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        <div id="modal-03" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/vizfinance.jpg"
            alt=""
          />
          <div className="description-box">
            <h4>VizFinance</h4>
            <p>
              This is a full stack in Javascript/Bootstrap/Node/Express/MySQL.
              The aim of the project was to create a project without a
              framework. a precurser to the React Projects
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Full-Stack, Javascript
            </span>
          </div>
          <div className="link-box">
            <a href="https://vizfinance.herokuapp.com/">
              <i className="fa fa-external-link" />
            </a>
            <a href="https://github.com/gitsunitha/Vision_Finance">
              <i className="fa fa-github" />
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
      </div>
    </section>
  );
}
