import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div className='Home'>
            <div className='home-bar'>
                <div className='logo'>
                    <p>Ｓｋｅｌｅｔ</p>
                </div>

                {/* <div className='sign-in'>SIGN IN (soon)</div> */}
                {/* <div className='sign-up'>SIGN UP (soon)</div> */}
            </div>
            {/* <div className='homepage-content'>
              <div className='sign-in'>SIGN IN (soon)</div>
              <div className='sign-up'>SIGN UP (soon)</div>
            </div> */}
        </div>
    );
}

export default Home;