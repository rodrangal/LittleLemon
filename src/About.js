import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a company dedicated to providing the best services to our customers.</p>
            </div>
            <div className="about-right">
                <img src="/restaurant.jpg" alt="Left" className="image-left" />
                <img src="/restaurantchefB.jpg" alt="Right" className="image-right" />
            </div>
        </div>
    );
};

export default About;