import React, { useState } from 'react';
import { addToDb } from '../FakeDB/fakeDB';
import './AddBreak.css'

const AddBreak = (props) => {
   
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time-section'>
                    <button onClick={()=>props.handleBreak('20')}>20s</button>
                    <button onClick={()=>props.handleBreak('40')}>40s</button>
                    <button onClick={()=>props.handleBreak('60')}>60s</button>
                    <button onClick={()=>props.handleBreak('80')}>80s</button>
                </div>
            </div>
        </div>
    );
};

export default AddBreak;