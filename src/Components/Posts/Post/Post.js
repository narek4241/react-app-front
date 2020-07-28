import React from 'react';
import './Post.css';


const Post = ({id, imgUrl, price,currency, title}) => {
    return (
        <div className="Post">
            <a href={`posts/post/${id}`}>
                <div className="img">
                    <img className="post_img" alt="img" src={imgUrl} />
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="price">
                    <p style={{textTransform:"uppercase"}}>{price} {currency}</p>
                </div>
            </a>

        </div>
    );
}

export default Post;
























