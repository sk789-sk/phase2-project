import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import NewGameBar from "./NewGameBar";

function Header(){
    return(
        <div id="headerDiv">
            <h1>Header</h1>
            <NavBar />
            <SearchBar />
            <NewGameBar />
        </div>
    )
    }

export default Header