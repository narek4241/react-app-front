import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { elemInOut } from '../../Home/Home';
import Error from '../Error';
import Input from '../Input';
import './Register.css';


let registerexit = () => {
    document.getElementById('register').style.animation = `register-out 1s forwards 1`;
}

const phoneRegExp = /^[+374]{4}[0-9]{8}/;

const validation = Yup.object().shape(
    {
        firstname: Yup.string()
            .required('Firstname is Required')
            .max(30, 'Firstname max length is 30')
            .min(2, 'Firstname min length is 2')
        ,
        lastname: Yup.string()
            .min(2, 'Lastname min length is 2')
        ,
        email: Yup.string()
            .email('Must be a valid Email')
            .required('Email is Required')
            .max(30, 'Email max length is 30')
        ,
        phone: Yup.string()
            .matches(phoneRegExp, 'Must be a valid Phone Number')
        ,
        password: Yup.string()
            .required('Password is Required')
            .min(6, "Password must be at least 6 characters")
        ,
        passwordConf: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
        ,
        checkboxTerms: Yup.string()
            .required('Terms are required')
            .matches(true, 'Terms are required')
    }
);

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='register' className='Register'>
                {/* <div className="register-intro">
                <p>Register Here</p>
            </div> */}
                <Formik
                    initialValues={{
                        firstname: '', lastname: '', email: '', phone: '', password: '',
                        passwordConf: '', checkboxTerms: 'false'
                    }}
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
                            handleSubmit
                        }
                    ) => {
                        return (
                            <form className='register-data'
                                onSubmit={handleSubmit}
                            >
                                <div className='register-errors'>
                                    <Error touch={touched.firstname} error={errors.firstname} />
                                    <Error touch={touched.lastname} error={errors.lastname} />
                                    <Error touch={touched.email} error={errors.email} />
                                    <Error touch={touched.phone} error={errors.phone} />
                                    <Error touch={touched.password} error={errors.password} />
                                    <Error touch={touched.passwordConf} error={errors.passwordConf} />
                                    <Error touch={touched.checkboxTerms} error={errors.checkboxTerms} />
                                </div>
                                <div className="register-form-firstname-lastname">
                                    <input 
                                        id={'firstname'} name={'firstname'} type={'text'} value={values.firstname}
                                        className={''} placeholder={'Firstname (required)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                    <input 
                                        id={'lastname'} name={'lastname'} type={'text'} value={values.lastname}
                                        className={''} placeholder={'Lastname (optional)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                </div>
                                <div className="register-form-email-confirmemail">
                                    <input 
                                        id={'email'} name={'email'} type={'text'} value={values.email}
                                        className={''} placeholder={'Email (required)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                    <input 
                                        id={'phone'} name={'phone'} type={'tel'} value={values.phone}
                                        className={''} placeholder={'Email (optional)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                </div>
                                <div className="register-form-pass-confirmpass">
                                    <input 
                                        id={'password'} name={'password'} type={'password'} value={values.password}
                                        className={''} placeholder={'Password (required)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                    <input 
                                        id={'passwordConf'} name={'passwordConf'} type={'password'} value={values.passwordConf}
                                        className={''} placeholder={'Confirm password (optional)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                </div>
                                <div className="register-form-submit">
                                    <input 
                                        id={'submit'} name={'submit'} type={'submit'} value={''}
                                        className={''} placeholder={''}
                                        onChange={''} onBlur={''}
                                    ></input>
                                    <div className='register-submit-triangle-dot'></div>
                                </div>
                                <div className="register-hr">
                                    <hr></hr>
                                </div>
                                <div className='register-links'>
                                    <div className='login-form-terms'>
                                        <input 
                                            id={'checkboxTerms'} name={'checkboxTerms'} type={'checkbox'} value={''}
                                            className={''} placeholder={'Confirm password (optional)'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                        <p>I agree to the<a href=''>&nbsp;terms and conditions</a></p>
                                    </div>
                                    <div className='opensignin'>
                                        Already have an account?
                            <a id='login-from-register' onClick={() => elemInOut('login', 'register')} href='#'> Login Here</a>
                                    </div>
                                </div>
                            </form>
                        )
                    }}

                </Formik>

                <div id='registerexit' onClick={registerexit} className="register-exit">
                    <img src={require('../../../images/exit.png')}></img>
                </div>
            </div>
        );
    }
}

export default Register;



