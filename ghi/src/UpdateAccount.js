import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateAccount = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [coder, setCoder] = useState(true);
  const navigate = useNavigate();

  const { fetchWithCookie } = useToken();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.id = id;
    data.email = email;
    data.username = username;
    data.password = password;
    data.first_name = first_name;
    data.last_name = last_name;
    data.coder = coder;
    console.log(data);

    const UpdateAccountUrl =
      `${process.env.REACT_APP_API_HOST}/accounts/` + data.id;
    const updateConfig = {
      method: "PUT",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetchWithCookie(UpdateAccountUrl, "PUT", updateConfig);

    const updateResponse = await fetch(UpdateAccountUrl, updateConfig);
    if (updateResponse.ok) {
      console.log("Account information updated successfully");
      setId("");
      setEmail("");
      setUsername("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setCoder(true);

      navigate("/");
    }
  };

  return (
    <div className="centerthings">
      <div className="card text-bg-dark mb-3 cardbody">
        <h2 className="card-header title-spacing">
          Update Account Information
        </h2>
        <div className="card-body card-color">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label text-danger">User ID</label>
              <input
                name="User ID"
                type="text"
                className="form-control bg"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-warning">Email</label>
              <input
                name="email"
                type="text"
                className="form-control bg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-info">Username</label>
              <input
                name="username"
                type="text"
                className="form-control bg"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-primary">Password</label>
              <input
                name="password"
                type="text"
                className="form-control bg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-success">First Name:</label>
              <input
                name="first_name"
                type="text"
                className="form-control bg"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-danger">Last Name</label>
              <input
                name="last_name"
                type="text"
                className="form-control bg"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="button-spacing">
              <input
                className="btn btn-warning"
                type="submit"
                value="Update Account"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
