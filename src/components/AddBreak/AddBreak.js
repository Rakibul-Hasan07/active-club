import React from 'react';
import { addToDb } from '../FakeDB/fakeDB';
import './AddBreak.css'

const AddBreak = () => {
    const handleBreak = (id) => {
        addToDb(id);
    }
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time-section'>
                    <button onClick={()=>handleBreak('10')}>10s</button>
                    <button onClick={()=>handleBreak('20')}>20s</button>
                    <button onClick={()=>handleBreak('30')}>30s</button>
                    <button onClick={()=>handleBreak('40')}>40s</button>
                </div>
            </div>
        </div>
    );
};

export default AddBreak;