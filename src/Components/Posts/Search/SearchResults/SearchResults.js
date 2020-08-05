import React, { useState, Component } from 'react';
import Posts from '../../Posts';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        postsData: []
    }

    fetchPosts = async () => {
        try {
            const fetchPosts = await fetch('http://localhost:3333/posts');
            const data = await fetchPosts.json();

            this.setState({
                postsData: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount(){
        this.fetchPosts();
    }

    render() {
        return (
            <div className='SearchResults'>
                <h1>Search Result Posts</h1>
                {/* <Posts data={this.state.postsData} /> */}
            </div>
        )
    }
}


export default SearchResults;