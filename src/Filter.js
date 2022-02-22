import { useEffect } from "react";
import React from 'react';

const Filter = ({setActiveGenre, activeGenre, setFiltered, popular}) => {

        //setFiltered → trae la funcion parea cambiar la variable filtered q esta en App.js
        //popular → traigo todos mis objetos para poder trabajarlo.

    useEffect (()=>{

        //si mi variable "activeGenre" = string vacia.
        if (activeGenre=== "") {

            //seteo la variable = [{todos mis objetos}]
            setFiltered(popular)
            return;
        } 

        //filtro mi array "popular" por solo la "species" que indica dentro de (activeGenre)
        //es decir, si activeGenre = "Human", me lo filtra solo x humanos.
        const filtered = popular.filter((movie)=> movie.species.includes(activeGenre))

        //uso esa variable para setearlo a mi funcion SETFILTERED. 
        setFiltered (filtered)

    }, 
    //esto se actualizara cada vez q la variable activeGenre cambie.
    [activeGenre])

    return (
     
        <div className="filter-container">
            <button 
                className={activeGenre === "" ? "active" : ""} //si toco el boton ALL, activa mis cambios CSS
                onClick={() => setActiveGenre("")} //evento para el boton, activa el estado de activeGenre.                
            >All</button>

            <button className={activeGenre === "Human" ? "active" : ""} onClick={() => setActiveGenre("Human")} >Humanos</button>
            <button className={activeGenre === "Alien" ? "active" : ""} onClick={() => setActiveGenre("Alien")} >Alien</button>        
        </div>
    );
}

export default Filter;
