import React from 'react';
import './ExTime.css'

const ExTime = ({count}) => {
    // console.log(count);
    let exerciseTime = 0;
    for(const cart of count){
        exerciseTime = exerciseTime + cart.time;
    }
    return (
        <div>
            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h3>Exercise Time</h3>
                    <p>{exerciseTime} Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default ExTime;