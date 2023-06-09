import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import NewGameBar from "./NewGameBar";

function Header({setFilter, setGames}){
    return(
        <div className="header-div">
            <NavBar />
            <SearchBar setFilter={setFilter}/>
            <NewGameBar setFilter={setFilter} setGames={setGames} />
        </div>
    )
    }

export default Header