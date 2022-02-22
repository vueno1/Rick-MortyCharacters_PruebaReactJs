
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';



function App() {

  //traigo todos mis objetos 
  const [popular, setPopular] = useState ([])

  //filtro por categoria 
  const [filtered, setFiltered] = useState ([])

  //filtrar por especie
  const [activeGenre, setActiveGenre] = useState ("")

  useEffect ( () => {
    fetchPopular ()
  }, [])

  
  //////////////////////
  //FETCH = TRAIGO API 
  //////////////////////
  //cada vez que traigo una info de API, uso async porque esa informacion va a demorar en entrar (PROMESA)
  const fetchPopular = async () => {
    
    //con el async, la info dentro va con un await
    const data = await fetch ('https://rickandmortyapi.com/api/character')

    //convertirlo a json
    const character = await data.json ()

    //seteamos la variable popular.
    setPopular (character.results)

    setFiltered (character.results)
  }



  return (
    <div className="App">

      <h1>RICK & MORTY (React App) </h1>

        <Filter 
        popular={popular} 
        setFiltered={setFiltered} 
        setActiveGenre= {setActiveGenre}
        activeGenre={activeGenre} 
        />

      {/*uso de framer-motion */}
      <motion.div 
      layout 
      className='popular-movies'>

        <AnimatePresence>
          {/*mapeo mi variable = popular para mostrar contenido de mi array e imprimirlo */}
          {filtered.map (movie => {

            //AGREGO MI COMPONENTE 
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
