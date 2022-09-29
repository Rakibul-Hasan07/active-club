import React from 'react'
import './SideCart.css'
import MyInfo from '../MyInfo/MyInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExTime from '../ExTime/ExTime';
import BreakTime from '../BreakTime/BreakTime';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const SideCart = (props) => {
    console.log(props.count);

    return (
        <div className='side-container'>
            <MyInfo></MyInfo>
            <PersonalInfo></PersonalInfo>
            <AddBreak></AddBreak>
            <ExTime count={props.count}></ExTime>
            <BreakTime></BreakTime>
            <div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideCart;