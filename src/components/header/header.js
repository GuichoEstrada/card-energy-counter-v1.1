import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/MGNMEMBLEM-WHT.png';

import './header.styles.scss';

const Header = () => {
    return(
        <header role="banner">
            <nav id="navbar-primary" className="navbar" role="navigation">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbar-primary-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to='/'><img className="grow" id="logo" src={logo} alt="logo" /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;
