import React from 'react';
import Logo from '../Images/logo.png';
import { Link } from "react-router-dom";

function Nav() {
    const styleNav = {
        textDecoration: 'none'
    }

    return (
        <div className="Nav">
            <nav>
                <img src={Logo} alt="logo" />
                <ul>
                    <Link to="/" style={styleNav}>
                        <li><i className="fas fa-home"></i>Home</li>
                    </Link>
                    <Link to="/charts" style={styleNav}>
                        <li><i className="fas fa-chart-bar"></i>Charts</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;