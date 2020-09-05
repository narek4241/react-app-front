import React, { Component } from 'react';
import Homebar from '../../Homebar/Homebar';
import Footer from '../../Footer/Footer';
import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';

import Posts from '../../Posts/Posts';
import { withRouter } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './User.scss';


class User extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        userData: [],
        userPosts: []
    }

    // componentDidMount(){
    //     this.forceUpdate();
    // }

    fetchUserData = async () => {
        try {
            const userId = this.props.match.params.userId;
            const fetchUserData = await fetch(`https://skelet-rest-api.herokuapp.com/auth/profile/user/${userId}`);
            const data = await fetchUserData.json()

            this.setState({
                userData: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    fetchUserPosts = async () => {
        try {
            const userId = this.props.match.params.userId;
            const fetchUserPostsData = await fetch(`https://skelet-rest-api.herokuapp.com/posts/user/${userId}`);
            const data = await fetchUserPostsData.json()

            this.setState({
                userPosts: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchUserPosts();
        this.fetchUserData();
    }

    render() {
        return (
            <div className="user-container">
                <Login />
                <Register />

                <Homebar />
                
                <div className='user'>
                    <div className='user-content-menu'>
                        <Posts data={this.state.userPosts} />
                    </div>
                    <div className='user-side-menu'>
                        <div className='user-menu'>
                            <div className='user-avatar'>
                                <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596209154/avatar_oxcztw.png'}></img>
                            </div>
                            <div className='user-info'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <QueryBuilderIcon />
                                        <ListItemText primary={'In Scelet since'} />
                                    </ListItemIcon>
                                    <ListItemText primary={this.state.userData.date} />
                                </ListItem>
                            </div>
                            <div className='user-fullname'>
                                <div>{this.state.userData.firstname}</div>
                                <div>{this.state.userData.lastname}</div>
                            </div>
                            <div className='user-contact'>
                                <List>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <CallIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={this.state.userData.contact} />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <EmailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={this.state.userData.email} />
                                    </ListItem>
                                </List>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(User);
