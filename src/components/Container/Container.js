import React, { useEffect, useState } from 'react';
import DisplayCart from '../DisplayCart/DisplayCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, } from '@fortawesome/free-solid-svg-icons'
import './Container.css'
import SideCart from '../SideCart/SideCart';
import Question from '../Question/Question';

const Body = () => {
    const [carts, setCarts] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch('mydata.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    const handleCart = (cart) => {
        const newCart = [...count, cart]
        setCount(newCart);
    }
    return (
        <div>
            <div className='main-container'>
                <div className='active-item'>
                    <h1 className='first-name'><FontAwesomeIcon icon={faDumbbell}/>Fitness <span className='last-name'>Gym Club</span></h1>
                    <h2>Select today’s exercise</h2>
                    <div className='gym-cart'>
                        {
                            carts.map(cart => <DisplayCart cart={cart} key={cart.id} handleCart={handleCart}></DisplayCart>)
                        }
                    </div>
                </div>
                <div className='cart-item'>
                    <SideCart count={count}></SideCart>
                </div>

            </div>
            <Question></Question>
        </div>
    );
};

export default Body;