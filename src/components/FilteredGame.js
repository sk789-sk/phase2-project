import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function FilteredGames({filteredGames, setFilter}){

let renderGames = filteredGames.map((game) => {
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
        <Header setFilter={setFilter}/>
            <h1>You are Genre1</h1> 
            {renderGames}
        </div>
    )
    }

export default FilteredGames