import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './MyInfo.css'

const MyInfo = () => {
    return (
        <div>
            <div className='name-section'>
                <img src="photo.jpg" alt="" />
                <div>
                    <h4>Rakibul Hasan</h4>
                    <h5><FontAwesomeIcon icon={faLocationDot} />Dhaka, Bangladesh</h5>
                </div>
            </div>
        </div>
    );
};

export default MyInfo;