import React, {useState, useEffect, } from 'react'
import "./NavBar.css"
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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

                {(screenWidth > 1000) && (
                    <nav>
                        <ul>
                            <li> <a href = "/work"> Work </a> </li>
                            <li> <a href = "/about"> About </a> </li>
                            <li> <a href = "/contact"> Contact </a> </li>
                        </ul>
                    </nav>
                )}

                {/* Mobile Screen */}
                {/* hamburger icon shows the drawer on click */}

                {(screenWidth < 1000) && (
                    <div className = "mobile-menu">
                        <MenuIcon></MenuIcon>
                    </div>
                )}
        </div>  
    );
}

export default NavBar;
