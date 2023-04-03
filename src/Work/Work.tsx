import React, { useState, useEffect, } from 'react'
import './Work.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import image from "../Images/ProjectPhotos/SierraProjectPhoto.png"

const Work = () => {

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
        <div className="format">
            {(screenWidth > 935) && (
                <div className = "work-container">
                    <Row> 
                        <Col xs={1} sm={1} md={1} lg={3} className = "col-project">
                            <img src={image} alt="Project Photo" className="project_photo">
                            </img>
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={3} className = "col-project">
                            <img src={image} alt="Project Photo" className="project_photo">
                            </img>
                        </Col>
                    </Row>
                </div>
            )
            }
            
            {(screenWidth < 935) && (
                <div className = "work-container">
                    <Row> 
                        <Col xs={1} sm={1} md={1} lg={1} className = "col-project">
                            <img src={image} alt="Project Photo" className="project_photo">
                            </img>
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1} className = "col-project">
                            <img src={image} alt="Project Photo" className="project_photo">
                            </img>
                        </Col>
                    </Row>
                </div>
            )
            }

        </div>
    );
}

export default Work;
