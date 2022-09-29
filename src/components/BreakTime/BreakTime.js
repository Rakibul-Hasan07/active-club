import React from 'react';
import './BreakTime.css'

const BreakTime = (props) => {
    return (
        <div>
            <div className='break-time'>
                <h3>Break Time</h3>
                <p>{props.second} Seconds</p>
            </div>
        </div>
    );
};

export default BreakTime;