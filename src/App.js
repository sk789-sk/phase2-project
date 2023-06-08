import logo from './logo.svg';
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

//should bundle all the cards together to make this not import hell.


function App() {

  const [games,setGames] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/Games")
    .then((resp => resp.json()))
    .then((data) =>setGames(data))
  },[])

  // console.log(games)

//games is everything in the database
//the smaller arrays are the filtered games to render

//Could pull all of this into a filter function of our own
const favoriteGames = games.filter((game) => {
  return (game.Favorite === true)
})

const OwnedGames = games.filter((game)=> {
  return (game.Owned === true)
})

//Make a genre filter function
const genre1Games = games.filter((game)=> {    //FPS
  return (game.Genre === "FPS")
} ) 
const genre2Games = games.filter((game) => {  //RPG
  return (game.Genre === "RPG")
}) 
const genre3Games = games.filter((game) => {  //MOBA
  return (game.Genre === 'MOBA')
}) 
const genre4Games = games.filter((game) => { //Sports
  return (game.Genre === 'Sports')
}) 
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
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home games={filteredGames} setFilter={setFilter}/>} />
        <Route path = '/Genre1' element = {<Genre1 genre1Games={genre1Games} />} />
        <Route path = '/Genre2' element = {<Genre2 genre2Games={genre2Games} />} />
        <Route path = '/Genre3' element = {<Genre3 genre3Games={genre3Games}/>} />
        <Route path = '/Genre4' element = {<Genre4 genre4Games={genre4Games}/>} />
        <Route path = '/Owned' element = {<Owned ownedGames={OwnedGames}/>} />
        <Route path = '/Favorites' element = {<Favorite favoriteGames={favoriteGames}/>} />
        {/* <Route path = '/Filtered' elements = {<FilteredGames filteredGames={filteredGames} />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;


{/* <div>
<Home />
<Header />
<NavBar />
<SearchBar />
<NewGame />
<p>landing Page test</p>
<p>Hello</p>

</div> */}