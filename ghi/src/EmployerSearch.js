import React, { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import "./index.css";

function BootstrapInput(props) {
  const { value, onChange, id, htmlFor, labelText } = props;

  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type="checkbox"
        className="btn-check color-blue"
        id={id}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary color-blue" htmlFor={htmlFor}>
        {labelText}
      </label>
    </>
  );
}

function EmployerSearch() {
  const [profiles, setProfiles] = useState([]);
  const [showTableHeader, setShowTableHeader] = useState(false);
  const [fullstack, setFullstack] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [python, setPython] = useState(false);
  const [java, setJava] = useState(false);
  const [html, setHtml] = useState(false);
  const { fetchWithCookie } = useToken();

  const handleFullstackChange = (event) => {
    setFullstack(!fullstack);
  };

  const handleFrontendChange = (event) => {
    setFrontend(!frontend);
  };

  const handleBackendChange = (event) => {
    setBackend(!backend);
  };

  const handleJavascriptChange = (event) => {
    setJavascript(!javascript);
  };

  const handlePythonChange = (event) => {
    setPython(!python);
  };

  const handleJavaChange = (event) => {
    setJava(!java);
  };

  const handleHtmlChange = (event) => {
    setHtml(!html);
  };

  // HANDLESUBMIT ======================================
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      fullstack,
      frontend,
      backend,
      javascript,
      python,
      java,
      html,
    };

    const searchUrl = `${process.env.REACT_APP_API_HOST}/employer/search`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetchWithCookie(searchUrl, "POST", fetchConfig);

    const response = await fetch(searchUrl, fetchConfig);
    if (response.ok) {
      const searchResults = await response.json();
      setProfiles(searchResults);
      setShowTableHeader(true);
      console.log(searchResults);
    }
  };

  return (
    <>
      <h1>Employer Search</h1>
      <p></p>
      <p></p>
      <form onSubmit={handleSubmit} id="search-form">
        <div
          className="btn-groups"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          {/* TECH STACK */}
          <BootstrapInput
            value={fullstack}
            onChange={handleFullstackChange}
            id="fullstack"
            htmlFor="fullstack"
            labelText="Fullstack"
          />
          <BootstrapInput
            value={frontend}
            onChange={handleFrontendChange}
            id="frontend"
            htmlFor="frontend"
            labelText="Frontend"
          />
          <BootstrapInput
            value={backend}
            onChange={handleBackendChange}
            id="backend"
            htmlFor="backend"
            labelText="Backend"
          />
        </div>
        <p></p>
        {/* LANGUAGES */}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <BootstrapInput
            value={javascript}
            onChange={handleJavascriptChange}
            id="javascript"
            htmlFor="javascript"
            labelText="Javascript"
          />
          <BootstrapInput
            value={python}
            onChange={handlePythonChange}
            id="python"
            htmlFor="python"
            labelText="Python"
          />
          <BootstrapInput
            value={java}
            onChange={handleJavaChange}
            id="java"
            htmlFor="java"
            labelText="Java"
          />
          <BootstrapInput
            value={html}
            onChange={handleHtmlChange}
            id="html"
            htmlFor="html"
            labelText="HTML"
          />
        </div>
        {/* BUTTON */}
        <p></p>
        <div>
          <button type="submit" className="btn btn-warning">
            Search
          </button>
          <p></p>
        </div>
      </form>
      {/* SEARCH RESULTS TABLE */}
      {showTableHeader ? (
        profiles && profiles.length > 0 ? (
          <div>
            <table className="table table-striped">
              <thead>
                <tr className="color-yellow">
                  <th>Coder Name</th>
                  <th>Tech Stack</th>
                  <th>Languages</th>
                  <th>Profile link</th>
                </tr>
              </thead>
              <tbody className="color-yellow">
                {profiles?.map((profile) => (
                  <tr className="color-yellow" key={profile.coder_id}>
                    <td className="color-orange">
                      {profile.first_name} {profile.last_name}
                    </td>
                    <td className="color-orange">
                      {profile.fullstack && "Fullstack"}
                      {profile.frontend && <br />}
                      {profile.frontend && "Frontend"}
                      {profile.backend && <br />}
                      {profile.backend && "Backend"}
                    </td>
                    <td>
                      {profile.javascript && "Javascript"}
                      {profile.javascript && <br />}
                      {profile.python && "Python"}
                      {profile.python && <br />}
                      {profile.java && "Java"}
                      {profile.java && <br />}
                      {profile.html && "HTML"}
                    </td>
                    <td>
                      <a href={`localhost:3000/profile/${profile.coder_id}`}>
                        {profile.first_name}'s Profile
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No coders matched your search</p>
        )
      ) : null}
    </>
  );
}

export default EmployerSearch;
