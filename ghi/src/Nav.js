import { NavLink } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import "./index.css";

function Nav() {
  const { token, logout } = useToken();
  // const [account, setAccount] = useState([]);
  const isAuthenticated = !!token;

  // const fetchAccount = async () => {
  //   const accountUrl = `${process.env.REACT_APP_API_HOST}/accounts`;
  //   const fetchConfig = {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetchWithCookie(accountUrl, "get", fetchConfig);

  //   try {
  //     const response = await fetch(accountUrl, fetchConfig);
  //     console.log(response.status);

  //     if (!response.ok) {
  //       throw new Error(`Fetch failed with status: ${response.status}`);
  //     }

  //     const accountData = await response.json();
  //     setAccount(accountData.account);
  //     console.log(account);
  //   } catch (error) {
  //     console.error("Error fetching account:", error);
  //     // You can handle the error here, e.g., set an error state or display a message to the user.
  //   }
  // };
  //   const response = fetch(accountUrl, fetchConfig);
  //   console.log(response.status);
  //   if (response.ok) {
  //     const accountData = response.json();
  //     setAccount(accountData.account);
  //   }
  // };

  // useEffect(() => {
  //   fetchAccount();
  // }, []);

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
                  <li className="nav-item">
                    <NavLink className="nav-link text-info" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-warning" to="/update">
                      Update Account
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-success" to="/game">
                      Code with me
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-primary" to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  {/* {account &&
                    account.map((accounts) => {
                      if (accounts.coder === false) {
                        return ( */}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-danger"
                      to="/employer/search"
                    >
                      Employer Search
                    </NavLink>
                  </li>
                  {/* );
                      }
                    })} */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/token" onClick={logout}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/token">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
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
