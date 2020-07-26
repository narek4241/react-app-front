import React, { Component } from 'react';
import './FIlter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='Filter'>
                <div className='filter-bar'>
                    {/* <p>Transport</p> */}
                    <ul>
                        <li>ShowAll</li>
                        <li>Transport</li>
                        <li>ELectronics</li>
                        <li>RealEstate</li>
                        <li>Other</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filter;












