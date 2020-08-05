import React from 'react';
import Post from './Post/Post';
import Filter from './Filter/Filter';
import './Posts.css';


const Posts = ({data}) => {

    const posts = data.map((prod) => {
        // console.log(prod.id)
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

    // const cars = data.filter(obj => obj.cat == 'transport');

    return(
        <div className="Posts">
            {posts}
        </div>
    );
}

export default Posts;
















