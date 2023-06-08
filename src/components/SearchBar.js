import React, { useState } from "react";

function SearchBar({setFilter}){

    function handleChange(e){
        console.log(e.target.value)
        setFilter(filter => e.target.value)
    }

    return(
    <div>
        <input onChange={handleChange} type="text" className="SearchBar" placeholder="Search by Name or Tag"/>
    </div>
    )
    }

export default SearchBar