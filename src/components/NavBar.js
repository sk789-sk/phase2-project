import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Genre1">Genre1</Link>
            <Link to = "/Genre2">Genre2</Link>
            <Link to = "/Genre3">Genre3</Link>
            <Link to = "/Genre4">Genre4</Link>
            <Link to = "/Owned">Owned</Link>
            <Link to = "/Favorites">Favorites</Link>


        </nav>
        



    )
    }
            // <a>Home</a>
            // <a>Genre1</a>
            // <a>genre2</a>
            // <a>Genre3</a>
            // <a>genre4</a>
            // <a>Favorites</a>
            // <a>Owned</a>            
        
export default NavBar