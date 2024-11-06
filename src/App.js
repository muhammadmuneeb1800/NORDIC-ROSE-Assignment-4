import React from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import big from "./assets/big.png";
import mask from "./assets/Mask.png";
import eye from "./assets/eye.png";
import rac from "./assets/Rectangle 8.png";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import logo from "./assets/NORDIC ROSE footer.png";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1 id="hero" className="text-center fs-1 fw-bolder">
              A few words about this blog platform, Ghost, and how this site was made
            </h1>
            <p className="text-center font-monospace mt-4">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </p>
          </div>
        </div>
      </div>

      <div className="full mt-5">
        <img src={big} alt="Big-Image" className="img-fluid w-100" />
      </div>

      <div id="size-width" className="container">
        <div className="row">
          <div className="col">
            <hr className="border border-black border-1 opacity-100" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between mt-2">
              <div className="d-flex justify-content-start align-items-center gap-3">
                <div>
                  <img src={mask} alt="Mask-image" className="img-fluid" />
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <p className="m-0 p-0 fw-bold">Mika MAtikainen</p>
                  <p className="m-0 p-0">Apr 15, 2020 · 4 min read</p>
                </div>
              </div>
              <div className="btn-group w-25 shadow-sm">
                <div className="btn btn-light border border-1">
                  <i class="bi bi-facebook"></i>
                </div>
                <div className="btn btn-light border border-1">
                  <i class="bi bi-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-4">
          <div className="col text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In
              hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
              viverra.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
              posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.{" "}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-start fs-2 fw-bold">Next on the pipeline</h2>
          </div>
          <div className="col mt-3">
            <p className="text-start">
              Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula
              suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </p>
            <p className="text-start">
              Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
            </p>
          </div>
        </div>
      </div>
      <div className="rectangle">
        <img src={rac} alt="img" className="img-fluid" />
      </div>

      <div id="size-width" className="container mt-2">
        <div className="row">
          <div className="col">
            <p className="text-center">
              Image caption centered this way and I'll make this a bit longer to indicate the amount of line-height.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <p className="text-start">
              Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Aliquam quis posuere ligula.
            </p>
            <p className="text-start">
              In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat
              ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
              posuere maximus dui et fringilla. Nulla non volutpat leo.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-start">
            <p>A list looks like this:</p>
            <ul className="text-start">
              <li>First item in the list</li>
              <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
              <li>Third item in the list</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-start">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
              posuere ligula.
            </p>
            <p className="mt-5 text-start">
              Thanks for reading, <br /> Mika
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="btn-group w-100 shadow-sm">
              <button className="btn btn-light border border-1 py-3">
                <i class="bi bi-facebook"></i> Share on Facebook
              </button>
              <button className="btn btn-light border border-1 py-3">
                <i class="bi bi-twitter"></i> Share on Twitter
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-start">
            <p>
              Tags: <span className="text-decoration-underline">product design, culture</span>
            </p>
          </div>
        </div>
        <hr className="border border-black opacity-100 border-style-dash" />

        <div className="row mt-5">
          <div className="col text-start">
            <div className="d-md-flex justify-content-start align-items-center gap-3">
              <div className="text-center mb-3 mb-md-0">
                <img src={mask} alt="img" />
              </div>
              <div>
                <p>
                  <span className="fw-bold">Mika Matikainen</span> is a Design Founder & Advisor, Berlin School of
                  Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose
                  stakeholder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 mt-5 pt-4">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <hr className="w-100 border border-black opacity-100" />
          <img src={eye} alt="" />
          <hr className="w-100 border border-black opacity-100" />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <h2 className="fs-2 text-black fw-bold">What to read next</h2>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <img src={img1} alt="image1" className="img-fluid" />
            <p className="text-center pt-3 w-75 mx-auto fw-medium">
              Connecting artificial intelligence with digital product design
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <img src={img2} alt="image1" className="img-fluid" />
            <p className="text-center pt-3 w-75 mx-auto fw-medium">
              Hello world, or, in other words, why this blog exists
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <img src={img3} alt="image1" className="img-fluid" />
            <p className="text-center pt-3 w-75 mx-auto fw-medium">
              Here are some things you should know regarding how we work
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <img src={img4} alt="image1" className="img-fluid" />
            <p className="text-center pt-3 w-75 mx-auto fw-medium">
              A few words about this blog platform, Ghost, and how this site was made
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <img src={img5} alt="image1" className="img-fluid" />
            <p className="text-center pt-3 w-75 mx-auto fw-medium">
              Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <img src={img6} alt="image1" className="img-fluid" />
            <p className="text-center pt-3 w-75 mx-auto fw-medium">
              How modern remote working tools get along with Old School Cowboy's methods
            </p>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col">
            <div id="line" className="p-md-5 py-4 px-3">
              <p className="fs-2 fw-bold text-black text-center">Sign up for the newsletter</p>
              <p className="text-center">
                If you want relevant updates occasionally, sign up for the private newsletter. Your email is never
                shared.
              </p>
              <div className="input-group mt-5">
                <input type="text" placeholder="Enter your email..." className="form-control py-3 border-black px-3" />
                <button className="btn btn-dark px-4">SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white mt-5">
        <p className="fw-bold text-uppercase py-2 text-center">
          Digital product design <span className="fw-normal">Remote work </span>UX design
          <span className="fw-normal"> Distributed teams </span> Creativity
          <span className="fw-normal"> Strategy </span>
          Suspense <span className="fw-normal"> Growth</span>
        </p>

        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 text-center">
              <img src={logo} alt="" />
              <p className="text-center mt-3 mx-auto w-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In
                hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.{" "}
              </p>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="d-flex justify-content-center gap-5">
              <a className="text-white" href="/">
                Twitter
              </a>
              <a className="text-white" href="/">
                LinedIn
              </a>
              <a className="text-white" href="/">
                RSS
              </a>
            </div>
          </div>

          <div className="col-12 text-center mt-5">© 2020-2024 Nordic Rose Co. All rights reserved. </div>
        </div>
      </div>
    </>
  );
}
