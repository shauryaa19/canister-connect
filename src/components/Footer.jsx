import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
    return (
    <footer>
        <div className="footer-container">
            <div className="footer-content">
                <p>&copy; 2023 CanisterConnect. All rights reserved.</p>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}