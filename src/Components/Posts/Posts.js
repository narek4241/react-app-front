import React, { Component } from 'react';
import Post from './Post/Post';
import Filter from './Filter/Filter';
import './Posts.css';


// class Posts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default Posts;

const Posts = ({data}) => {

    const posts = data.map((prod) => {
        // console.log(prod.id)
        return(
            <Post 
                // line below is 'opt' (avoids)
                key = {prod._id}
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
            {/* <Filter /> */}
            {posts}

            {/* {posts2} */}
            {/* {posts3} */}
            {/* {posts4} */}
        </div>
    );
}

export default Posts;























