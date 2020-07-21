import React from 'react';
import './SinglePage.css'

import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';
import Homebar from '../../Home/Homebar/Homebar';
import Footer from '../../Footer/Footer';
import { data } from '../../../App';
import Posts from '../Posts';

const postId = 2;

const SinglePage = () => {
    return (
        <div className='SinglePage'>
            <Login />
            <Register />

            <Homebar />

            <div className='single-page'>
                <div className='single-page-left-side'>
                    <div className='post-content'>
                        <div className='post-title'>{data[postId].title}</div>
                        <div className='post-info'>
                            <div className='post-price'>{data[postId].price}</div>
                            <div className='post-date'>Date: {data[postId].date}</div>
                        </div>
                    </div>
                    <div className='post-images'>
                        <div className='post-image-main'>
                            <img src={data[postId].img} />
                        </div>
                        <div className='post-image-other'>
                            <img src={data[postId].img} />
                            <img src={data[postId].img} />
                            <img src={data[postId].img} />
                            <img src={data[postId].img} />
                            {/* <img src={data[2].img} /> */}
                        </div>
                    </div>
                    <div className='post-desc'>Description: {data[postId].desc}</div>
                </div>
                <div className='single-page-right-side'>
                    <div className='post-owner'>
                        <div className='owner-info'>
                            <div className='owner-avatar'>
                                <img src={data[2].avatar} />
                            </div>
                            <div className='owner-userName'>{data[postId].userName}</div>
                        </div>
                        <div className='owner-contact'>
                            <div className='owner-call'>
                                <div className='owner-contactNumber'>Contact: {data[postId].contactNumber}</div>
                            </div>
                            {/* <div className='owner-message'>
                                <div className='owner-contactNumber'>Contact: {data[postId].contactNumber}</div>
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
    )
}

export default SinglePage;