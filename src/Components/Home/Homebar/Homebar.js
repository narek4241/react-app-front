import React, { Component } from 'react';
import { elemInOut } from '../Home'
import './Homebar.css';

class Homebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='homebar'>
                <div className='homebar-lf-side'>
                    <div className='sidenav'>
                        <a>☰</a>
                    </div>
                    <div className='logo'>
                        <a href={`/`}>Ｓｋｅｌｅｔ</a>
                    </div>
                </div>

                <div className='homebar-rg-side'>
                    <div className="addAnnouncement">
                        {/* <button onClick={() => elemInOut('login', 'register')}>Add Announcement</button> */}
                        <a href='/posts/add'>Add Announcement</a>
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
        );
    }
}

export default Homebar;








