import React, { Component } from 'react';
import './User.css';
import Homebar from '../../Homebar/Homebar';
import Footer from '../../Footer/Footer';

import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';

import Posts from '../../Posts/Posts';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
// import {Modal} from 'material-ui/core/modal';

class User extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        userData: [],
        profilePosts: []
    }

    // fetchProfile = async () => {
    //     try {
    //         const userId = this.props.match.params.userId;
    //         // create new route in 'backend' to respond user profile data (how was done in 'auth/profile')
    //         const fetchProfileData = await fetch(`http://localhost:3333/posts/user/${userId}`,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'auth-token': localStorage.token
    //                 }
    //             });
    //         const data = await fetchProfileData.json()

    //         this.setState({
    //             userData: data
    //         })
    //         console.log(`logggggg`);
    //         console.log(this.state.userData[0].userId.firstname);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // change names 'profile' to 'user'
    fetchProfilePosts = async () => {
        try {
            const userId = this.props.match.params.userId;
            const fetchProfilePostsData = await fetch(`http://localhost:3333/posts/user/${userId}`);
            const data = await fetchProfilePostsData.json()

            this.setState({
                profilePosts: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchProfilePosts();
    }

    render() {
        return (
            <div className="profile-container">
                <Login />
                <Register />

                <Homebar />

                {localStorage.token ?

                    <div className='profile'>
                        <div className='side-menu'>
                            <div className='profile-menu'>
                                <div className='profile-avatar'>
                                    <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596209154/avatar_oxcztw.png'}></img>
                                </div>
                                <div className='profile-fullname'>
                                    <div>{this.state.userData.firstname}</div>
                                    <div>{this.state.userData.lastname}</div>
                                </div>
                                <div className='profile-contact'>
                                    <div>{this.state.userData.contact}</div>
                                    <div>{this.state.userData.email}</div>
                                </div>
                                <div className='profile-info'>
                                    <div>In Scelet since</div>
                                    <div>{this.state.userData.date}</div>
                                </div>

                            </div>
                            <div className='profile-add-post'>
                                <Link to='/posts/add'>Add Post</Link>
                            </div>
                            <div className='profile-logout'>
                                <Link to='/' onClick={() => { localStorage.removeItem('token') }}>Log Out</Link>
                            </div>
                        </div>
                        <div className='contentMenu'>
                            {/* <Posts data={data} /> */}
                            <Posts data={this.state.profilePosts} />
                        </div>
                    </div>
                    :
                    <NotFound message={'Log In/Register to visit User'}></NotFound>
                }
                <Footer />
            </div>
        );
    }
}

// export default User;
export default withRouter(User);











