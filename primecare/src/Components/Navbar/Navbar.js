// import './Navbar.css'
// //import './navbar1.css'
// import logo from './../../assets/sigil.png'
// import React , { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import MenuIcon from '@mui/icons-material/Menu';
// import Rtclock from '../Rtclock/Rtclock';

// import LightModeIcon from './../../assets/light.png';
// import DarkModeIcon from './../../assets/dark.png';

// const Navbar = ({theme , setTheme}) => {

//   const toggleMode = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light')
//   }

//     const [sticky, setSticky] = useState(false);

//     useEffect(() => {
//         window.addEventListener('scroll', () => {
//             window.scrollY > -10 ? setSticky(true) : setSticky(false)
//         })
//     }, [])

//     const [mobileMenu, setMobileMenu] = useState(false)
//     const toggleMenu = () => {
//         mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
//     }
//     return (
//         <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//             <img src={logo} alt="" className='logo' />
//             <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
//                 <li>
//                   <NavLink exact to='/' onClick={() => setMobileMenu(false)}>
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/about' onClick={() => setMobileMenu(false)}>
//                     About
//                   </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/contactus' onClick={() => setMobileMenu(false)}>
//                       Contact Us
//                     </NavLink>
//                 </li>
//                 <li>
//                   <Rtclock/>
//                 </li>
//                 <li>
//                   <img onClick={() => {toggleMode()}} src={theme === 'light' ? DarkModeIcon : LightModeIcon} alt='' className='toggle-icon'/>
//                 </li>
//             </ul> 
//             <div className={mobileMenu ? '' : 'menu-icon dark-menu-icon'} onClick={toggleMenu}><MenuIcon /></div>
//         </nav>
//     )
// }

// export default Navbar

//import './Navbar.css';
import './navbar1.css'
import logo from './../../assets/sigil.png';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Rtclock from '../Rtclock/Rtclock';

import LightModeIcon from './../../assets/light.png';
import DarkModeIcon from './../../assets/dark.png';

const Navbar = ({ theme, setTheme }) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > -10 ? setSticky(true) : setSticky(false);
    });

    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-menu-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </div>
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li>
          <NavLink exact to="/" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMobileMenu(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" onClick={() => setMobileMenu(false)}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/playarea" onClick={() => setMobileMenu(false)}>
            Play Area
          </NavLink>
        </li>
        <li>
          <Rtclock />
        </li>
        <li>
          <img
            onClick={toggleMode}
            src={theme === 'light' ? DarkModeIcon : LightModeIcon}
            alt="toggle icon"
            className="toggle-icon"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

