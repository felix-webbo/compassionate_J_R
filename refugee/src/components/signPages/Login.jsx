import React, { useState } from "react";
import axios from "axios";

import "./Login.scss";

import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:3001/login", formData)
      .then((response) => {
        console.log("Login successful:", response.data);
        setError("Logged in Successfully");
        // You can add a redirect or other actions upon successful login.
        navigate("/home");
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("Login failed. Please check your email and password.");
      });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <p className="error-message">{error}</p>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
