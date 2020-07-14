import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import './Home.css';



const elemInOut = (elemIn, elemOut) => {
    
    console.log(elemIn, elemOut);

    // document.getElementById(elemOut).style.height= '0';

    // document.getElementById(elemOut).style.animation = `${elemOut}-out 1s forwards 1`;
    document.getElementById(elemOut).style.animation= '';



    // console.log(`elemOut height ${document.getElementById(elemOut).style.height}`);
    document.getElementById(elemIn).style.animation= `${elemIn}-in 1s forwards 1`;

    // let elemIn = document.getElementById('elemIn');
    // elemIn.style.animation = `${elemIn}-in 1s forwards 1`;
    // let elemOut = document.getElementById('elemOut');
    // elemOut.style.animation = `${elemOut}-out 1s forwards 1`;
    // document.getElementById('elemOut').style.animation = `${elemOut}-out 1s forwards 1`;
}



const Home = () => {
    return (
        <div className='Home'>
            
            <Login />
            <Register />

            <div className='home-bar'>
                <div className='logo'>
                    <p>Ｓｋｅｌｅｔ</p>
                </div>

                <div className='registration'>
                    <div className='sign-up'>
                        <button id='signUp' onClick={() => elemInOut('register', 'login')}>SIGN UP</button>
                    </div>
                    <div className='log-in'>
                        <button id='logIn' onClick={() => elemInOut('login', 'register')}>LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;