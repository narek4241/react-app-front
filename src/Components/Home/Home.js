import React, { Component } from 'react';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import Homebar from '../Homebar/Homebar';
import HomeView from './HomeView/HomeView';
import Footer from '../Footer/Footer';
import PostCategories from '../Posts/PostCategories/PostCategories';
import './Home.scss';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        postsData: []
    }

    fetchPosts = async () => {
        try {
            const fetchPostsData = await fetch('https://skelet-rest-api.herokuapp.com/posts');
            const data = await fetchPostsData.json();

            this.setState({
                postsData: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount = () => {
        this.fetchPosts();
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div className='Home'>
                <Login />
                <Register />

                <Homebar />

                <HomeView />

                <PostCategories />

                <div style={{ height: '100px' }}></div>

                <Footer />
            </div>
        )
    }
}

export default Home;

