

import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => { 
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="home-text">Home</span>
        </Link>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <div className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <BsPersonCircle className='icon' />
          {isDropdownOpen && (
            <div className="dropdown-content">
              <p>Profile</p>
              <p>Settings</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;







