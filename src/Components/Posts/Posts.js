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

    // const cars = data.filter(obj => obj.cat == 'transport');

    return(
        <div className="Posts">
            {/* <Filter /> */}
            {posts}

            {/* {posts2} */}
            {/* {posts3} */}
            {/* {posts4} */}
        </div>
    );
}

export default Posts;
























