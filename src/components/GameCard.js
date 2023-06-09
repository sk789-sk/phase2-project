import React from "react";

//Pass Data from game db here 

function GameCard({name = 'Name', 
link ='click to play', 
imageSrc = "https://via.placeholder.com/400", 
genre, tag, price =0, rating , owned=true, favorite=false})


{


    return (
        <div className="card">
            <img className="cardImage" src={imageSrc} alt={name} />
            <h4 className="gameName">{name}</h4>            
            <a href={link}>Play Here</a>
            <p className="genreName">Genre {genre}</p>
            <p className="tagName">Tags {tag}</p>
            <p className="price">Price {price}</p>
            <p className="rating">Rated {rating}/5</p>
            <button> {owned ? "Favorite":"Unfavorite"}</button>
            <button>{favorite? "Owned": "UnOwned" }</button>
        </div>
    )
}

export default GameCard