import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
                <Link exact to="/home">Top 100</Link>
                <Link to="/search">Search</Link>
                <Link to="/portfolio">Portfolio</Link>
        </div>
        )
    }
export default NavBar;