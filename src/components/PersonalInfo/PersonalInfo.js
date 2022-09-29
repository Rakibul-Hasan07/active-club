import React from 'react';
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div className='personal-info'>
                <div>
                    <h4>64 <small>kg</small></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.8</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>22 <small>years</small></h4>
                    <p>Age</p>
                </div>
            </div>
    );
};

export default PersonalInfo;