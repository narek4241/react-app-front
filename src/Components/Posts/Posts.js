import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import Filter from './Filter/Filter';

const Posts = ({data}) => {

    const posts = data.map((prod) => {
        // console.log(prod.id)
        return(
            <Post 
                // line below is 'opt' (avoids)
                key = {prod.id}

                img = {prod.img}
                price = {prod.price}
                title = {prod.title}
            />
        );
    })

    return(
        <div className="Posts">
            {/* <Filter /> */}
            {posts}
        </div>
    );
}

export default Posts;
























