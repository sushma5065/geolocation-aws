import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import './App.css';

function Navbar() {
    return (
        <div>
            <header className="navbar">
                <div className="nav-links">
                    <Link className="navlink" to="/Home">Home</Link>
                    <NavLink className="navlink" to="/Docs">Docs</NavLink>
                </div>
                <div className="signout-btn">
                    <Authenticator>
                        {({ signOut }) =>
                            <button className="sioutbutton" onClick={signOut}>Sign Out</button>
                        }
                    </Authenticator>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
