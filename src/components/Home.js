import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import NewGameBar from "./NewGameBar";
import GameCard from "./GameCard";

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


function Home({games}){

let renderGames = games.map((game) => {
    return <GameCard />
})
    return(
        <div>
            <h1>You are Home</h1>
            <NavBar />
            <SearchBar />
            <NewGameBar />
            {renderGames}
        </div>
    )
    }

export default Home