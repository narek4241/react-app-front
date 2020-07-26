import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='footer'>
                <div className='footer-copyright'>
                    © 2020 Scelet SSI.All rights reserved.
            </div>
                <div>SiteSourceInc</div>
            </div>
        );
    }
}

export default Footer;







