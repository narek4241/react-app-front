import React from 'react';
import './FIlter.css';

const Filter = () => {
    return(
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

export default Filter;