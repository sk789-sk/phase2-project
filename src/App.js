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


const favoriteGames = [games[0], games[5]]
const OwnedGames = [games[1]]
const genre1Games = [games[2]]
const genre2Games = [games[3]]
const genre3Games = [games[4]]
const genre4Games = [games[5]]

//console.log(favoriteGames)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/Genre1' element = {<Genre1 genre1Games={genre1Games} />} />
        <Route path = '/Genre2' element = {<Genre2 genre2Games={genre2Games} />} />
        <Route path = '/Genre3' element = {<Genre3 genre3Games={genre3Games}/>} />
        <Route path = '/Genre4' element = {<Genre4 genre4Games={genre4Games}/>} />
        <Route path = '/Owned' element = {<Owned ownedGames={OwnedGames}/>} />
        <Route path = '/Favorites' element = {<Favorite favoriteGames={favoriteGames}/>} />
        

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