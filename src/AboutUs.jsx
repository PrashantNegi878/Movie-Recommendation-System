
// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import MovieInfo from './MovieInfo';
import ErrorPage from './ErrorPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar2 from './NavBar2';
import Alert from 'react-bootstrap/Alert';
import MyFigure from './MyFigure';
import MadeWithLove from 'react-made-with-love';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import {AppProvider} from './context'

const AboutUs =()=> {
  return (
    <>
    <MyNavBar2/>
    <div className="MoviePage aboutus">
    <Alert className="m-5 w-75" key="warning" variant="warning" style={{backgroundColor:"#373b69",color:"white"}}>
    <h1>ABOUT US</h1>
    <hr/>
    <p><span>Movies Hub</span> is the most authoritative source of entertainment information, with features designed to help fans explore the world of movies and decide what to watch. Get answers – Jog your memory about a movie, on the tip of your tongue or binge on information about the movies you love.</p>
    <hr/>
    <p>Technologies Used in this Project :</p>
    <img className="techused" src='./htmlcssjsreact.jpg' alt="HTML CSS JS REACT image"></img>
    <p><br></br></p>
    <hr/>
    <MadeWithLove by="Prashant"  emoji  link="https://github.com/PrashantNegi878" target="_blank"/>
    </Alert>
    </div>
    </>
  );
}

export default AboutUs;
