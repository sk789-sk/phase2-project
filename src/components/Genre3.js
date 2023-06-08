import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function Genre3({genre3Games}){

let renderGames = genre3Games.map((game) => {
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
            <h1>You are Genre3</h1>
            {renderGames}
        </div>


    )
    }

export default Genre3