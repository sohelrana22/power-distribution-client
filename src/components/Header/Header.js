import React from 'react';

const Header = (props) => {
    const { currentPosts } =props;
    let total = 0;
    for(const data of currentPosts) {
        total = total + data.amount;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid container">
    <a className="navbar-brand text-info" href='/'>Power-Hack</a>
    <button className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
     
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/register">Register</a>
        </li>
        <li className="nav-item px-3">
          <h3 className='text-white'>Paid Total: {total}</h3>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;