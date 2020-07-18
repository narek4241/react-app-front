import React from 'react';
import './Register.css';
import {elemInOut} from '../../Home/Home';


let registerexit = () =>{
    document.getElementById('register').style.animation = `register-out 1s forwards 1`;
}

const Register = () => {
    return(
        <div id='register' className='Register'>
            {/* <div className="register-intro">
                <p>Register Here</p>
            </div> */}

            <div className='register-data'>
                <div className="register-form-firstname-lastname">
                    <input type='text' id='firstname' name='firstname' placeholder='Firstname...'/>
                    <input type='text' id='lastname' name='lastname' placeholder='Lastname...'/>
                </div>
                <div className="register-form-email-confirmemail">
                    <input type='email' id='email' name='email' placeholder='Email...'/>
                    <input type='email' id='confirmemail' name='confirmemail' placeholder='Confirm Email...'/>
                </div>
                <div className="register-form-pass-confirmpass">
                    <input type='password' id='password' name='password' placeholder='Password...'/>
                    <input type='password' id='confirmpassword' name='confirmpassword' placeholder='Confirm Password...'/>
                </div>
                <div className="register-form-submit">
                    <input type='submit' id='submit' name='submit' value=''/>
                    <div className='register-submit-triangle-dot'></div>
                </div>
                <div className="register-hr">
                    <hr></hr>
                </div>
                <div className='register-links'>
                    <div className='login-form-terms'>
                        <input type='checkbox' id='checkbox' name='checkbox'/>
                        <p>I agree to the<a href='#'>&nbsp;terms and conditions</a></p>
                    </div>
                    <div className='opensignin'>
                        Already have an account?
                        <a id='login-from-register' onClick={() => elemInOut('login', 'register')} href='#'> Login Here</a>
                    </div>
                </div>
            </div>
            
            <div id='registerexit' onClick={registerexit} className="register-exit">
                <img src={require('../../../images/exit.png')}></img>
            </div>
        </div>
    );
}

export default Register;