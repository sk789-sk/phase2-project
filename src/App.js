import './App.css';

import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Genre1 from './components/Genre1';
import Owned from './components/Owned';
import Favorite from './components/Favorites';
import Genre2 from './components/Genre2';
import Genre3 from './components/Genre3';
import Genre4 from './components/Genre4'
import FilteredGames from './components/FilteredGame'

//Maybe bundle all the cards together to make this not import hell.

function App() {

  const [games,setGames] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/Games")
    .then((resp => resp.json()))
    .then((data) =>setGames(data))
  },[])

//games is everything in the database
//the smaller arrays are the filtered games to render

const favoriteGames = games.filter((game) => {
  return (game.Favorite === true)
})

const OwnedGames = games.filter((game)=> {
  return (game.Owned === true)
})

// Make a genre filter function that just takes in a genre and apply it here instead of all these

function genreFilter(array,filterby) {
  let filteredArray = []
  for (let val in array){
    if (array[val].Genre === filterby){
      filteredArray.push(array[val])
    }
  }
  return filteredArray
}

const genre1Games = genreFilter(games,'FPS')
const genre2Games = genreFilter(games,'RPG')
const genre3Games = genreFilter(games, 'MOBA')
const genre4Games = genreFilter(games, 'Sports')


const genre5Games = games.filter ((game) => { //Strategy
  return (game.Genre === 'Puzzle') 
}) 

const [filter,setFilter] = useState("")

const filteredGames = games.filter((game) => {
return (game.Name.toLowerCase().includes(filter.toLowerCase()) ||
        game.Tag.toLowerCase().includes(filter.toLowerCase())||
        game.Genre.toLowerCase().includes(filter.toLowerCase())   
        ) 

})

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home games={filteredGames} setFilter={setFilter} setGames={setGames}/>} />
        <Route path = '/Genre1' element = {<Genre1 genre1Games={genre1Games} setFilter={setFilter} setGames={setGames}/>} />
        <Route path = '/Genre2' element = {<Genre2 genre2Games={genre2Games} setFilter={setFilter} setGames={setGames}/>} />
        <Route path = '/Genre3' element = {<Genre3 genre3Games={genre3Games} setFilter={setFilter} setGames={setGames}/>} />
        <Route path = '/Genre4' element = {<Genre4 genre4Games={genre4Games} setFilter={setFilter} setGames={setGames}/>} />
        <Route path = '/Owned' element = {<Owned ownedGames={OwnedGames} />} setFilter={setFilter} setGames={setGames}/>
        <Route path = '/Favorites' element = {<Favorite favoriteGames={favoriteGames} setFilter={setFilter} setGames={setGames}/>} />
        <Route path = '/Filtered' element = {<FilteredGames filteredGames={filteredGames} setFilter={setFilter} setGames={setGames}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
