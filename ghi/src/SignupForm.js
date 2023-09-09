import { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";
import "./toggle.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [coder, setCoder] = useState(true);

  const [coder_id, setCoderId] = useState(7);
  const [avatar_url, setAvatarUrl] = useState("");
  const [bio, setBio] = useState("");
  const [git_url, setGitUrl] = useState("");
  const [personal_interests, setPersonalInterests] = useState("");
  const [coding_since, setCodingSince] = useState(0);
  const [open_to_work, setOpenToWork] = useState(false);
  const [fullstack, setFullstack] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [python, setPython] = useState(false);
  const [java, setJava] = useState(false);
  const [html, setHtml] = useState(false);

  const { register } = useToken();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const accountData = {
      email: email,
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      coder: coder,
    };
    register(accountData, `${process.env.REACT_APP_API_HOST}/accounts`);

    // make api token to get call token, account.id from return
    

    const profileData = {
      coder_id, // HOW DO WE CALL THE ACCOUNT_ID INTO CODER_ID
      avatar_url,
      bio,
      git_url,
      personal_interests,
      coding_since,
      open_to_work,
      fullstack,
      frontend,
      backend,
      javascript,
      python,
      java,
      html,
    };

    const profileUrl = `${process.env.REACT_APP_API_HOST}/profile`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = fetch(profileUrl, fetchConfig);
    if (response.ok) {
      setCoderId(7); // this needs to be set
      setAvatarUrl("");
      setBio("");
      setGitUrl("");
      setPersonalInterests("");
      setCodingSince(0);
      setOpenToWork(false);
      setFullstack(false);
      setFrontend(false);
      setBackend(false);
      setJavascript(false);
      setPython(false);
      setJava(false);
      setHtml(false);
    }

    e.target.reset();
    navigate("/");
  };

  return (
    <div className="centerthings">
      <div className="card text-bg-light mb-3 cardbody">
        <h2 className="card-header">Sign up</h2>
        <div className="card-body">
          <form onSubmit={(e) => handleRegistration(e)}>
            <div className="mb-3">
              <label className="form-label text-warning">Email Address</label>
              <input
                name="email"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-info">Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-danger">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-success">First name</label>
              <input
                name="first"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-primary">Last name</label>
              <input
                name="last"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <p>
              <b>Are you a coder?</b>
            </p>
            <div>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    setCoder(!coder);
                  }}
                  defaultChecked={true}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <p></p>
            <div>
              <input
                className="btn btn-warning"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
