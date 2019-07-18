import React, { Component } from 'react';
import Logo from '../Images/logo.png';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <nav>
                    <img src={Logo} alt="logo" />
                    <ul>
                        <BrowserRouter>
                            <li><i class="fas fa-home"></i>Home</li>
                            <Link to="/charts">
                                <li><i class="fas fa-chart-bar"></i>Charts</li>
                            </Link>
                        </BrowserRouter>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;