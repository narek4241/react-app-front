import React, { Component } from 'react';
import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';
import Homebar from '../../Home/Homebar/Homebar';
import Footer from '../../Footer/Footer';
import { data } from '../../../App';
import Posts from '../Posts';
import './SinglePage.css'

const postIndex = 2;

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='SinglePage'>
                <Login />
                <Register />

                <Homebar />

                <div className='single-page'>
                    <div className='single-page-left-side'>
                        <div className='post-content'>
                            <div className='post-title'>{data[postIndex].title}</div>
                            <div className='post-info'>
                                <div className='post-price'>{data[postIndex].price}</div>
                                <div className='post-date'>Date: {data[postIndex].date}</div>
                            </div>
                        </div>
                        <div className='post-images'>
                            <div className='post-image-main'>
                                <img src={data[postIndex].img} />
                            </div>
                            <div className='post-image-other'>
                                <img src={data[postIndex].img} />
                                <img src={data[postIndex].img} />
                                <img src={data[postIndex].img} />
                                <img src={data[postIndex].img} />
                                {/* <img src={data[2].img} /> */}
                            </div>
                        </div>
                        <div className='post-desc'>Description: {data[postIndex].desc}</div>
                    </div>
                    <div className='single-page-right-side'>
                        <div className='post-owner'>
                            <div className='owner-info'>
                                <div className='owner-avatar'>
                                    <img src={data[2].avatar} />
                                </div>
                                <div className='owner-userName'>{data[postIndex].userName}</div>
                            </div>
                            <div className='owner-contact'>
                                <div className='owner-call'>
                                    <div className='owner-contactNumber'>Contact: {data[postIndex].contactNumber}</div>
                                </div>
                                {/* <div className='owner-message'>
                                <div className='owner-contactNumber'>Contact: {data[postIndex].contactNumber}</div>
                            </div> */}
                            </div>
                        </div>
                        <div className='similar-posts'>
                            <div className='similar-posts-heading'>SImilar Announcements</div>
                            <div className='similar-posts-content'>
                                <Posts data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SinglePage;










