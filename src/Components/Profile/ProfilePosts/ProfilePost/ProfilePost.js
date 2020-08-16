import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './ProfilePost.scss';


const fetchDeleteProfilePost = async (id) => {
    const fetchDeleteProfilePostData = fetch(`https://radiant-citadel-22741.herokuapp.com/posts/del/${id}`,
        // #chsm opt-like 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            }
        }
    );
}

const ProfilePost = ({ id, imgUrl, price, currency, title, date }) => {

    let priceAndCurrency;
    if (currency == 'usd') { priceAndCurrency = '$' + price; }
    else if (currency == 'amd') { priceAndCurrency = price + ' ֏'; }
    else if (currency == 'rub') { priceAndCurrency = price + ' руб.'; }
    else if (currency == 'eur') { priceAndCurrency = '€' + price; }

    return (
        <div className="ProfilePost">
            <Link to={`/post/${id}`}>
                <div className="img">
                    {/* #lb #syntax #nuance (could wr. 1 i.o 2 line) */}
                    {imgUrl ? <img className="post_img" alt="img" src={imgUrl} /> : null}
                    {!imgUrl ? <img className="post_img" alt="img" src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597252820/picture-icon_hq0jhe.png'} /> : null}
                </div>
                <div>
                    <div className="title">
                        <p>{title}</p>
                    </div>
                    <div className="price">
                        {price ? <p style={{ textTransform: "uppercase" }}>{priceAndCurrency}</p> : null}
                    </div>
                    <div className="date">
                        {date ? <p style={{ textTransform: "uppercase" }}>{date}</p> : null}
                    </div>
                </div>
            </Link>
            <div className='delete_and_update'>
                {/* #task #remove-link-below(opt) #same_re-render_issue-how_was_in_loginToProfile */}
                <Link to='/'>
                    <List>
                        <ListItem button onClick={() => alert('Edit will be available Soon')}>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button onClick={() => { fetchDeleteProfilePost(id) }}>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Link>
            </div>
        </div>
    );
}

export default ProfilePost;

