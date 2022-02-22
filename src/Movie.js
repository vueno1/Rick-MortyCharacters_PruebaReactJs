import { motion } from 'framer-motion';
import React from 'react';

//traigo parametro = movie para trabajarlo. 
const Movie = ({movie}) => {

    return (

        <motion.div 
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            layout>

            <h2>{movie.name}</h2>
            <img src={movie.image} alt="image" />

        </motion.div>
    );
}

export default Movie;
