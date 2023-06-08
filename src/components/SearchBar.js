import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchBar({setFilter}){ //{setFilter}
    const navigate = useNavigate()

    function handleClick(e){
        navigate("/Filtered")
    }

    function handleChange(e){
         setFilter(filter => e.target.value)
    }

    return(
    <div>
        <input onClick={handleClick} onChange={handleChange} type="text" className="SearchBar" placeholder="Search by Name or Tag"/>
    </div>
    )
    }

export default SearchBar