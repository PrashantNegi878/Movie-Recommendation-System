import React from 'react';
import MyCard from './Card';
import Movies from './Movies';
import SearchBar from './SearchBar';
import MyNavBar from './NavBar';
import MyFooter from './MyFooter';
import MadeWithLove from 'react-made-with-love';
// import MadeWithLove from './MadeWithLove';
// import { AppContext } from './context';
// import { useGlobalContext } from './context';

const HomePage=()=> {

    // const name=useGlobalContext();
return(
    <>
    <MyNavBar/>
    {/* <SearchBar/> */}
    <Movies /> 
    
    </>
    );
}


export default HomePage;