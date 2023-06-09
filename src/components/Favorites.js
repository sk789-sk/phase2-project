import React from "react";
import GameCard from "./GameCard"
import Header from "./Header";

function Favorite({favoriteGames, setFilter, setGames}){     

let renderGames = favoriteGames.map((game) => {
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
            <h1 className="PageHeader">Favorite Games</h1>
            {renderGames}        

        </div>


    )
    }

export default Favorite