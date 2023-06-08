import React from "react";

function NewGameBar(){

function handleSubmit(e) {
    e.preventDefault()

    const newGameObj = {
        'Name': e.target.name.value,
        'Link': e.target.link.value,
        'Image': e.target.image.value,
        'Genre': e.target.genre.value,
        'Tag': e.target.tag.value,
        'Rating': e.target.rating.value,
        'Price':e.target.price.value,
        'Owned':e.target.owned.checked,
        'Favorite':e.target.fav.checked
    }

    fetch("http://localhost:3000/Games", {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newGameObj)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    
}
    return(
        <div className="newGameForm">
            <h2>New Game</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Game Name" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="text" name="link" placeholder="Link to Game" /> 
                <select id="genreType" name="genre">
                    <option value ='default'></option>
                    <option value='FPS'>FPS</option>
                    <option value='RPG'>RPG</option>
                    <option value='MOBA'>MOBA</option>
                    <option value='Sport'>Sports</option>
                    <option value='Puzzle'>Puzzle</option>
                    <option value='other'>Other</option>
                </select>
                <input type="text" name="tag" placeholder='(ex:Strategy,Casual)'/>
                <input type="float" name="price" placeholder="Price" />
                <input type="number" name='rating' placeholder='Rating out of 5' />

                <label>Favorite?<input type="checkbox" name='fav'/></label>
                <label><input type="checkbox" name='owned' />Owned?</label>
                <button type="submit">Add Game</button>
            
            </form>

        </div>
    )
    }

export default NewGameBar