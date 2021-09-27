import React from 'react';
import logo from '../../images/logo.PNG'
import './Header.css'
const Header = () => {
  return (
    <div>
      {/* header part */}
      <div className="containe w-75 mx-auto shadow m-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container-fluid">

    <div className=" header mx-auto ">
    <img  src={logo} alt="" className='logo me-2'/>
      <h3>Welcome to Celebrities house</h3>
      <h2>Total Budget : <span className='fw-bold'>$800 Million</span></h2>
    </div>
  </div>
</nav>
      </div>
    </div>
  );
};

export default Header;