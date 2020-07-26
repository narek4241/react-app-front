import React, { Component } from 'react';
import './Post.css';

// class Post extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default Post;

const Post = ({ imgUrl, price,currency, title, key }) => {
    return (
        <div className="Post">
            <a href={`posts/post/${key}`}>
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
























