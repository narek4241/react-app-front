import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import './Home.css';

export const elemInOut = (elemIn, elemOut) => {
    document.getElementById(elemOut).style.animation= '';
    // try 'useState' here
    // toBeUpdated later
    // document.getElementById('elemOut').style.animation = `${elemOut}-out 1s forwards 1`;
    document.getElementById(elemIn).style.animation= `${elemIn}-in 1s forwards 1`;
}

const Home = () => {
    return (
        <div className='Home'>
            
            <div className='auth'>
                <Login />
                <Register />
            </div>

            <div className='homebar'>
                <div className='homebar-lf-side'>
                    <div className='sidenav'>
                        <a>☰</a>
                    </div>
                    <div className='logo'>
                        <p>Ｓｋｅｌｅｔ</p>
                    </div>
                </div>

                <div className='homebar-rg-side'>
                    <div className="addAnnouncement">
                        <button>Add Announcement</button>
                    </div>
                    <div className='registration'>
                        <div className='sign-up'>
                            <a id='signUp' onClick={() => elemInOut('register', 'login')}>SIGN UP</a>
                        </div>
                        <div>|</div>
                        <div className='sign-in'>
                            <a id='signIn' onClick={() => elemInOut('login', 'register')}>SIGN IN</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;