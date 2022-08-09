import React, {useState, useEffect, } from 'react'
import "./NavBar.css"
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    //Screen Width Listener
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <div className = "container">
                <div className = "nav-name"> 
                    <a className = "name-tag" href = "/">
                        Michael James Lee
                    </a>
                </div>
    
                {/* Desktop Screen */}

                {(screenWidth > 800) && (
                    <nav>
                        <ul>
                           <li> <NavLink to='/work' className={({ isActive }) =>
                                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin' }> 
                                    Work </NavLink> </li>
                           <li><NavLink to='/about' className={({ isActive }) =>
                                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin' }> 
                                    About </NavLink> </li> 
                            <li><NavLink to='/' className={({ isActive }) =>
                                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin' }> 
                                    Home 
                            </NavLink> </li> 
                        </ul>
                    </nav>
                )}

                {/* Mobile Screen */}
                {/* hamburger icon shows the drawer on click */}

                {(screenWidth < 800) && (
                    <div className = "mobile-menu">
                        <MenuIcon> </MenuIcon>
                    </div>
                )}

        </div>  
    );
}

export default NavBar;
