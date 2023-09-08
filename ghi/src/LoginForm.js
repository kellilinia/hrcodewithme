import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`username: ${username} password: ${password}`);
    try {
      await login(username, password);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="centerthings">
      <div className="card text-bg-light mb-3 cardbody">
        <h2 className="card-header">Login</h2>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                name="username"
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input className="btn btn-warning" type="submit" value="Login" />
            </div>
            <p></p>
            <p>
              Don't have an account? <Link to="/signup">Sign up here!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
