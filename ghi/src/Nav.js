import { NavLink } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import "./index.css";

function Nav() {
  const { token, logout } = useToken();
  const isAuthenticated = !!token;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
        <div className="container-fluid d-flex justify-content-between">
          <NavLink className="navbar-brand" to="/">
            <img src="/imglogo.png" alt="logo" className="nav-logo-img" />
            <img src="/words.png" alt="logo" className="nav-wordlogo-img" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse links" id="navbarNav">
            <ul className="navbar-nav">
              {isAuthenticated ? (
                <>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link text-info" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link text-warning" to="/update">
                      Update Account
                    </NavLink>
                  </li>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link text-success" to="/game">
                      Code with me
                    </NavLink>
                  </li>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link text-primary" to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item link-spacing">
                    <NavLink
                      className="nav-link text-danger"
                      to="/employer/search"
                    >
                      Employer Search
                    </NavLink>
                  </li>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link" to="/token" onClick={logout}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link text-warning" to="/token">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item link-spacing">
                    <NavLink className="nav-link text-info" to="/signup">
                      Sign up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
