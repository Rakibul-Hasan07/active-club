import React, { useEffect, useState } from 'react';
import './SideCart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyInfo from '../MyInfo/MyInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExTime from '../ExTime/ExTime';
import BreakTime from '../BreakTime/BreakTime';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { addToDb, storedDb } from '../FakeDB/fakeDB';

const SideCart = (props) => {
    const [second, setSecond] = useState(0)
    useEffect(() => {
        const localDB = storedDb();
        for (const id in localDB) {
            setSecond(id)
        }
    }, [])
    const handleBreak = (id) => {
        setSecond(id);
        addToDb(id);
    }

    const handleToast = () => {
        toast.success("WoW! Activate Completed",{position:"top-center"});
    }
    return (
        <div className='side-container'>
            <MyInfo></MyInfo>
            <PersonalInfo></PersonalInfo>
            <AddBreak handleBreak={handleBreak}></AddBreak>
            <ExTime count={props.count}></ExTime>
            <BreakTime second={second}></BreakTime>
            <div>
                <button onClick={handleToast} className='activity-btn'>Activity Completed</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SideCart;