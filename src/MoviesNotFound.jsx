import './App.css'
import React from 'react';
// import { NavLink } from "react-router-dom";
// import MyCard from './Card';
// import { useGlobalContext } from './context';

const MoviesNotFound=()=> {

return(
    <>
    <div className='MoviePage2'>
        <h1 className='notfound'>Oops Nothing Found !</h1>
        <br/>
        <img className='notfound' src="./notfound.png"/>
        </div>
    </>

    );
}


export default MoviesNotFound;
