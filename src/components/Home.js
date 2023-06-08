import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import NewGameBar from "./NewGameBar";

{/* <nav>
<p>NavBar</p>
<a>Home</a>
<a>Genre1</a>
<a>genre2</a>
<a>Genre3</a>
<a>genre4</a>
<a>Favorites</a>
<a>Owned</a>
</nav> */}


function Home(){
    return(
        <div>
            <h1>You are Home</h1>
            <NavBar />
            <SearchBar />
            <NewGameBar />
        </div>
    )
    }

export default Home