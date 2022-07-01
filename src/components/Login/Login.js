import axios from "axios";
import { useContext, useRef } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { Context } from "./../../contexts/Context";
import { Nav } from 'react-bootstrap';
import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid container">
    <Nav.Link as={NavLink} className="navbar-brand text-info" to='/'>Power-Hack</Nav.Link>
    <Nav.Link as={NavLink} className="navbar-brand text-info" to='/'>Home</Nav.Link>
    <Nav.Link as={NavLink} className="navbar-brand text-info" to='/login'>Login</Nav.Link>
    <Nav.Link as={NavLink} className="navbar-brand text-info" to='/register'>Register</Nav.Link>
    <button className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
         <li className="nav-item px-3">
    
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div>
      <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your Email..."
          ref={emailRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
      </div>
    </div>
  );
}