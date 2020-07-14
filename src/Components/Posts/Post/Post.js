import React from 'react';
import './Post.css';

const Post = ({img, price, title}) => {
    return(
        <div className="Post">
            <div className="img">
                <img className="post_img" alt="img" src={img}/>
                {/* <img className="post_img" alt="img" src='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-a7_6.jpg?itok=W20gXh42'/> */}
            </div>
            <div className="title">
                <p>{title}</p>
                {/* <p>Lorem ipsum is some text to copy paste and use.</p> */}
            </div>
            <div className="price">
                <p>{price}</p>
                {/* <p>1000$</p> */}
            </div>
        </div>
    );
}

export default Post;
























