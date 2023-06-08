import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

{/* <nav>
<p>NavBar</p>
<a>Home</a>
<a>Genre1</a>
<a>genre2</a>
<a>Genre3</a>
<a>genre4</a>
<a>Favorites</a>
<a>Owned</a>
</nav> */}

// {name  
// link
// imageSrc 
// genre,
//  tag, 
//  price 
//  rating 
//  owned,
//  favorite}


function Home({games}){

let renderGames = games.map((game) => {
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
            <h1>You are Home</h1>
            <Header />
            {renderGames}
        </div>
    )
    }

export default Home