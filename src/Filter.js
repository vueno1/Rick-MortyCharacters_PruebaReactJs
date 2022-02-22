import { useEffect } from "react";
import React from 'react';

const Filter = ({setActiveGenre, activeGenre, setFiltered, popular}) => {

    useEffect (()=>{

        if (activeGenre===0) {
            setFiltered(popular)
            return;
        } 

        const filtered = popular.filter((movie)=>
        movie.species.includes(activeGenre)
        )

        setFiltered (filtered)

    }, [activeGenre])

    return (
     
        <div className="filter-container">
            <button className={activeGenre === "" ? "active" : ""} onClick={() => setActiveGenre("")} >All</button>
            <button className={activeGenre === "Human" ? "active" : ""} onClick={() => setActiveGenre("Human")} >Humanos</button>
            <button className={activeGenre === "Alien" ? "active" : ""} onClick={() => setActiveGenre("Alien")} >Alien</button>        
        </div>
    );
}

export default Filter;
