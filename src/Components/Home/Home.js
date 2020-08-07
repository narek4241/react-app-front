import React, { Component } from 'react';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import Homebar from '../Homebar/Homebar';
import Categories from './Categories/Categories';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import './Home.css';


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
    }


    render() {
        return (
            <div className='Home'>
                <Login />
                <Register />

                <Homebar />

                <div style={{width: '100%',height: '100px'}}></div>
                <Posts data={this.state.postsData}/>
                <div style={{width: '100%',height: '100px'}}></div>


                {/* #task create comp. which gets 'cat' prop, returns headlined content, with posts in theme */}
                {/* <div style={{width: '100%',height: '100px'}}></div>
                <Posts data={this.state.postsData}/>
                <div style={{width: '100%',height: '100px'}}></div>
                <Posts data={this.state.postsData}/>
                <div style={{width: '100%',height: '100px'}}></div>
                <Posts data={this.state.postsData}/> */}

                
                {/* <Posts data={this.state.postsData}/>
                <Posts data={this.state.postsData}/>
                <Posts data={this.state.postsData}/>
                <Posts data={this.state.postsData}/>
                <Posts data={this.state.postsData}/>
                <Posts data={this.state.postsData}/>
                <Posts data={this.state.postsData}/> */}

                <Categories />

                <Footer />
            </div>
        )
    }
}

export default Home;




