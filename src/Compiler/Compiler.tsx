import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import image from '../Images/Compiler/Compiler.png';
import "./Compiler.css";
const Compiler = () => {
    return (
        <div className = "compiler-container">
            <Row className = "row-compiler">
                <Col xs={1} sm={1} md={1} lg={1}>
                    <a
                        href= "https://compiler-3c49e.firebaseapp.com"
                        className = ""
                    >
                        <img src = { image } className = "compiler-image"></img>
                    </a>
                 </Col>
                 <div className = "project-description">
                    <Col xs={1} sm={1} md={1} lg={1}>
                            I built a frontend application called compiler 
                            with 3 other students in my Remote Projects class using React <br/>
                            Typescript for the frontend, Firebase authentication services for the backend, <br/>
                            and Firebase Firestore for the backend data storage. <br/>
                            The web application was designed to be a Minimum viable product <br/>
                            of what a computer science social media platform would look like. <br/>
                            Click the image to view the website and sign up to test its features!  <br/>
                    </Col>
                </div>
            </Row>
        </div>
    );
}

export default Compiler;