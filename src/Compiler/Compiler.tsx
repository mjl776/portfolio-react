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
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <div className = "project-description">
                            I built a frontend application called Compiler 
                            with 3 other students in my Remote Projects Class at NYU using React <br/>
                            Typescript for the frontend, Firebase authentication services for authentication, <br/>
                            and Firebase Firestore for the backend data storage. <br/>
                            The web application was designed to be a minimum viable product <br/>
                            of what a computer science social media platform would look like. <br/>
                            Click the image to view the website and sign up to test its features!  <br/>
                        </div>
                    </Col>
            </Row>
        </div>
    );
}

export default Compiler;