import React from "react";
import GameCard from "./GameCard"
import Header from "./Header";

function Favorite({favoriteGames}){     
    const game1 = favoriteGames[1]


let renderGames = favoriteGames.map((game) => {
    return <GameCard />
})

// function renderFavorites(){
//     return <GameCard />
// }


    return(
        <div>
            <Header />
            <h1>You are Favorites</h1>
            {renderGames}         {/* Change from function call to variable after */ }

        </div>


    )
    }

export default Favorite