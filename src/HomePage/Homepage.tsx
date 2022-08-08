import React from 'react'
import "./HomePage.css"
import { Row, Col } from "react-grid-system";
import "react-simple-flex-grid/lib/main.css";


const HomePage = () => {
    return (
        <div>
            <div className = "intro-text">
            <div className = "subtext">
                Hi!<br />
                I'm Michael a<br />
                UX designer based<br />
                In New York<br />
            </div>
            </div>
        </div>
    );
}

export default HomePage;