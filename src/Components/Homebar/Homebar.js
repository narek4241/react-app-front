import React, { Component } from 'react';
import { elemInOut } from '../Home/Home'
import { withRouter, Link } from 'react-router-dom';
import './Homebar.css';

class Homebar extends Component {
    constructor(props) {
        super(props);
        // this.state = {}
    }

    render() {
        return (
            <div className='homebar'>
                <div className='homebar-lf-side'>
                    <div className='sidenav'>
                        <Link to='#'>☰</Link>
                    </div>
                    <div className='logo'>
                        <Link to={`/`}>Ｓｋｅｌｅｔ</Link>
                    </div>
                </div>

                <div className='homebar-rg-side'>
                    <div className="addAnnouncement">
                        {localStorage.token ?

                            <Link to='/posts/add'>Add Announcement</Link>
                            :
                            <Link to='#' onClick={() => elemInOut('login', 'register')}>Add Announcement</Link>
                        }
                    </div>

                    {!localStorage.token ?
                        <div className='registration'>
                            <div className='sign-up'>
                                <Link id='signUp' to='#' onClick={() => elemInOut('register', 'login')}>sign up</Link>
                            </div>
                            <div>|</div>
                            <div className='sign-in'>
                                <Link id='signIn' to='#' onClick={() => { elemInOut('login', 'register') }}>sign in</Link>
                            </div>
                        </div>
                        :
                        <div className='my-profile'>
                            <div className='my-profile-button'>
                                <Link to='/auth/profile'>my profile</Link>
                            </div>
                            <div>|</div>
                            <div className='my-profile-logout'>
                                <Link to='/' onClick={() => {
                                    localStorage.removeItem('token')
                                    // this.setState({
                                    //     login: true
                                    // })
                                }} >logout</Link>
                            </div>
                        </div>
                    }


                </div>
            </div>
        );
    }
}

// export default Homebar;
export default withRouter(Homebar);










