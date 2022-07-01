import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:8000/api/registration", {
        name,
        email,
        password,
      });
      console.log(res)
      navigate("/login")
    } catch (err) {
      setError(true);
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
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
     
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
    </div>
   </div>
  );
}