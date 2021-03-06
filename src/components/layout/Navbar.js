import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../users/UserItem';
import {Link} from "react-router-dom";


const Navbar = ({ icon, title}) => {

        return (
            <div className="App">
                <nav className="navbar bg-primary">
                    <h1>
                    <i className={icon}></i> {title}
                    </h1>

                    <ul>
                        <li>
                            <Link to='/GitHub-Finder-ReactApp'>Home</Link>
                        </li>
                        <li>
                        <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );

    }

Navbar.defaultProps ={
    title : "GitHub Finder",
    icon : "fab fa-github"
};

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}



export default Navbar;
