import React from "react";
import GameCard from "./GameCard"
import Header from "./Header";

function Favorite({favoriteGames}){     

let renderGames = favoriteGames.map((game) => {
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

// function renderFavorites(){
//     return <GameCard />
// }


    return(
        <div>
            <Header />
            <h1>You are Favorites</h1>
            {renderGames}         {/* Change from function call to variable after */ }

        </div>


    )
    }

export default Favorite