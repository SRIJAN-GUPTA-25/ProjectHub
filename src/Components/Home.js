import React from 'react';
import './HomePage.css';

import projectHubImage from './Capture2.jpg';
import { useNavigate } from 'react-router-dom';
function Home(props) {
    const isAuthenticated = props.auth ? true : false;
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (isAuthenticated) navigate("/account");
        else navigate("/login");
    }
    return (

        <div className="homepage" >
            <div className="tagline-container">
                <h1 className="tagline">Discover, Explore, and Collaborate:</h1>
                <h1 className="subtagline">Welcome to ProjectHub!</h1>
                <h3 className="description">One Stop Destination for awesome development projects!</h3>
                <button onClick={handleButtonClick} class="button"> {isAuthenticated ? "Manage your Projects" : "Get Started"}</button>
            </div>
            <div className="image-container">
                <img src={projectHubImage} alt="ProjectHub" className="project-image" />
            </div>
        </div>
    )
}

export default Home;