import React from 'react';
import './Login.css';

let loginexit = () =>{
    document.getElementById('login').style.animation = `login-out 1s forwards 1`;
}

const Login = () => {
    return (
        <div id='login' className='Login'>
            <div className="login-intro">
                <h2 className="login-title">My Playground</h2>
                <p>Make Scelet Playground yours with My Playground. Save
                and share your favourite picks and make plans to go out with
                      friends. Registration is fast and free.</p>
            </div>

            <div className="login-data">
                <div className="login-fb">
                    <div className='fb-icon'>
                        <img src={require('../../../images/login-with-facebook.png')} alt='Fb'></img>
                    </div>
                    <div className="fb-text">
                        <a href="#">Login with Facebook</a>
                    </div>
                </div>
                 <div className="login-hr-or">
                        <div>Or</div>
                        <hr></hr>
                </div>
                <div className="login-form-email">
                    <input type='email' id='email' name='email' placeholder='Email Address...'/>
                </div>
                <div className="login-form-pass">
                    <input type='password' id='pssw' name='password' placeholder='Password...'/>
                </div>
                <div className='login-form-submit'>
                    <input type='submit' id='submit' name='submit' value=''/>
                    <div className='login-submit-triangle-dot'></div>
                </div>
                <div className="login-hr">
                    <hr></hr>
                </div>
                <div className="login-links">
                    <div className='opensignup'>
                        Don't have a profile?
                        <a href='#'> Register Here</a>
                    </div>
                    <div className='openresetpass'>
                        <a>Forgot Password?</a>
                    </div>
                </div>
            </div>
            <div id='loginExit' onClick={loginexit} className="login-exit">
                <img src={require('../../../images/exit.png')}></img>
            </div>
        </div>
    );
}

export default Login;