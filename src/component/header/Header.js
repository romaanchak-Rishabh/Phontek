import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import phontekLogo from "../../assets/phontek-logo.png";

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [goHome, setGoHome] = useState(true);

console.log(goHome);

    return(
        <header>
            <div className='header-logo'>
                <NavLink to='/Phontek/'><img src={phontekLogo} alt='phontek-logo' /></NavLink>
            </div>
            <div className={showMenu ? 'mobile-menu-options' : 'menu-options'}  >
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/'>HOME</NavLink>
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/data-cables'>DATA CABLES</NavLink>
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/chargers'>CHARGERS</NavLink>
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/handsfree'>HANDSFREE</NavLink>
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/microSD'>MEMORY CARD</NavLink>
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/pendrive'>PENDRIVE</NavLink>
                <NavLink exact activeClassName='active-menu' className='menu-option-options' onClick={()=> {setGoHome(false)}} to='/Phontek/contact-us'>CONTACT US</NavLink>


                <div className='social-media-icons'>
                    
                </div>

            </div>
            <div className='hamburger-menu'>
                <a href='#' onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu size={25}/>
                </a>
            </div>
        </header>
    )
}

export default Header;