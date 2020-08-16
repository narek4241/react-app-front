import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';



const Post = ({ id, imgUrl, price, currency, title }) => {
    let priceAndCurrency;
    if (currency == 'usd') { priceAndCurrency = '$' + price; }
    else if (currency == 'amd') { priceAndCurrency = price + ' ֏'; }
    else if (currency == 'rub') { priceAndCurrency = price + ' руб.';} 
    else if (currency == 'eur') { priceAndCurrency = '€' + price;}

    return (
        <div className="Post">
            <Link to={`/post/${id}`}>
                <div className="img">
                    {/* #lb #syntax #nuance (could wr. 1 i.o 2 line) */}
                    {imgUrl ? <img className="post_img" alt="img" src={imgUrl} /> : null}
                    {!imgUrl ? <img className="post_img" alt="img" src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597252820/picture-icon_hq0jhe.png'} /> : null}
                </div>
                <div className="price">
                    {/* {price ? <p style={{textTransform:"uppercase"}}>{price} {currency}</p> : null} */}
                    {price ? <p style={{ textTransform: "uppercase" }}>{priceAndCurrency}</p> : null}
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
}

export default Post;




