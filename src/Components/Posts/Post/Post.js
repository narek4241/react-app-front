import React from 'react';
import './Post.css';

const Post = ({img, price, title}) => {
    return(
        <div className="Post">
            <div className="img">
                <img className="post_img" alt="img" src={img}/>
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="price">
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Post;
























