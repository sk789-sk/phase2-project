import React, { useState } from "react";

//Pass Data from game db here 

function GameCard({name = 'Name', 
link, 
imageSrc = "https://via.placeholder.com/400", 
genre, tag, price =0, rating, summary = "Additional Info to Come...",  owned=true, favorite=false}  )
{

const [isPrimary,setIsPrimary] = useState(true)
function handleClick(){
    setIsPrimary(!isPrimary)}


//Add Patch Request if time allows
const [isFav,setIsFav] = useState(favorite)
function handleFavClick(){
    setIsFav(!isFav)
}

//Add Patch Request if time allows
const [isOwned,setIsOwned] = useState(owned)
function handleOwnedClick(){
    setIsOwned(!isOwned)
}

    return (
        <li className="card">
            <img onClick={handleClick} className="cardImage" src={imageSrc} alt={name} />
            <h4 className="gameName">{name}</h4>            
            <a className="playhere" href={link}>Play Here</a>

            <div className="main-info"> 
                {isPrimary ? 
                <div id="primary-info">
                    <p className="genreName">Genre:      {genre}</p>
                    <p className="tagName">Tags:      {tag}</p>
                    <p className="price">Price:      {price}</p>
                    <p className="rating">Rated:      {rating}/5</p>
                </div> : 
                <div id="secondary-info">
                    <p>{summary}</p>
                </div> }
            </div>
            <div className="buttons">
                <button onClick={handleFavClick}> {isFav ? "Remove from Favorites":"Add to Favorite"}</button>
                <button onClick={handleOwnedClick}>{isOwned? "Remove from Owned": "Add to Owned" }</button>
            </div>
        </li>
    )

}
export default GameCard