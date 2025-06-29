import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState("Too Short");

  const navigate = useNavigate();

  const toggleMode = () => setIsSignUp(!isSignUp);

  const checkPasswordStrength = (value) => {
    if (value.length < 4) return "Too Short";
    if (value.length < 8) return "Weak";
    if (/\d/.test(value) && /[.!@#$%^&*]/.test(value)) return "Strong";
    return "Medium";
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordStatus(checkPasswordStrength(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert("Hi, Dear User your's Account created successfully for " + email);
      setIsSignUp(false);
    } else {
      alert("Signed in successfully");
      navigate("/iphone-calculator");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div>
          <h1 className="title">Welcome to SimpleFlow</h1>
          <p className="subtitle">Your Gateway to Effortless Management.</p>
        </div>
        <div>
          <h2 className="section-title">Seamless Collaboration</h2>
          <p className="section-desc">
            Effortlessly work together with your team in real-time.
          </p>
        </div>
      </div>

      <div className="right-panel">
        <h2 className="brand">SimpleFlow</h2>
        <div className="toggle-buttons">
          <button
            className={`toggle ${isSignUp ? "active" : ""}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={`toggle ${!isSignUp ? "active" : ""}`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className="input"
            required
          />

          <div className="password-check">
            <p>
              Password Strength:{" "}
              <span className={passwordStatus.toLowerCase()}>
                {passwordStatus}
              </span>
            </p>
            <ul>
              <li>At least 8 characters</li>
              <li>Contains a number</li>
              <li>Contains a symbol (.!@#$%)</li>
            </ul>
          </div>

          <button className="submit-button">
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="divider">OR</div>

        <div className="social-buttons">
          <button>
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/ios-filled/50/mac-os.png"
              alt="Apple"
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/color/48/windows-10.png"
              alt="Microsoft"
            />
          </button>
        </div>

        <p className="terms">
          By signing up, you agree to SimpleFlow's <br />
          <a href="#">Terms of Use</a> & 
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
