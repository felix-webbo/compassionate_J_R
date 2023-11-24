import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navbar from "./components/navbar/Navbar";
import css from "./components/styles/app.module.scss";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Program from "./components/programs/Program";
import RegisterForm from "./components/signPages/RegisterForm";
import Login from "./components/signPages/Login";
import SwitchLoginSignUp from "./components/signPages/SwitchLoginSignUp";
import PaymentForm from "./components/paymentForm/PaymentForm";

import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className={`bg-primary ${css.container}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/login" />} />

        <Route path="/switch" element={<SwitchLoginSignUp />} />
        <Route path="/donate" element={<PaymentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
