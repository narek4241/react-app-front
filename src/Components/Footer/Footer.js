import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='footer'>
                <div className='footer-copyright'>
                    © 2020 Scelet by SiteSourceInc. All rights reserved. 
            </div>
                <div>Website by <a href='https://github.com/narek4241' target='_blank'>Narek Ghazaryan</a></div>
            </div>
        );
    }
}

export default Footer;


