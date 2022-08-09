import React from 'react'
import "./HomePage.css"
import { Row, Col } from 'react-grid-system';
import github from "../Images/github.png"
import instagram from "../Images/instagram.png"
import mail from "../Images/mail.png"
import linkedin from "../Images/linkedin.png"


const HomePage = () => {
    return (
        <div>
            <div className = "intro-text">
                <div className = "subtext">
                    Hi! <br/>
                    I'm Michael a<br />
                    UX designer based<br />
                    in New York<br />
                    <div className = "images-container">
                        <Row align = "center">
                            <Col xs= {2.5} sm = {2.5} md ={2.5}>
                                <a><img className ="images" src = {mail} alt = "github"></img></a>
                            </Col>
                            <Col xs= {2.5} sm = {2.5} md ={2.5}>
                                <a href = "https://www.linkedin.com/in/michael-lee-4955699b/">
                                <img className ="images" src = {linkedin} alt = "linkedin"></img></a>
                            </Col>
                            <Col xs= {2.5} sm = {2.5} md ={2.5}>
                                <a href = "https://github.com/mjl776"> 
                                <img className ="images" src = {github} alt = "github"></img></a>
                            </Col>
                            <Col xs= {2.5} sm = {2.5} md ={2.5}>
                                <a href = "https://www.instagram.com/_michaeljlee_/"> 
                                <img className ="images" src = {instagram} alt = "instagram"></img></a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;