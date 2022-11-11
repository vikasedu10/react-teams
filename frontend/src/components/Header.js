import React from "react";
import { NavLink } from "react-router-dom";

const userLogo = {
  fontSize: "21px",
  color: "blue",
}
const userLogo1 = {
  fontSize: "51px",
  color: "blue",
}
export const Header = (props) => {
  return (
    <>

      <nav className="navbar-dark navbar navbar-expand-lg">
        <div className="container-fluid">

          <a href="#" className="navbar-brand">
            <button className="btn btn-outilne border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <i className="icon-navbar fa-solid fa-bars"></i>
            </button>
          </a>
          <NavLink to={"/"} className="navbar-brand">
            {props.title}
          </NavLink>
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


            <div className="col-12">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="ms-auto col-6">
                  {props.searchBar ? <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    {/* <button className="btn btn-outline-success" type="submit">
                    Search
                  </button> */}
                  </form> : ""}
                </li>
                <li className="ms-auto col-4">
                  <div className="d-flex">
                    <div className="dropdown">
                      <button className="btn btn-outline border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="icon-navbar fa-solid fa-ellipsis"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Keyboard Shortcuts</a></li>
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Download the desktop app</a></li>
                        <li><a className="dropdown-item" href="#">Download the mobile app</a></li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-outline border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="icon-navbar fa-solid fa-user"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li className="d-flex p-2">
                          <div className="my-auto">
                            <i className="icon-navbar fa-solid fa-circle-user"></i>
                          </div>
                          <div className="container">
                            <strong>Bahuguna, Vikas</strong>
                            <p>vikas.bahuguna@accenture.com</p>
                            <div className="d-flex justify-content-between">
                              <span>Available</span>
                              <span>Status</span>
                            </div>
                          </div>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Saved</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Manage account</a></li>
                        <li><a className="dropdown-item" href="#">Teams for personal use</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                      </ul>
                    </div>

                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar sidebar */}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Microsoft Teams</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="row align-items start px-4 py-4">
            <div className="col-3 py-4">
            <img className="office-icons" src="https://img.icons8.com/fluency/512/microsoft-office-2019.png" />
            </div>
            <div className="col-3 py-4">
            <img className="office-icons" src="https://img.icons8.com/fluency/512/microsoft-onenote-2019.png" />
            </div>
            <div className="col-3 py-4">
            <img className="office-icons" src="https://img.icons8.com/fluency/512/microsoft-excel-2019.png" />
            </div>
            <div className="col-3 py-4">
            <img className="office-icons" src="https://img.icons8.com/color/512/microsoft-word-2019--v2.png" />
            </div>
            <div className="col-3 py-4">
            <img className="office-icons" src="https://img.icons8.com/color/2x/microsoft-outlook-2019--v2.png" />
            </div>
            <div className="col-3 py-4">
            <img className="office-icons" src="https://img.icons8.com/fluency/512/microsoft-power-automate-2020.png" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
