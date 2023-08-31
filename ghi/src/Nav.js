import { NavLink } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Nav() {
  const { logout } = useToken();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/signup">
          Code with me
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Homepage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/token">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signout">
                Sign out
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Sign up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/game">
                Code with me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employer/search">
                Employer Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin" onClick={logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
