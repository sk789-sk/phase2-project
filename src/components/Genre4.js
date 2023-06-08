import React from "react";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import Header from "./Header";

function Genre4({genre4Games}){

let renderGames = genre4Games.map((game) => {
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
            <h1>You are genre4</h1>
            {renderGames}
        </div>


    )
    }

export default Genre4