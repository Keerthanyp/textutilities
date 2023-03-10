import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            TextUtilities
          </Link> */}
          <a className="navbar-brand" href="#">
            TextUtilities
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.title}
                  props should be place inside {} in jsx
                </a>
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  {props.title}
                  //  props should be place inside {} in jsx       
                    </Link>  */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.aboutText}
                </a>
                {/* <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link> */}
              </li>
              {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </li> */}
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  {props.disabled}
                </a>
                {/* <Link className="nav-link disabled" to="/">
                  {props.disabled}
                </Link> */}
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// to specify the type of props: if the props are sent of different types then it'll throw an error in console
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  disabled: PropTypes.string,
  // aboutText: PropTypes.string.isRequired,
  // isRequired is specified if the values are needed to be passed as props
};

//default type and values will be displayed for props if its not specified:
Navbar.propTypes = {
  title: "Default Text",
  aboutText: "About text here",
};
