import React, { useState } from "react";
import "./index.css";

const SigninSignup = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    alert(`${isSignin ? "Sign In" : "Sign Up"} successful!`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignin ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {!isSignin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">{isSignin ? "Sign In" : "Sign Up"}</button>
        </form>
        <p>
          {isSignin ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-link" onClick={() => setIsSignin(!isSignin)}>
            {isSignin ? " Sign Up" : " Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninSignup; 