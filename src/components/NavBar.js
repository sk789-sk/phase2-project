import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/Genre1">FPS Games</Link>
            <Link to = "/Genre2">RPG Games</Link>
            <Link to = "/Genre3">MOBA Games</Link>
            <Link to = "/Genre4">Sport Games</Link>
            <Link to = "/Owned">Owned Games</Link>
            <Link to = "/Favorites">Favorites Games</Link>
            <Link to ="/Filtered">Searched</Link>
        </nav>
    )
    }       
        
export default NavBar