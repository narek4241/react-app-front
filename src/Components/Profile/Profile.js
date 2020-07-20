import React from 'react';
import './Profile.css';
import Homebar from '../Home/Homebar/Homebar';
import Footer from '../Footer/Footer';

import Login from '../Authotication/Login/Login';
import Register from '../Authotication/Register/Register';

import Posts from '../Posts/Posts';
import { data } from '../../App';
// import {Modal} from 'material-ui/core/modal';


const Profile = () => {
    return (
        <div className="profile-container">
            <Login />
            <Register />
            
            <Homebar />
            <div className='profile'>
                <div className='side-menu'>
                    <div className='profile-menu'>
                        <div className='profile-avatar'>
                            <img src={data[0].avatar}></img>
                        </div>
                        <div className='profile-fullname'>
                            <div className=''>Name</div>
                            <div className=''>Lastname</div>
                        </div>
                        <div className='profile-contact'>
                            <div>Contact</div>
                            <div className=''>+37400102030</div>
                        </div>
                    </div>
                    <div className='profile-add-post'>
                        <div className='add-post'>
                            <button type="button">
                                Open Modal
                            </button>
                            {/* <button type="button" onClick={handleOpen}>
                                Open Modal
                            </button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal> */}
                        </div>
                    </div>
                </div>
                <div className='contentMenu'>
                    <Posts data={data} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;

