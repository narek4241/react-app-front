import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, withRouter } from 'react-router-dom';
import { elemInOut } from '../../Homebar/Homebar';
import { elemOut } from '../../Homebar/Homebar';
import Error from '../Error';
import './Login.scss';


let loginexit = () => {
    document.getElementById('login').style.animation = `login-out 1s ease-in-out forwards 1`;
}

const validation = Yup.object().shape(
    {
        email: Yup.string()
            .email('Must be a valid Email')
            .required('Email is Required')
            .max(30, 'Email max length is 30')
        ,
        password: Yup.string()
            .required('Password is Required')
            .min(6, "Password must be at least 6 characters")
    }
);


class Login extends Component {
    constructor(props) {
        super(props);
        // this.state = {}
    }
    state = {
        isLogged: false
    }

    login = () => {
        // this.setState(isLogged: true)
    }

    fetchLogin = async (value) => {
        try {
            const fetchLoginData = await fetch('https://skelet-rest-api.herokuapp.com/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(value)
                })
            const data = await fetchLoginData.json();
            console.log(data);
            localStorage.setItem('token', data.auth_token);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div id='login' className='Login'>
                <div className="login-intro">
                    <h2 className="login-title">My Playground</h2>
                    <p>Make Scelet Playground yours with My Playground. It makes easier to buy and sell products. Registration is fast and free.</p>
                </div>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validation}
                    onSubmit={(values, { setSubmitting, resetForm }) => {

                        setSubmitting(true);
                        setTimeout(() => {
                            this.fetchLogin(values);
                            resetForm();
                            setSubmitting(false);

                            this.props.history.push('/auth/profile');
                            // elemInOut('register', 'login');
                            elemOut('login');
                        }, 500);
                    }}
                >
                    {(
                        {
                            values,
                            touched,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }
                    ) => {
                        return (
                            <form className="login-data"
                                onSubmit={handleSubmit}
                            >
                                <div className="login-fb">
                                    <div className='fb-icon'>
                                        {/* link image from files -> src={require('../../../images/login-with-facebook.png')} */}
                                        <img style={{ cursor: "not-allowed" }} src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597613915/login-with-facebook_yftwam.png'} alt='Fb'></img>
                                    </div>
                                    <div className="fb-text">
                                        <Link to="#" style={{ cursor: "not-allowed" }}>Login with Facebook</Link>
                                    </div>
                                </div>
                                <div className="login-hr-or">
                                    <div>Or</div>
                                    <hr></hr>
                                </div>
                                <div className='login-errors'>
                                    <Error touch={touched.email} error={errors.email} />
                                    <Error touch={touched.password} error={errors.password} />
                                </div>
                                <div className="login-form-email">
                                    <input
                                        id={'email'} name={'email'} value={values.email}
                                        className={''} placeholder={'Email Address...'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    >
                                    </input>
                                </div>
                                <div className="login-form-pass">
                                    <input
                                        id={'password'} name={'password'} type={'password'} value={values.password}
                                        className={''} placeholder={'Password...'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                </div>
                                <div className='login-form-submit'>
                                    <input
                                        id={'submit'} name={'submit'} type={'submit'} value={''}
                                        className={''} placeholder={''}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                    <div className='login-submit-triangle-dot'></div>
                                </div>
                                <div className="login-hr">
                                    <hr></hr>
                                </div>
                                <div className="login-links">
                                    <div className='opensignup'>
                                        Don't have a profile?
                                        <Link id='register-from-login' to='#' onClick={() => elemInOut('register', 'login')}> Register Here</Link>
                                    </div>
                                    <div className='openresetpass'>
                                        <Link to='' style={{ cursor: "not-allowed" }}>Forgot Password?</Link>
                                    </div>
                                    {/* {localStorage.token ? <Redirect to='/auth/profile' /> : <div>NOpe</div>} */}
                                </div>
                            </form>
                        )
                    }}
                </Formik>

                <div id='loginExit' onClick={loginexit} className="login-exit">
                    <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597613915/exit_suue7k.png'}></img>
                </div>
            </div >
        );
    }
}

export default withRouter(Login);