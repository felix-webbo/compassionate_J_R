import React, { useState } from "react";

import "./Switch.scss";
import RegisterForm from "./RegisterForm";
import Login from "./Login";

function SwitchLoginSignUp() {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="app">
      <div className="form-switch">
        <button onClick={toggleForm}>
          {showRegisterForm ? "Switch to Login" : "Switch to Register"}
        </button>
      </div>
      {showRegisterForm ? <RegisterForm /> : <Login />}
    </div>
  );
}

export default SwitchLoginSignUp;
