import React, { useState } from "react";
import "./login.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <h1> Login </h1>{" "}
      <p className="terms">
        By signing in you are agreeing to our{" "}
        <a href="#"> Terms and privacy policy </a>{" "}
      </p>{" "}
      <div className="form-group">
        <label htmlFor="email"> Email Address </label>{" "}
        <input type="text" id="email" placeholder="Enter your email" />
      </div>{" "}
      <div className="form-group">
        <label htmlFor="password"> Password </label>{" "}
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
        />{" "}
        {/* <i
                                                        className={fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}}
                                                        onClick={togglePasswordVisibility}
                                                    ></i> */}{" "}
        {passwordVisible ? (
          <FaEyeSlash
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <FaEye
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          />
        )}{" "}
      </div>{" "}
      <div className="form-group">
        <div>
          <input type="checkbox" id="remember-password" />
          <label htmlFor="remember-password"> Remember password </label>{" "}
        </div>{" "}
        <a href="#" className="forgot-password">
          Forget password{" "}
        </a>{" "}
      </div>{" "}
      <Link to={"/home"}>
        <button> Login </button>{" "}
      </Link>{" "}
      <p className="connect"> or connect with </p>{" "}
      <div className="social-media">
        {" "}
        {/* <i className="fab fa-facebook-f"></i>
                                                    <i className="fab fa-instagram"></i>
                                                    <i className="fab fa-pinterest-p"></i>
                                                    <i className="fab fa-linkedin-in"></i> */}{" "}
        <div>
          <FaFacebookF />
        </div>{" "}
        <div>
          <FaInstagram />
        </div>{" "}
        <div>
          <FaPinterestP />
        </div>{" "}
        <div>
          <FaLinkedinIn />
        </div>{" "}
      </div>{" "}
      {/* <div className="fingerprint-icon">
                                                    <i className="fas fa-fingerprint"></i>
                                                </div> */}{" "}
      <p className="register-link">
        Don 't have an account? <a href="#">Register</a>{" "}
      </p>{" "}
    </div>
  );
};

export default Login;
