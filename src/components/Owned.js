import React from "react";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import Header from "./Header";

function Owned({ownedGames}){

let renderGames = ownedGames.map((games) => {
    return <GameCard />
})
    
    return(
        <div>
            <Header />
            <h1>You are Owned</h1>
            {renderGames}
        </div>
    )
    }

export default Owned