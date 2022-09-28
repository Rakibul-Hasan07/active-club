import React, { useEffect, useState } from 'react';
import DisplayCart from '../DisplayCart/DisplayCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Body.css'

const Body = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('mydata.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    return (
        <div className='main-container'>
            <div className='active-item'>
                <h1 className='first-name'><FontAwesomeIcon icon={faDumbbell} />Fitness <span className='last-name'>Gym Club</span></h1>
                <div className='gym-cart'>
                    {
                        carts.map(cart => <DisplayCart cart={cart} key={cart.id}></DisplayCart>)
                    }
                </div>
            </div>
            <div className='cart-item'>
                <h1>Cart section</h1>
            </div>
        </div>
    );
};

export default Body;