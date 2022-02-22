
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {

  //variable "popular" donde voy a ingresar todos los objetos. 
  //inicializa en un array vacio
  //la cual llenare con mi API.
  const [popular, setPopular] = useState ([])

  //estado para filtrar
  //la inicializo en array vacio 
  //ingreso todos mis objetos de la API
  //a futuro filtro esta variable con la categoria indicada 
  const [filtered, setFiltered] = useState ([])

  //estado para activar cual de los botones esta activado 
  // ejemplo: all, humanos, aliens 
  const [activeGenre, setActiveGenre] = useState ("")

  useEffect ( () => {

    //le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. 
    //React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), 
    //y la llamará más tarde después de actualizar el DOM. 
    fetchPopular ()

  }, 
  //se vuelve a ejecutar si adentro del [] le pongo un argumento. 
  //array de dependencia  
  [])

  
  //////////////////////
  //FETCH = TRAIGO API 
  //////////////////////
  //cada vez que traigo una info de API, uso async porque esa informacion va a demorar en entrar (PROMESA)
  const fetchPopular = async () => {
    
    //con el async, la info dentro va con un await
    const data = await fetch ('https://rickandmortyapi.com/api/character')

    //convertirlo a json
    const character = await data.json ()

    setPopular (character.results) //popular = [{todos los objetos}]
    setFiltered (character.results) // filtered = [{todos los objetos}]
  }

  return (
    <div className="App">

      <h1>RICK & MORTY (React App) </h1>

      {/*FILTER = RETURN BOTONES */}
      <Filter 
      popular={popular} 
      setFiltered={setFiltered} 
      setActiveGenre= {setActiveGenre}
      activeGenre={activeGenre} 
      />

      {/*//// FRAMER-MOTION////*/}
      <motion.div 
        layout 
        className='popular-movies'>

        <AnimatePresence>
          {/*mapeo mi variable "filtered" = popular para mostrar contenido de mi array e imprimirlo */}
          {filtered.map (movie => {

            //AGREGO MI COMPONENTE <MOVIE/>
            //KEY = mapeo y traigo todos los ID
            //MOVIE  = mapeo y traigo todos los objetos
              return <Movie key={movie.id} movie={movie}/>
            })}

          </AnimatePresence>

      </motion.div>

    </div>
  );
}

export default App;
