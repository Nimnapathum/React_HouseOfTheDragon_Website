import './Hero.css'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import Welcome from '../Welcome/Welcome'
import React , { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  
  return (
    <div className='hero container'>
        <div className="hero-text">
            <Welcome/>
            <h1>The Greatest House in the World</h1>
            <p>
            House Targaryen of King`s Landing, known poetically as the House of the Dragon, is the royal house of the Seven Kingdoms of Westeros. A century ago, House Targaryen conquered and unified the realm under the leadership of Aegon the Conqueror and his sister-queens Visenya and Rhaenys.
            </p>

            <div onClick={toggleMenu}>
            <NavLink exact to="/history" onClick={() => setMobileMenu(false)}>
            <button className='btn'>Explore More <div className='btnSetup'><ReadMoreIcon /></div></button>
            </NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default Hero