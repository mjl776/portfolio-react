import React, { useState, useEffect, } from 'react'
import './Work.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import image from "../Images/ProjectPhotos/SierraProjectPhoto.png"
import compiler from "../Images/ProjectPhotos/CompilerProjectPhoto.png"
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

const Work = () => {

    // Screen width setter
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
        <div className="format">
            {(screenWidth > 935) && (
                <div className = "work-container">
                    <Row className = "row-work"> 
                        <li>   
                            <NavLink
                                to = "/compiler"
                                className=""
                            >
                            <Col xs={1} sm={1} md={1} lg={1} className = "col-project">
                                <img src={compiler} alt="Project Photo" className="project_photo">
                                </img>
                            </Col>
                            </NavLink>
                            </li>
                        <li>
                            <NavLink
                                to = "/sierra"
                                className=""
                            >
                                <Col xs={1} sm={1} md={1} lg={1} className = "col-project">
                                        <img src={image} alt="Project Photo" className="project_photo">
                                        </img>
                                </Col>
                            </NavLink>
                        </li>
                    </Row>
                </div>
            )
            }
            
            {(screenWidth < 935) && (
                <div className = "work-container">
                    <Row> 
                        <li>   
                            <NavLink
                                to = "/compiler"
                                className=""
                            >
                                <Col xs={1} sm={1} md={1} lg={1} className = "col-project">
                                    <img src={compiler} alt="Project Photo" className="project_photo">
                                    </img>
                                </Col>
                            </NavLink>
                        </li>
                        <li>   
                            <NavLink
                                to = "/sierra"
                                className=""
                            >
                            <Col xs={1} sm={1} md={1} lg={1} className = "col-project">
                                <img src={image} alt="Project Photo" className="project_photo">
                                </img>
                            </Col>
                            </NavLink>
                       </li>
                    </Row>
                </div>
            )
            }

        </div>
    );
}

export default Work;
