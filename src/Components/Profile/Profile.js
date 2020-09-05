import React, { Component } from 'react';
import Homebar from '../Homebar/Homebar';
import Footer from '../Footer/Footer';
import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';

import Posts from '../Posts/Posts';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AddIcon from '@material-ui/icons/Add';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Divider from '@material-ui/core/Divider';
import './Profile.scss';
import ProfilePosts from './ProfilePosts/ProfilePosts';


class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        profileData: [],
        profilePosts: []
    }


    fetchProfile = async () => {
        try {
            const fetchProfileData = await fetch('https://skelet-rest-api.herokuapp.com/auth/profile',
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
            const fetchProfilePostsData = await fetch('https://skelet-rest-api.herokuapp.com/posts/profile',
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
    // componentDidUpdate(){
    //     this.fetchProfile();
    //     this.fetchProfilePosts();
    // }

    render() {
        return (
            <div className="profile-container">
                <Login />
                <Register />

                <Homebar />

                {localStorage.token ?

                    <div className='profile'>

                        <div className='profile-side-menu'>
                            <div className='profile-menu'>
                                <div className='profile-avatar'>
                                    <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596209154/avatar_oxcztw.png'}></img>
                                </div>
                                <div className='profile-info'>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <QueryBuilderIcon />
                                            <ListItemText primary={'In Scelet since'} />
                                        </ListItemIcon>
                                        <ListItemText primary={this.state.profileData.date} />
                                    </ListItem>
                                </div>
                                <div className='profile-fullname'>
                                    <div>{this.state.profileData.firstname}</div>
                                    <div>{this.state.profileData.lastname}</div>
                                </div>
                                <div className='profile-contact'>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CallIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={this.state.profileData.contact} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={this.state.profileData.email} />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>

                            <Divider />
                            <div className='profile-add-post'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <Link to='/posts/add'>
                                        <ListItemText primary={'Add Announcement'} />
                                    </Link>
                                </ListItem>
                            </div>
                            <Divider />
                            <div className='profile-logout'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MeetingRoomIcon />
                                    </ListItemIcon>
                                    <Link to='/' onClick={() => { localStorage.removeItem('token') }}>
                                        <ListItemText primary={'Log Out'} />
                                    </Link>
                                </ListItem>
                            </div>
                        </div>

                        <div className='profile-content-menu'>
                            {/* <Posts data={this.state.profilePosts} /> */}
                            <ProfilePosts data={this.state.profilePosts} />
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

export default withRouter(Profile);
