import React, { Component } from 'react';
import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';
import Homebar from '../../Homebar/Homebar';
import Footer from '../../Footer/Footer';
import { data } from '../../../App';
import Posts from '../Posts';
import './SinglePage.css'
import App from '../../../App';
import { Link } from 'react-router-dom';



class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    state = {
        singlePostData: [],
    }

    fetchSinglePost = async () => {
        try {
            // gets :id from url
            const postId = this.props.match.params.postId;
            const fetchSinglePostData = await fetch(`http://localhost:3333/posts/post/${postId}`);
            const data = await fetchSinglePostData.json();

            console.log('dataaaaaa');
            console.log(data.userId._id);
            this.setState({
                singlePostData: data,
                title: data.title,
                price: data.price,
                currency: data.currency,
                date: data.date,
                imgUrl: data.imgUrl,
                imgUrl2: data.imgUrl2,
                imgUrl3: data.imgUrl3,
                imgUrl4: data.imgUrl4,
                imgUrl5: data.imgUrl5,
                desc: data.desc,
                cat: data.cat,
                region: data.region,
                role: data.role,
                state: data.state,
                type: data.type,
                firstname: data.userId.firstname,
                lastname: data.userId.lastname,
                contact: data.contact,
                userId: data.userId._id
            })
            console.log(this.state.singlePostData);
        } catch (error) {
            console.log(error);
        }
    }


    componentDidMount = () => {
        this.fetchSinglePost();
    }


    render() {
        return (
            <div className='SinglePage'>
                <Login />
                <Register />

                <Homebar />

                <SinglePagePost
                    title={this.state.title}
                    price={this.state.price}
                    currency={this.state.currency}
                    date={this.state.date}
                    imgUrl={this.state.imgUrl}
                    imgUrl2={this.state.imgUrl2}
                    imgUrl3={this.state.imgUrl3}
                    imgUrl4={this.state.imgUrl4}
                    imgUrl5={this.state.imgUrl5}
                    cat={this.state.cat}
                    region={this.state.region}
                    role={this.state.role}
                    state={this.state.state}
                    type={this.state.type}
                    desc={this.state.desc}
                    contact={this.state.contact}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    userId={this.state.userId}
                />

                <Footer />
            </div>
        );
    }
}

const SinglePagePost = ({ title, price, currency, date, imgUrl, imgUrl2, imgUrl3, imgUrl4, imgUrl5, desc, cat, region, role, state, type, firstname, lastname, contact, userId}) => {
    return (
        <div className='single-page'>
            <div className='single-page-left-side'>
                <div className='post-content'>
                    <div className='post-title'>{title}</div>

                    <div className='post-info'>
                        <div className='post-price'>{price}{currency}</div>
                        <div className='post-region'>{region}</div>
                    </div>
                </div>

                <div className='post-images'>
                    <div className='post-image-main'>
                        <img src={imgUrl} />
                    </div>
                    <div className='post-image-other'>
                        <img src={imgUrl2} />
                        <img src={imgUrl3} />
                        <img src={imgUrl4} />
                        <img src={imgUrl5} />
                    </div>
                </div>

                <div className='post-other'>
                    <div className='post-cat'>Category: <div>{cat}</div> </div>
                    <div className='post-date'>Date: <div>{date}</div> </div>
                    <div className='post-role'>Role: <div>{role}</div> </div>
                    <div className='post-state'>State: <div>{state}</div> </div>
                    <div className='post-type'>Type: <div>{type}</div> </div>
                </div>

                <div className='post-desc'>Description: {desc}</div>
            </div>
            <div className='single-page-right-side'>
                <div className='post-owner'>
                    <Link to={`/posts/user/${userId}`}>
                        <div className='owner-info'>
                            <div className='owner-avatar'>
                                <img src={'https://rpg-cify0074508w.netdna-ssl.com/wp-content/uploads/2020/02/service_default_avatar_182956.png'} />
                            </div>
                            <div className='owner-userName'>{firstname} {lastname}</div>
                        </div>
                    </Link>
                    <div className='owner-contact'>
                        <div className='owner-call'>
                            <div className='owner-contactNumber'>Contact: {contact}</div>
                        </div>
                    </div>
                </div>
                <div className='similar-posts'>
                    <div className='similar-posts-heading'>Similar Announcements</div>
                    <div className='similar-posts-content'>
                        <Posts data={data} />
                    </div>
                </div>
            </div>
        </div >
    );
}

// sets def props if added from postman* (*: not empty parameters) 
SinglePagePost.defaultProps = {
    title: 'Not Found',
    desc: 'descccccc default',
    cat: 'N/A',
    region: 'N/A',
    role: 'N/A',
    state: 'N/A',
    type: 'N/A',
    role: 'N/A',
    desc: 'N/A',
    // imgUrl: 'https://comnplayscience.eu/app/images/notfound.png',
}

export default SinglePage;




























