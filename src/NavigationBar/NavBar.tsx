import React from "react";
import "./NavBar.css"
const NavBar = () => {

    return (
        <div className = "container">
            <header>
                <div className = "nav-name"> 
                    Michael James Lee
                </div>
                <nav>
                    <ul>
                        <li> <a> Work </a> </li>
                        <li> <a> About </a> </li>
                        <li> <a> Contact </a> </li>
                    </ul>
                </nav>
            </header>
            <div className = "intro-text">
                <div className = "text-portion1">Hi!</div>
                <div className = "text-portion2">I'm Michael, a</div>
                <div className = "text-portion2">UX Designer</div>
                <div className = "text-portion2">based in New York</div>
            </div>
        </div>  
    );
}

export default NavBar;
