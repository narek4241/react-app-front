import React from 'react';
import {elemInOut} from '../Home'
import './Homebar.css';

const Homebar = () => {
    return (
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
                    <button onClick={() => elemInOut('login', 'register')}>Add Announcement</button>
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
    )
}

export default Homebar;

