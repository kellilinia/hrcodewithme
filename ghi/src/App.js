import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import EmployerSearch from "./EmployerSearch";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import UpdateAccount from "./UpdateAccount";
import Game from "./Game";
import Nav from "./Nav";
import "./App.css";
import Homepage from "./Homepage";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <BrowserRouter basename={basename}>
      <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/token" element={<LoginForm />} />
            <Route path="/update" element={<UpdateAccount />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="game" element={<Game />} />
            <Route path="profile" element={<Homepage />} />
            <Route path="employer/search" element={<EmployerSearch />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
