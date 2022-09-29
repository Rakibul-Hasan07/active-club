import React, { useEffect, useState } from 'react'
import './SideCart.css'
import MyInfo from '../MyInfo/MyInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExTime from '../ExTime/ExTime';
import BreakTime from '../BreakTime/BreakTime';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { addToDb, storedDb } from '../FakeDB/fakeDB';

const SideCart = (props) => {
    // console.log(props.count);
    const [second, setSecond] = useState(0)
    // console.log(second);
    useEffect(()=>{
        const localDB = storedDb();
        // console.log(localDB);
        for(const id in localDB){
            setSecond(id)
        }
    },[])
    const handleBreak = (id) => {
        setSecond(id);
        addToDb(id);
    }

    return (
        <div className='side-container'>
            <MyInfo></MyInfo>
            <PersonalInfo></PersonalInfo>
            <AddBreak handleBreak={handleBreak}></AddBreak>
            <ExTime count={props.count}></ExTime>
            <BreakTime second = {second}></BreakTime>
            <div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideCart;