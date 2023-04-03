import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg fixed-top py-0"
          style={{ backgroundColor: 'rgb(45, 111, 99)' }}
        >
          <div className="container-fluid" style={{paddingLeft: '4%'}}>
            <a
              style={{ width: '5%', height: '5%' }}
              className="navbar-brand py-0"
              href="#"
            >
              <img
                width="100%"
                height="5%"
                src="/img/FURAMA (1).png"
                alt=""
              />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{height: '50px'}}>
                  <a
                    className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                    aria-current="page"
                    href="#"
                  >
                    Furama
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                    href="/case_study/case_study/prototype/facility.html"
                  >
                    Facilities
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                    href="#"
                  >
                    Cuisines
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                    href="#"
                  >
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                    href="#"
                  >
                    Offer
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle furama py-0 d-flex justify-content-center align-items-center px-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manager
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Customer
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;