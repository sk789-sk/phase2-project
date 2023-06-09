import React from "react";
import GameCard from "./GameCard";
import Header from "./Header";

function Home({games , setFilter, setGames}){

let renderGames = games.map((game) => {
    return <GameCard key={game.id} name={game.Name} link={game.Link} imageSrc={game.Image}
genre={game.Genre} tag={game.Tag} price={game.Price} rating={game.Rating} owned={game.Owned} 
favorite={game.Favorite} summary={game.Summary}
    />
})

    return(
        <div className="main-page">
            <Header setFilter={setFilter} setGames={setGames} />         
            <h1 className="PageHeader">Home</h1>
            <ul className="card-container">
                {renderGames}
            </ul>
            
        </div>
    )
    }

export default Home