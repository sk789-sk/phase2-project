import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function Genre1({genre1Games, setFilter , setGames}){

let renderGames = genre1Games.map((game) => {
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
    summary={game.Summary}
        />
})

    return(
        <div> 
        <Header setFilter={setFilter} setGames={setGames} />
            <h1 className="headerName">First Person Shooters (FPS)</h1> 
            {renderGames}
        </div>
    )
    }

export default Genre1