import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost';
import './ProfilePosts.scss';


const ProfilePosts = ({ data }) => {
    const posts = data.map((prod) => {
        return (
            <ProfilePost
                // line below is 'opt' (avoids)
                key={prod._id}
                id={prod._id}
                imgUrl={prod.imgUrl}
                price={prod.price}
                title={prod.title}
                currency={prod.currency}
                date={prod.date}
            />
        );
    })
    return (
        <div className="ProfilePosts">
            {posts}
        </div>
    );
}

export default ProfilePosts;

