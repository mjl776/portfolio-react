import React, {useState, useEffect, } from 'react'
import "./NavBar.css"
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';
import { SwipeableDrawer } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

const MenuItem = withStyles({
    root: {
      justifyContent: "flex-end"
    }
})(ListItem);

const NavBar = () => {

    // Screen width setter
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // Open State Setter
    const [open, setOpen] = useState(false);

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

    const navigationLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
    ];
    

    return (

        <div className = "container">


            <header>
            
            {/* Desktop Screen */}

                <nav className = "navbar">
                    <a href = "/" className = "nav-branding"> Michael Lee </a>
                {(screenWidth > 800) && (

                    <ul className = "nav-menu">
                        <li className = "nav-item"> 
                            <a href= "/" className = "nav-link"> Home </a>
                        </li>
                        <li className = "nav-item"> 
                            <a href= "/about" className = "nav-link"> About </a>
                        </li>
                        <li className = "nav-item"> 
                            <a href= "/work" className = "nav-link"> Work </a>
                        </li>
                    </ul>
                )}

                {(screenWidth < 800) && (
                    <div>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon className = "menu-icon">
                            </MenuIcon>
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
                        <IconButton className = "x-position">
                            <ClearOutlinedIcon className = "x-icon"/>
                        </IconButton>
                    </div>

                    {/* List of Items in Dropdown */}
                    
                    <List>
                        {navigationLinks.map((item) => (
                            <ListItem key={item.name} style={{ justifyContent: "center"}}>
                                <NavLink 
                                    to= {item.href}
                                    className="mobile-nav-element"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
                </div>
            
                )}  

                </nav>
            </header>
        </div>
    );
}

export default NavBar;
