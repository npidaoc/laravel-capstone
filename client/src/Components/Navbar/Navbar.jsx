import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook for programmatic navigation

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(prevState => !prevState);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className="logo" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="program" smooth={true} offset={-260} duration={500}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-150} duration={500}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} offset={-260} duration={500}>
                        Partners
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} offset={-260} duration={500}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
                        Contact us
                    </Link>
                </li>
            </ul>
            <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;










// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import logo from '../../assets/logo.png';
// import menu_icon from '../../assets/menu-icon.png';
// import { Link } from 'react-scroll';
// import { NavLink } from 'react-router-dom'; // Import NavLink for routing

// function Navbar() {
//     const [sticky, setSticky] = useState(false);

//     useEffect(() => {
//         window.addEventListener('scroll', () => {
//             window.scrollY > 50 ? setSticky(true) : setSticky(false);
//         });
//     }, []);

//     const [mobileMenu, setMobileMenu] = useState(false);

//     const toggleMenu = () => {
//         setMobileMenu(prevState => !prevState);
//     };

//     return (
//         <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//             <img src={logo} alt="" className="logo" />
//             <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
//                 <li>
//                     <Link to="hero" smooth={true} offset={0} duration={500}>
//                         Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="program" smooth={true} offset={-260} duration={500}>
//                         Program
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="about" smooth={true} offset={-150} duration={500}>
//                         About us
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="campus" smooth={true} offset={-260} duration={500}>
//                         Partners
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="testimonials" smooth={true} offset={-260} duration={500}>
//                         Testimonials
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
//                         Contact us
//                     </Link>
//                 </li>
//                 <li>
//                     <NavLink to="/login" className="btn">
//                         Login
//                     </NavLink>
//                 </li>
//             </ul>
//             <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
//         </nav>
//     );
// }

// export default Navbar;










// import React, {useEffect, useState} from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import menu_icon from '../../assets/menu-icon.png'
// import { Link } from 'react-scroll';


// function Navbar  () {

//     const [sticky, setSticky] = useState(false);

//     useEffect(()=>{
//       window.addEventListener('scroll',()=>{
//         window.scrollY > 50 ? setSticky(true) : setSticky(false);
//       })
//     },[])

//     const [mobileMenu, setMobileMenu] = useState(false);
//     const toggleMenu = ()=>{
//       mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
//     }

//   return (
//     <nav className={`container ${sticky? 'dark-nav' : ''}`}>
//         <img src={logo} alt="" className='logo' />
//         <ul className={mobileMenu?'':'hide-mobile-menu'}>

//             <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>

//             <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>

//             <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>

//             <li><Link to='campus' smooth={true} offset={-260} duration={500}>Partners</Link></li>

//             <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>

//             <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>

//         </ul>

//         <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
//     </nav>
//   )
// }

// export default Navbar;