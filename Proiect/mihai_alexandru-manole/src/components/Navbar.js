import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                   Proiect Tehnologii Web - Tema 5
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Acasă
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-links">
                            Profil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/job-application" className="nav-links">
                            Aplicații Job
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
