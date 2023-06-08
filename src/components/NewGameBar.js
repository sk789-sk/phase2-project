import React from "react";

function NewGameBar(){

function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
}
    return(
        <div className="newGameForm">
            <h2>New Game</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Game Name" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="float" name="price" placeholder="Price" />
                <button type="submit">Add Game</button>

            </form>

        </div>
    )
    }

export default NewGameBar