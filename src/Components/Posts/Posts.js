import React from 'react';
import Post from './Post/Post';
import Filter from './Filter/Filter';
import './Posts.scss';


const Posts = ({data}) => {
    const posts = data.map((prod) => {
        return(
            <Post 
                // line below is 'opt' (avoids)
                key = {prod._id}
                id = {prod._id}
                imgUrl = {prod.imgUrl}
                price = {prod.price}
                title = {prod.title}
                currency = {prod.currency}
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











