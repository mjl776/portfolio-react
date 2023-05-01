import React, { useState, useEffect, } from 'react'
import "./About.css"
import image from "../Images/ProfilePic/Profile.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const About = () => {

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

    return (
        <div>
            {(screenWidth > 830) && (

            <div className = "about-container"> 
                <Row className = "row-about">
                    <Col xs={1} sm={1} md={1} lg={2.5}>
                        <div className = "images-container">
                            <img src={image}/>
                        </div>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={2.5}>
                        <div className = "text-for-about">
                            Hi, I’m Michael and I’m a computer science major at NYU. <br/>
                            My main expertise is in Software Engineering <br/>
                            and I recently gained exposure to UX Design <br/>
                        </div>
                    </Col>
                </Row>
            </div>
            
            )
         }
         
       {(screenWidth < 830) && (

        <div className = "about-container"> 
        <Row className = "row-about">
            <Col xs={1} sm={1} md={1} lg={2.5}>
                <div className = "images-container">
                    <img src={image}/>
                </div>
            </Col>
            <Col xs={1} sm={1} md={1} lg={2.5}>
                <div className = "text-for-about">
                    Hi, I’m Michael and I’m a computer science major at NYU. <br/>
                    My main expertise is in Software Engineering <br/>
                    and I recently gained exposure to UX Design <br/>
                </div>
            </Col>
        </Row>
        </div>

        )
    }

    </div>

    );
}

export default About;