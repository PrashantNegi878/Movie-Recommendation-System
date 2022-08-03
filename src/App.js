
// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import MovieInfo from './MovieInfo';
import ErrorPage from './ErrorPage'
import AboutUs from './AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MyNavBar from './NavBar';
import MyNavBar2 from './NavBar2';

// import {AppProvider} from './context'

function App() {
  return (
    <>
    {/* <BrowserRouter> */}

    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="movie/:id" element={<MovieInfo/>}/>
    <Route exact path="90970997f9dsfsd97f90709ds7fs09f" element={<MyNavBar/>}/>
    <Route path="90970997f9dsfsd97f90709ds7fs09fe" element={<MyNavBar2/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
