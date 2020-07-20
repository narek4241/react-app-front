import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import './Home.css';
import Homebar from './Homebar/Homebar';
import Categories from './Categories/Categories';
import { data } from '../../App';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';


export const elemInOut = (elemIn, elemOut) => {
    document.getElementById(elemOut).style.animation = '';
    // try 'useState' here
    // toBeUpdated later
    // document.getElementById('elemOut').style.animation = `${elemOut}-out 1s forwards 1`;
    document.getElementById(elemIn).style.animation = `${elemIn}-in 1s forwards 1`;
}

const Home = () => {
    return (
        <div className='Home'>

            {/* <div className='auth'> */}
            <Login />
            <Register />
            {/* </div> */}
            <Homebar />

            <Categories />

            <Posts data={data}/>

            <Footer />
        </div>
    );
}

export default Home;