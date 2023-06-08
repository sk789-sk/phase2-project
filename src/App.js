import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import SearchBar from './components/SearchBar';
import NewGame from './components/NewGameBar';
import Home from './components/Home';
import Genre1 from './components/Genre1';
import Owned from './components/Owned';
import Favorite from './components/Favorites';



function App() {

  const [games,setGames] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/Games")
    .then((resp => resp.json()))
    .then((data) =>setGames(data))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/Genre1' element = {<Genre1/>} />
        {/* <Route path = '/Genre2' element = {<Genre2/>} />
        <Route path = '/Genre3' element = {<Genre3/>} />
        <Route path = '/Genre4' element = {<Genre4/>} /> */}
        <Route path = '/Owned' element = {<Owned/>} />
        <Route path = '/Favorites' element = {<Favorite/>} />
        

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