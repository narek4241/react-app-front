import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';


const Post = ({id, imgUrl, price,currency, title}) => {
    return (
        <div className="Post">
            <Link to={`/post/${id}`}>
                <div className="img">
                    {imgUrl ? <img className="post_img" alt="img" src={imgUrl} /> : null}
                    {!imgUrl ? <img className="post_img" alt="img" src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597252820/picture-icon_hq0jhe.png'} /> : null}
                </div>
                <div className="price">
                    {price ? <p style={{textTransform:"uppercase"}}>{price} {currency}</p> : null}
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
}

export default Post;




