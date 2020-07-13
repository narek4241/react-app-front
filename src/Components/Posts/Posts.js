import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = ({data}) => {

    const posts = data.map((prod) => {
        return(
            <Post 
                img = {prod.img}
                price = {prod.price}
                title = {prod.title}
            />
        );
    })

    return(
        <div className="Posts">
            {posts}
        </div>
    );
}

export default Posts;
























