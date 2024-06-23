import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <img src="/Logo.svg" alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-section">
                <h3>Navigation</h3>
                <ul className="footer-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>123 Main Street, Anytown, USA</p>
                <p>(123) 456-7890</p>
                <p>info@example.com</p>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <ul className="footer-social">
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;