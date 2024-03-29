import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/Home.css";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome, User!</h1>
                <p>Explore our services and resources to support undertrial prisoners.</p>
            </div>
        </div>
    );
}

export default Hero;
