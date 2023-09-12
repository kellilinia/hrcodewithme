import  useToken  from "@galvanize-inc/jwtdown-for-react";
import { useState} from "react";


const ProfileForm = () => {
    const [coder_id] = useState("");
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

    const { fetchWithCookie, token } = useToken();
    console.log("platform token:", token);
    window.token = token;
    console.log("this is the window token", window.token)

    const [t] = useState(token);
    const handleSubmit = async (event) => {
        console.log("handle Submit")
        event.preventDefault();
        const data = {
        coder_id,
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

        const tokenUrl = `${process.env.REACT_APP_API_HOST}/token`;
        const fetchConfigToken = {
        method: "GET",
        credentials: "include", 
        }


        const registerResponse = fetch(tokenUrl, fetchConfigToken);
        if (registerResponse.ok) {
        console.log("This is where the token is printed", registerResponse)
        }

        if (t !== null) {
        let id = JSON.parse(atob(t.split(".")[1])).account.id;
        console.log("this is the id we want:", id);

        

        const profileUrl = `${process.env.REACT_APP_API_HOST}/profile/${id}`;
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        fetchWithCookie(profileUrl, "PUT", fetchConfig);
    

        const updateProfileResponse = await fetch(profileUrl, fetchConfig);
        if (updateProfileResponse.ok) {
            const responseData = await updateProfileResponse.json();
            // setCoderId();
            // setAvatarUrl('');
            // setBio('');
            // setGitUrl('');
            // setPersonalInterests('');
            // setCodingSince(0);
            // setOpenToWork(false);
            // setFullstack(false);
            // setFrontend(false);
            // setBackend(false);
            // setJavascript(false);
            // setPython(false);
            // setJava(false);
            // setHtml(false);
            // console.log(responseData);
        }
    }
    };

    
    return (
    <>
        <div className="my-3 d-flex">
            <div className="container">
            <h2 className="card-header">Bio</h2>    
                <div className="row">
                <div className="shadow p-4 mt-4" style={{ width: '350px', height: '600px' }}>
                    <form onSubmit={(event) => handleSubmit(event)} id="bio">
                    <div className="form-floating mb-3">
                        <textarea style={{ height: '550px'}}
                        value={bio}
                        onChange={(event) => { 
                            setBio(event.target.value);
                        }}
                        type="textarea"
                        className="form-control"
                        name="bio"
                        />
                    </div> 
                    </form>
                </div>
                </div>
            </div>
            <div className="container">
                <>
                        <div className="row">
                            <div className="shadow p-4 mt-4" style={{ width: '350px', height: '400px' }}>
                                <form onSubmit={(event) => handleSubmit(event)} id="avatar_url">
                                <div className="form-floating mb-3">
                                    <input 
                                    value={avatar_url}
                                    onChange={(event) => { 
                                        setAvatarUrl(event.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                    name="avatar_url"
                                    />
                                    <label htmlFor="avatar_url">Avatar Url</label>
                                </div>
                                </form>   
                                <form onSubmit={(event) => handleSubmit(event)} id="git_url">
                                <div className="form-floating mb-3">
                                    <input 
                                    value={git_url}
                                    onChange={(event) => {
                                        setGitUrl(event.target.value);
                                    }}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="git_url"
                                    name="git_url"
                                    placeholder="Git Url"
                                    />
                                    <label htmlFor="git_url">Github/Gitlab Link</label>
                                </div>
                                </form>
                                <form onSubmit={(event) => handleSubmit(event)} id="coding_since">
                                <div className="form-floating mb-3">
                                    <input 
                                    value={coding_since}
                                    onChange={(event) => {
                                        setCodingSince(event.target.value);
                                    }}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="coding_since"
                                    name="coding_since"
                                    placeholder="Coding Since:"
                                    />
                                    <label htmlFor="coding_since">Coding Since:</label>
                                </div>
                                </form>
                                <form onSubmit={(event) => handleSubmit(event)} id="open_to_work">
                                <label>Open To Work?</label>
                                    <div className="form-floating mb-3" style={{ height: '50px' }}>
                                        
                                        <select 
                                        value={open_to_work ? "Yes" : "No"}
                                        onChange={(event) => {
                                            setOpenToWork(event.target.value);
                                        }}
                                        className="form-select"
                                        id="open_to_work"
                                        name="open_to_work"
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>    
                                        </select>
                                    </div>
                                </form>
                                <div>
                                    <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
                                </div>
                            </div>
                        </div>
                </>
            </div>
            <div className="container">
                <div className="row">
                    <div className="shadow p-4 mt-4 center" style={{ width: '350px', height: '600px' }}>
                        <label htmlFor="professional_skills">Professional Coding Skills</label>
                        <form onSubmit={(event) => handleSubmit(event)} id="professional_skills">
                        <div className="form-floating mb-3">
                            <div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="fullstack"
                                        name="fullstack"
                                        value={fullstack}
                                        onChange={(event) => {
                                            setFullstack(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="fullstack">
                                    Fullstack
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="frontend"
                                        name="frontend"
                                        value={frontend}
                                        onChange={(event) => {
                                            setFrontend(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="frontend">
                                    Frontend
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="backend"
                                        name="backend"
                                        value={backend}
                                        onChange={(event) => {
                                            setBackend(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="backend">
                                    Backend
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="javascript"
                                        name="javascript"
                                        value={javascript}
                                        onChange={(event) => {
                                            setJavascript(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="javascript">
                                    JavaScript
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="python"
                                        name="python"
                                        value={python}
                                        onChange={(event) => {
                                            setPython(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="python">
                                    Python
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="java"
                                        name="java"
                                        value={java}
                                        onChange={(event) => {
                                            setJava(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="java">
                                    Java
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="html"
                                        name="html"
                                        value={html}
                                        onChange={(event) => {
                                            setHtml(event.target.value);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="html">
                                    Html
                                    </label>
                                </div>
                                <p>


                                </p>
                                <div className="form-floating mb-3">
                                    <label className="form-label text-danger">Personal Interests</label>
                                    <textarea style={{ height: '325px' }}
                                    value={personal_interests}
                                    onChange={(event) => {
                                        setPersonalInterests(event.target.value);
                                    }}
                                    required
                                    className="form-control"
                                    name="personal_interests"
                                    />
                                    <label htmlFor="personal_interests">Personal Interests</label>
                                </div> 
                            </div>
                        </div> 
                        </form>              
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default ProfileForm;


