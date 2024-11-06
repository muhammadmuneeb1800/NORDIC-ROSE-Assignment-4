import React from "react";
import logo from "../assets/NORDIC ROSE.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid mx-lg-5 mx-md-3 pt-3 position-relative">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" id="logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-medium fs-6 text-black px-lg-4" aria-current="page" href="/">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium fs-6 text-black px-lg-4" href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium fs-6 text-black px-lg-4" href="/">
                  LINKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium fs-6 text-black px-lg-4" href="/">
                  PROJECTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
