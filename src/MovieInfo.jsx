import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MyCard2 from './Card2';
import MyCard3 from './Card3';
import MyNavBar2 from './NavBar2';
import { Spinner } from 'react-bootstrap';
import MadeWithLove from 'react-made-with-love';

const MovieInfo=()=> {


    const {id}=useParams();
    const baseurl="https://api.themoviedb.org/3/movie/";
    const apikey="?api_key=1cf50e6248dc270629e802686245c2c8";
    const API_URL=baseurl+id+apikey;
    const [movie, printMovie] = useState({});
    const imgurl= 'https://image.tmdb.org/t/p/w500';
    // const [moviegenres,getGenres]=useState(" ");
    const[isLoading,setIsLoading] = useState(true);
        // const[isLoading,setIsLoading] = useState(true);
        // const[movie,setMovie]=useState([]);
        // const[query,setQuery]=useState("");
    
        const getMovies=async(API_URL)=>{
            
    
            try{
                setTimeout(async () => {
                const res=await fetch(API_URL);
                const data=await res.json();
                // console.log(data);
                // console.log(typeof(data));
                printMovie(data);
                console.log(data);
                setIsLoading(false);
                
                }, 1000);// console.log(data);
                // data.genres.map((genre)=>{console.log(genre.name)});
                // console.log(moviegenres)
                    
                    // setIsLoading(false);
                    // setMovie(data);
            }
            catch(error){
                console.log(error);
            }
    
        }
    
        useEffect(()=>{getMovies(API_URL);},[]);
 
if (isLoading)
{
    return(
        <>
        <MyNavBar2/>
        <div className="MoviePage2" >
            <h1>Loading Details</h1>
            <h1>, Please Wait ! <Spinner animation="grow" /></h1>
            <img className='notfound' src="../notfound.png" alt=""/>
        </div>
        </>
    );
}

return(
    <>
    {/* Movie Info Page {id} */}
    <MyNavBar2/>
    {/* <div className="checkingthis"> */}
    <div className=" MoviePage2">
    <MyCard2 id={movie.id} imgsrc={imgurl+movie.poster_path} />
    <MyCard3 id={movie.id} title={movie.title} vote_average={movie.vote_average} 
    overview={movie.overview} genre={movie.genres} release_date={movie.release_date}
    tagline={movie.tagline} runtime={movie.runtime} vote_count={movie.vote_count} 
    homepage={movie.homepage} />
    </div>
    {/* </div> */}
    </>
    );
}

export default MovieInfo;