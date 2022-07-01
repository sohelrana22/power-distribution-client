import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const { Bill } =props;
    let total = 0;
    for(const data of Bill) {
        total = total + data.amount;
    }
    return (
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
          <h3 className='text-white m-1'>Paid Total: {total}</h3>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;