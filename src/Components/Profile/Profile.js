import React, { Component } from 'react';
import './Profile.css';
import Homebar from '../Homebar/Homebar';
import Footer from '../Footer/Footer';

import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';

import Posts from '../Posts/Posts';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
// import {Modal} from 'material-ui/core/modal';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        profileData: [],
        profilePosts: []
    }

    // componentDidMount(){
    //     this.forceUpdate();
    // }

    fetchProfile = async () => {
        try {
            const fetchProfileData = await fetch('http://localhost:3333/auth/profile',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.token
                    }
                });
            const data = await fetchProfileData.json()

            this.setState({
                profileData: data
            })
            console.log(this.state.profileData);
        } catch (error) {
            console.log(error);
        }
    }


    fetchProfilePosts = async () => {
        try {
            const fetchProfilePostsData = await fetch('http://localhost:3333/posts/profile',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.token
                    }
                });
            const data = await fetchProfilePostsData.json()

            this.setState({
                profilePosts: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchProfile();
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
                                    <div>{this.state.profileData.firstname}</div>
                                    <div>{this.state.profileData.lastname}</div>
                                </div>
                                <div className='profile-contact'>
                                    <div>{this.state.profileData.contact}</div>
                                    <div>{this.state.profileData.email}</div>
                                </div>
                                <div className='profile-info'>
                                    <div>In Scelet since</div>
                                    <div>{this.state.profileData.date}</div>
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
                    <NotFound message={'Log In/Register to visit Profile'}></NotFound>
                }
                <Footer />
            </div>
        );
    }
}

// export default Profile;
export default withRouter(Profile);











