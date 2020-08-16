import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Homebar.scss';

export const elemInOut = (elemIn, elemOut) => {
    document.getElementById(elemOut).style.animation = '';
    // try 'useState' here
    // toBeUpdated later
    // document.getElementById(elemOut).style.animation = `${elemOut}-out 1s forwards 1`;
    document.getElementById(elemIn).style.animation = `${elemIn}-in 1s forwards 1`;
}

export const elemOut = (elemOut) => {
    document.getElementById(elemOut).style.animation = `${elemOut}-out 1s forwards 1`;
}


class Homebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='homebar'>
                <div className='homebar-top'>
                    <div className='logo2'>
                        <Link to={`/`}>
                            {/* camel */}
                            <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596690168/main-logo_rpzuag.png'}></img>
                            {/* skelet +0 (oversizes) */}
                            {/* <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597257828/main-logo4_qmad1l.png'}></img> */}
                            {/* black rects + */}
                            {/* <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597256424/main-logo2_q72z4w.png'}></img> */}
                            {/* <img style={{maxWidth: '135px'}} src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597257828/main-logo4_qmad1l.png'}></img> */}
                        </Link>
                    </div>
                    <div className='side-nav2'>
                        <Link to={`/`}>☰</Link>
                    </div>
                    {!localStorage.token ?
                        <div className='homebar-authotication'>
                            <Link id='signUp' to='#' onClick={() => elemInOut('register', 'login')}>sign up</Link>
                            <div>|</div>
                            <Link id='signIn' to='#' onClick={() => { elemInOut('login', 'register') }}>sign in</Link>
                        </div>
                        :
                        <div className='homebar-authotication'>
                            <Link id='' to='/auth/profile'>my profile</Link>
                            <div>|</div>
                            <Link id='' to='/' onClick={() => { localStorage.removeItem('token') }}>log out</Link>
                        </div>
                    }
                </div>

                <div className='homebar-content'>
                    <div className='homebar-lf-side'>
                        <div className='logo'>
                            <Link to={`/`}>
                                {/* camel */}
                                <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596690168/main-logo_rpzuag.png'}></img>
                                {/* black rects */}
                                {/* <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597256424/main-logo2_q72z4w.png'}></img> */}
                                {/* skelet-icon0 */}
                                {/* <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597256768/main-logo3_v07dc0.png'}></img> */}
                                {/* skelet-icon + */}
                                {/* <img style={{maxWidth: '150px'}} src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597257828/main-logo4_qmad1l.png'}></img> */}
                            </Link>
                        </div>
                    </div>
                    <div className='homebar-rg-side'>
                        <div className='search'>
                            <Link to='/posts/search'>
                                <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596657097/search-icon_u2yegr.png'}></img>
                                <p>search</p>
                            </Link>
                        </div>
                        <div className='add-announcement'>
                            {localStorage.token ?
                                <Link to='/posts/add'>add announcement</Link>
                                :
                                <Link to='#' onClick={() => elemInOut('login', 'register')}>add announcement</Link>
                            }
                        </div>
                        <div className='side-nav'>
                            <Link to={`/`}>☰</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Homebar;
export default withRouter(Homebar);