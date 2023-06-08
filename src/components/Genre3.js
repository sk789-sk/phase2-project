import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function Genre3({genre3Games}){

let renderGames = genre3Games.map((games) => {
    return <GameCard />
})

    return(
        <div>
            <Header />
            <h1>You are Genre3</h1>
            {renderGames}
        </div>


    )
    }

export default Genre3