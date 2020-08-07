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

    fetchFilteredPosts = async (value) => {
        try {
            const fetchFilteredPostsData = await fetch(`http://localhost:3333/posts/search/${value}`);
            const data = await fetchFilteredPostsData.json();

            this.setState({
                fileredPostsData: data
            })

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className='SearchResults'>
                {/* tobeAdded #later  */}
                {/* <Posts data={this.state.postsData}/> */}
            </div>
        )
    }
}




export default SearchResults;