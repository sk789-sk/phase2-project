import React from "react";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import Header from "./Header";

function Owned({ownedGames}){

let renderGames = ownedGames.map((game) => {
    return <GameCard key={game.id}
    name={game.Name}
link={game.Link}
imageSrc={game.Image}
genre={game.Genre}
tag={game.Tag}
price={game.Price}
rating={game.rating}
owned={game.owned}
favorite={game.favorite}
    />
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