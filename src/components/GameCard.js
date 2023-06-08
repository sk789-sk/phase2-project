import React from "react";

//Pass Data from game db here 

function GameCard({name = 'Name', 
link ='click to play', 
imageSrc = "https://via.placeholder.com/400", 
genre, tag, price =0, rating = "", owned=true, favorite=false})


{


    return (
        <li className="card">
            <img src={imageSrc} alt={name} />
            <h4>{name}</h4>            
            <a href={link}>Play Here</a>
            <p>Genre {genre}</p>
            <p>Tags {tag}</p>
            <p>Price {price}</p>
            <p>Rated {rating}/5</p>
            <button> {owned ? "Favorite":"Unfavorite"}</button>
            <button>{favorite? "Owned": "UnOwned" }</button>
        </li>
    )
}

export default GameCard