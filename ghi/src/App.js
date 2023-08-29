import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Construct from "./Construct.js";
// import ErrorNotification from "./ErrorNotification";
import EmployerSearch from "./EmployerSearch";
import Nav from "./Nav";
import "./App.css";

function App() {
  // const [launchInfo, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
  //     console.log("fastapi url: ", url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="signin" element={<EmployerSearch />} />
          <Route path="signout" element={<EmployerSearch />} />
          <Route path="signup" element={<EmployerSearch />} />
          <Route path="homepage" element={<EmployerSearch />} />
          <Route path="game" element={<EmployerSearch />} />
          <Route path="profile" element={<EmployerSearch />} />
          <Route path="employer/search" element={<EmployerSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <ErrorNotification error={error} />
    //   <Construct info={launchInfo} />
    // </div>
  );
}

export default App;
