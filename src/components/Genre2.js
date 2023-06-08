import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function Genre2({genre2Games}){

let renderGames = genre2Games.map((game) => {
        return <GameCard />
})
    return(
        <div>
            <Header />
            <h1>You are genre2</h1>
            <h3>name</h3>
            {renderGames}
        </div>


    )
    }

export default Genre2