import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { elemInOut } from '../../Home/Home';
import Error from '../Error';
import Input from '../Input';
import './Login.css';


let loginexit = () => {
    document.getElementById('login').style.animation = `login-out 1s forwards 1`;
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

const Login = () => {
    return (
        <div id='login' className='Login'>
            <div className="login-intro">
                <h2 className="login-title">My Playground</h2>
                <p>Make Scelet Playground yours with My Playground. Save
                and share your favourite picks and make plans to go out with
                      friends. Registration is fast and free.</p>
            </div>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validation}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setTimeout(() => {
                        alert(JSON.stringify(values));
                        resetForm();
                        setSubmitting(false);
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
                                    <img style={{ cursor: "not-allowed" }} src={require('../../../images/login-with-facebook.png')} alt='Fb'></img>
                                </div>
                                <div className="fb-text">
                                    <a href="#" style={{ cursor: "not-allowed" }}>Login with Facebook</a>
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
                                <Input
                                    idName={'email'} type={'email'} value={values.email}
                                    classname={''} placeholder={'Email Address...'}
                                    onChange={handleChange} onBlur={handleBlur}
                                />
                            </div>
                            <div className="login-form-pass">
                                <Input
                                    idName={'password'} type={'password'} value={values.password}
                                    classname={''} placeholder={'Password...'}
                                    onChange={handleChange} onBlur={handleBlur}
                                />
                            </div>
                            <div className='login-form-submit'>
                                <Input
                                    idName={'submit'} type={'submit'} value={''}
                                    classname={''} placeholder={''}
                                    onChange={''} onBlur={''}
                                />
                                <div className='login-submit-triangle-dot'></div>
                            </div>
                            <div className="login-hr">
                                <hr></hr>
                            </div>
                            <div className="login-links">
                                <div className='opensignup'>
                                    Don't have a profile?
                                    <a id='register-from-login' onClick={() => elemInOut('register', 'login')} href='#'> Register Here</a>
                                </div>
                                <div className='openresetpass'>
                                    <a style={{ cursor: "not-allowed" }}>Forgot Password?</a>
                                </div>
                            </div>
                        </form>
                    )
                }}
            </Formik>

            <div id='loginExit' onClick={loginexit} className="login-exit">
                <img src={require('../../../images/exit.png')}></img>
            </div>
        </div >
    );
}

export default Login;



