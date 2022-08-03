import React, { useContext, useEffect, useState } from 'react';
// import Movies from './Movies'
import MyNavBar2 from './NavBar2'
import {Spinner} from 'react-bootstrap';

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;
// const searchfull="https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=";

const AppContext =  React.createContext();

 
const AppProvider=({children})=>{

    const[isLoading,setIsLoading] = useState(true);
    const[movie,setMovie]=useState([]);
    // const[query,setQuery]=useState("");

    const getMovies=async(API_URL)=>{

        try{
            setTimeout(async () => {
            const res=await fetch(API_URL);
            const data=await res.json();

                setIsLoading(false);
                setMovie(data.results);
            },1000);
        }
        catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        getMovies(API_URL);
    },[]);


    if (isLoading)
{
    return(
        <>
        <MyNavBar2/>
        <div className="MoviePage2">
            <h1>Loading Movies </h1>
            <h1>, Please Wait ! <Spinner animation="grow" /></h1>
            <img className='notfound' src="../notfound.png" alt=""/>
        </div>
        </>
    );
}


    return(
    <AppContext.Provider value={{isLoading,movie,setMovie}}>
        {children}
        {/* <Movies/> */}
    </AppContext.Provider>
    );



}





const useGlobalContext=()=>{
    return useContext(AppContext);
}



export {AppProvider,useGlobalContext};