import React from "react";
import NavBar from "./NavBar";
import GameCard from "./GameCard"

function Favorite({favoriteGames}){     
    //console.log(favoriteGames[0])
    const game1 = favoriteGames[1]
    console.log(game1.Name)

let renderFavorites = favoriteGames.map((game) => {
    return <GameCard />
})

// function renderFavorites(){
//     return <GameCard />
// }


    return(
        <div>
            <NavBar />
            <h1>You are Favorites</h1>
            {renderFavorites}         {/* Change from function call to variable after */ }

        </div>


    )
    }

export default Favorite