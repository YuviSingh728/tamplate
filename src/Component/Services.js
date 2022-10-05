import React from "react";
import "./style.css";

const Services = () => {
  return (
    <>
    <div className="main">
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img
              src="Assets/logo-removebg-preview.png"
              height="48"
              alt="Glamcode"
            />
            <span className="text ms-2 fs-2 fw-bold">Glamcode</span>
            <h6 className="head">Luxury Hoem Salon</h6>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav gap-3 ms-auto">
              <a href="#" className="nav-item nav-link active">
                Blog
              </a>
              <a href="#" className="nav-item nav-link">
                Register as Professional
              </a>
              <a href="#" className="nav-item nav-link">
                My Booking
              </a>
              <a href="#" className="nav-item nav-link">
                My Account
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="back">
        <div className="text fw-bold ms-3">
          <p>Home / Near me</p>
        </div>
        <div className="heading text-center">
          <h1 className="bold fw-bold mt-4">Services Near Me</h1>
          <p className="bold fs-5">
            Find all Glamcode Local Services near you. Chose from trained
            professional to take care of all your needs -Beauty Services,Home
            Services
          </p>
        </div>

        <div className="code text-center">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <img src="Assets/img.jpg" alt="loading" />
              <p>Bridal Services Near me</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <img src="Assets/img2.jpg" alt="loading" />
              <p>Makeup Services Near me</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <img src="Assets/img3.jpg" alt="loading" />
              <p>Facial Services Near me</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <img src="Assets/img4.webp" alt="loading" />
              <p>Mani & Padi Services Near me</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <img src="Assets/img5.jpg" alt="loading" />
              <p>Haircare Services Near me</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <img src="Assets/img1.jpg" alt="loading" />
              <p>Waxing Services Near me</p>
            </div>
          </div>
        </div>
      </div>
      
<div className="foot bg-success">
      <div className="footer text-center bg-success text-white">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4 className="tzt">About us</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Blog</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>GC Impact</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Gift Cards</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Terms & Condition</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Careers</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Contact Us</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Privacy Policy</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Near Me</h4>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <h4>Review </h4>
          </div>
        </div>
      </div>
      <hr style={{width:"100%",margin:"0px auto",color:"white"}}/>
      </div>
      <div className="location text-white">
      <div className="row bg-success ">
      <h4 className="service mt-4">Serving in</h4>
      <div className="col-xl-2 col-lg-2 col-md-2 mt-2">
        <h6 >Noida</h6>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 mt-2">
        <h6>Lucknow</h6>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 mt-2">
        <h6>Delhi</h6>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 mt-2">
        <h6>Ghaziabad</h6>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 mt-2">
        <h6>Gurugram</h6>
        </div>
        </div>
      </div>      
      </div>
    </>
  );
};

export default Services;
