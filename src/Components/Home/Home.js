import React, { Component } from 'react';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import Homebar from '../Homebar/Homebar';
import Categories from './Categories/Categories';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import PostCategories from '../Posts/PostCategories/PostCategories';
import './Home.css';
import CategoryPosts from '../Posts/PostCategories/CategoryPosts/CategoryPosts';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        postsData: []
    }

    fetchPosts = async () => {
        try {
            const fetchPostsData = await fetch('http://localhost:3333/posts');
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

                <PostCategories />

                <div>
                    <CategoryPosts cat='all' catPostsHeading=''/>
                </div>

                <div style={{height: '100px'}}></div>

                {/* <Categories /> */}

                <Footer />
            </div>
        )
    }
}

export default Home;





