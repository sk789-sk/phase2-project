import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import NewGameBar from "./NewGameBar";

function Header({setFilter}){
    return(
        <div id="headerDiv">
            <h1>Header</h1>
            <NavBar />
            <SearchBar setFilter={setFilter}/>
            <NewGameBar />
        </div>
    )
    }

export default Header