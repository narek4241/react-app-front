import React, { Component } from 'react';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';
import Homebar from '../Homebar/Homebar';
import Categories from './Categories/Categories';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import './Home.css';


export const elemInOut = (elemIn, elemOut) => {
    document.getElementById(elemOut).style.animation = '';
    // try 'useState' here
    // toBeUpdated later
    // document.getElementById('elemOut').style.animation = `${elemOut}-out 1s forwards 1`;
    document.getElementById(elemIn).style.animation = `${elemIn}-in 1s forwards 1`;
}

export const elemOut = (elemOut) => {
    document.getElementById(elemOut).style.animation = `${elemOut}-out 1s forwards 1`;
}

// export const elemInOrOut = (elem, InOrOut) => {
//     document.getElementById(elem).style.animation = `${elem}-${InOrOut} 1s forwards 1`;
// }


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

                <Categories />

                <Posts data={this.state.postsData}/>

                <Footer />
            </div>
        )
    }
}

export default Home;










