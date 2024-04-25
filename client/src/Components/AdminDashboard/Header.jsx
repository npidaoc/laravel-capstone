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
    <header className='custom-header'>
      <div className='custom-menu-icon'>
        <BsJustify className='custom-icon' onClick={OpenSidebar} />
      </div>
      <div className='custom-header-left'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="custom-home-text">Home</span>
        </Link>
      </div>
      <div className='custom-header-right'>
        <BsFillBellFill className='custom-icon' />
        <BsFillEnvelopeFill className='custom-icon' />
        <div className="custom-dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <BsPersonCircle className='custom-icon' />
          {isDropdownOpen && (
            <div className="custom-dropdown-content">
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








