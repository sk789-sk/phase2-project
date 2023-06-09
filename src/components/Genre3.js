import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function Genre3({genre3Games , setFilter, setGames}){

let renderGames = genre3Games.map((game) => {
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
            <h1 className="PageHeader">Massive Online Battle Arena (MOBA) </h1>
            <ul className="card-container">
                {renderGames}
            </ul>
        </div>


    )
    }

export default Genre3