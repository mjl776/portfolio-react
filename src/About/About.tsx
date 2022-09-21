import React from 'react'
import "./About.css"
import image from "../Images/ProfilePic/Profile.png"
const About = () => {

    return (
        <div className = "about-container"> 
            <div className = "images-container">
                <img src={image}/>
            </div>
            <div className = "text-for-about">
            Hi, I’m Michael and I’m a computer science major at NYU. <br/>
            My main expertise is in Software Engineering <br/>
            and I recently gained experience in UX Design <br/>
            through projects. 
            </div>
            
        </div>
    );

}

export default About;