import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClearFields = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleRegister = () => {
    // Add validation and registration logic here
    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Reset any previous errors
    setError("");

    // Perform the registration
    axios
      .post("http://localhost:3001/register", formData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        // You can add a redirect or other actions upon successful registration.
        setSuccess("Registration successful:");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <p className="error-message">{error}</p>
        <p className="success-message">{success}</p>
        <button
          type="button"
          onClick={handleRegister}
          onSubmit={handleClearFields}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
