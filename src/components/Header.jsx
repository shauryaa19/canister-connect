import React from "react"
import './Header.css'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="brand">
                    <h1>CanisterConnect</h1>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to = "/jobs">For Job Seekers</Link></li>
                        <li><Link to = "/projects">For Employers</Link></li>
                        <li><Link to = "/about">About us</Link></li>
                    </ul>
                </nav>
                <div className="user-actions">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </header>
    )
}