import React from "react";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import Header from "./Header";

function Owned({ownedGames, setFilter, setGames}){

let renderGames = ownedGames.map((game) => {
    return <GameCard key={game.id}
    name={game.Name}
link={game.Link}
imageSrc={game.Image}
genre={game.Genre}
tag={game.Tag}
price={game.Price}
rating={game.Rating}
owned={game.Owned}
favorite={game.Favorite}
    />
})
    
    return(
        <div>
            <Header setFilter={setFilter} setGames={setGames} />
            <h1 className="PageHeader">Owned Games</h1>
            {renderGames}
        </div>
    )
    }

export default Owned