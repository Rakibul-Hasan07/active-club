import React from 'react';
import './AddBreak.css'

const AddBreak = () => {
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time-section'>
                    <div><p>10s</p></div>
                    <div><p>20s</p></div>
                    <div><p>30s</p></div>
                    <div><p>40s</p></div>

                </div>
            </div>
        </div>
    );
};

export default AddBreak;