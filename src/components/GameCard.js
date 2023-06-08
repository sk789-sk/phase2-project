import React from "react";

//Pass Data from game db here 

function GameCard({src}) {

    return (
        <li className="card">
            <img src={"https://via.placeholder.com/400"} alt="game_Name" />
            <h4>Game Name</h4>            
            <a href="Link"></a>
            <p>Genre</p>
            <p>Tag</p>
            <p>Price</p>
            <p>Rating</p>
            <button>Favorite</button>
            <button>Owned</button>
        </li>
    )
}

export default GameCard