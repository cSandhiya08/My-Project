import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();  

    if (email === "" || password === "") {
      setError("Please fill all fields");
    } else {
      setError("");
      navigate("/home");   
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>
          <label>Email :</label>
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label>Password :</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="signbtn">
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}

export default Signin;