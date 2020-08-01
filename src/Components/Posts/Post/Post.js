import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';


const Post = ({id, imgUrl, price,currency, title}) => {
    return (
        <div className="Post">
            <Link to={`/posts/post/${id}`}>
                <div className="img">
                    <img className="post_img" alt="img" src={imgUrl} />
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="price">
                    <p style={{textTransform:"uppercase"}}>{price} {currency}</p>
                </div>
            </Link>

        </div>
    );
}

export default Post;
























