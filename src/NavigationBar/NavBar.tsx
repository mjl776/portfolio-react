import React, {useState, useEffect, } from 'react'
import "./NavBar.css"
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';
import { SwipeableDrawer } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";



const NavBar = () => {

    // Screen width setter
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // Open State Setter
    const [open, setOpen] = useState(false);
    const navigationLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
    ];

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
                    <div>
                    <div className = "mobile-menu">
                    <IconButton onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer 
                        anchor="top"
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                    >
                    {/* Close button */}

                    <div
                        onClick={() => setOpen(false)}
                        onKeyPress={() => setOpen(false)}
                        role="button"
                        tabIndex={0}
                    >
                        <IconButton>
                            <ClearOutlinedIcon className = "x-icon"/>
                        </IconButton>
                    </div>
                    <Divider />

                    {/* List of Items in Dropdown */}
                    <List>
                        {navigationLinks.map((item) => (
                            <ListItem key={item.name}>
                                <NavLink
                                    to= {item.href}
                                    className="mobile-nav-element"
                                >
                                    {item.name}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
                    </div>
                    </div>
                )}

        </div>  
    );
}

export default NavBar;
