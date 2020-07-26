import React from 'react';
import './Categories.css'
import '../../../images/down-arrow.png';


const Categories = () => {
    return (
        <div className='home-cats'>
            <div className='cats-header'>
                <div className='cats-header-logo'></div>
                <div className='cats-header-heading'></div>
                <div className='cats-header-paragraph'></div>
                <div className='cats-header-logo'></div>
            </div>
            <div className='cats-options'>
                <div className='cats-options-heading'>Pick your Category:</div>
                <div className='cats-options-content'>
                    <div>
                        <div>Vehicles</div>
                        <div>
                            {/* <img src="../../../images/down-arrow.png" /> */}
                            ↓
                        </div>
                    </div>
                    <div>
                        <div>Phones, Tablels</div>
                        <div>
                            ↓
                        </div>
                    </div>
                    <div>
                        <div>Electronics</div>
                        <div>
                            ↓
                        </div>
                    </div>
                    <div>
                        <div>Real Estate</div>
                        <div>
                            ↓
                        </div>
                    </div>
                    <div>
                        <div>Everything Else</div>
                        <div>
                            ↓
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;



















