// import './MyCSS.css';
import './App.css'
import React from 'react';
// import { NavLink } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import MyCard from './Card';
import { useGlobalContext } from './context';
import MoviesNotFound from './MoviesNotFound';

const Movies=()=> {
    // const movie= useGlobalContext();
    // const searchfull="https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=";
    const {movie, setMovie} = useGlobalContext();

    // console.log((movie));
    // console.log(searchvalue);
return(
    <div className="MoviePage">

        {movie.length==0?<MoviesNotFound/>:
            movie.map((currmovie)=>{
            const imgurl= 'https://image.tmdb.org/t/p/w500';
            const poster=imgurl+currmovie.poster_path;
            if(currmovie.poster_path)
            return(
                <NavLink className="navlink" to={`movie/${currmovie.id}`} key={currmovie.id}>
                <MyCard id={currmovie.id} title={currmovie.title} imgsrc={poster} vote_average={currmovie.vote_average} />
                </NavLink>
                )})}
    </div>
    );
}


export default Movies;


// {movie.map((currmovie)=>{
//     const imgurl= 'https://image.tmdb.org/t/p/w500';
//     const poster=imgurl+currmovie.poster_path;
//     return(
//         <NavLink className="navlink" to={`movie/${currmovie.id}`} key={currmovie.id}>
//         <MyCard id={currmovie.id} title={currmovie.title} imgsrc={poster} vote_average={currmovie.vote_average} />
//         </NavLink>
//         )})}