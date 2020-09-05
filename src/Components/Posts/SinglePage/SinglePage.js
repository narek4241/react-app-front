import React, { Component } from 'react';
import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';
import Homebar from '../../Homebar/Homebar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import CategoryPosts from '../PostCategories/CategoryPosts/CategoryPosts';
import './SinglePage.css'


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
            const fetchSinglePostData = await fetch(`https://skelet-rest-api.herokuapp.com/posts/post/${postId}`);
            const data = await fetchSinglePostData.json();

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
        } catch (error) {
            console.log(error);
        }
    }


    componentDidMount = () => {
        this.fetchSinglePost();
        window.scrollTo(0, 0);
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

const SinglePagePost = ({ title, price, currency, date, imgUrl, imgUrl2, imgUrl3, imgUrl4, imgUrl5, desc, cat, region, role, state, type, firstname, lastname, contact, userId }) => {
    // #wet #wetSnippet #dirty (same used in post.js)
    let priceAndCurrency;
    if (currency == 'usd') { priceAndCurrency = '$' + price; }
    else if (currency == 'amd') { priceAndCurrency = price + ' ֏'; }
    else if (currency == 'rub') { priceAndCurrency = price + ' руб.'; }
    else if (currency == 'eur') { priceAndCurrency = '€ ' + price; }

    return (
        <div className='single-page'>
            <div className='single-page-left-side'>
                <div className='post-content'>
                    <div className='post-title'>{title}</div>

                    <div className='post-info'>
                        {price ? <div className='post-price'>{priceAndCurrency}</div> : null}
                        <div className='post-region'>{region}</div>
                    </div>
                </div>

                <div className='post-images'>
                    <div className='post-image-main'>
                        {imgUrl ? <img src={imgUrl} /> : null}
                        {!imgUrl ? <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597252820/picture-icon_hq0jhe.png'} /> : null}
                    </div>
                    <div className='post-image-other'>
                        {imgUrl2 ? <img src={imgUrl2} /> : null}
                        {imgUrl3 ? <img src={imgUrl3} /> : null}
                        {imgUrl4 ? <img src={imgUrl4} /> : null}
                        {imgUrl5 ? <img src={imgUrl5} /> : null}
                    </div>
                </div>

                <div className='post-other'>
                    {state ? <div className='post-state'>State: <div>{state}</div> </div> : null}
                    {type ? <div className='post-type'>Type: <div>{type}</div> </div> : null}
                    {role ? <div className='post-role'>Role: <div>{role}</div> </div> : null}
                    {date ? <div className='post-date'>Date: <div>{date}</div> </div> : null}
                    {cat ? <div className='post-cat'>Category: <div>{cat}</div> </div> : null}
                </div>

                {desc ? <div className='post-desc'>Description: <div>{desc}</div> </div> : null}
            </div>
            <div className='single-page-right-side'>
                <div className='post-owner'>
                    <div className='owner-info'>
                        <Link to={`/posts/user/${userId}`}>
                            <div className='owner-avatar'>
                                <img src={'https://rpg-cify0074508w.netdna-ssl.com/wp-content/uploads/2020/02/service_default_avatar_182956.png'} />
                            </div>
                            <div className='owner-userName'>{firstname} {lastname}</div>
                        </Link>
                    </div>
                    <div className='owner-contact'>
                        <div className='owner-call'>
                            <div className='owner-contactNumber'>Contact: {contact}</div>
                        </div>
                    </div>
                </div>
                <div className='similar-posts'>
                    <div className='similar-posts-heading'>Similar Announcements</div>

                    <div className='similar-posts-content'>
                        {/* <CategoryPosts cat={'all'} catPostsHeading='' /> */}
                        {/* #lb #desc = 1st time renders cat=undefined value,2nd time renders what is needed cat=real-cat */}
                        {/* <CategoryPosts cat={cat}/> */}
                    </div>
                </div>
            </div>
        </div >
    );

}
SinglePagePost.defaultProps = {
    // role: 'N/A',
    // imgUrl: 'https://comnplayscience.eu/app/images/notfound.png',
}

export default SinglePage;