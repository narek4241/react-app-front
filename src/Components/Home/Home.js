import React, { Component } from 'react';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import Homebar from './Homebar/Homebar';
import Categories from './Categories/Categories';
import { data } from '../../App';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import './Home.css';


export const elemInOut = (elemIn, elemOut) => {
    document.getElementById(elemOut).style.animation = '';
    // try 'useState' here
    // toBeUpdated later
    // document.getElementById('elemOut').style.animation = `${elemOut}-out 1s forwards 1`;
    document.getElementById(elemIn).style.animation = `${elemIn}-in 1s forwards 1`;
}


class Home extends Component{
    constructor(props){
        super(props);    
        this.state = {};
    }
    render(){
        return(
            <div className='Home'>
            <Login />
            <Register />

            <Homebar />

            <Categories />

            <Posts data={data}/>

            <Footer />
        </div>
        )
    }
}

export default Home;


