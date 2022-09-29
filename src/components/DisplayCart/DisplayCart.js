import React from 'react';
import './DisplayCart.css'

const DisplayCart = (props) => {
    const { id, name, img, title, age, time} = props.cart;
    // console.log(props.cart);
    return (
        <div className='single-cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h3>{name}</h3>
                <p>{title}</p>
                <h3>For Age: {age}</h3>
                <h3>Time Required: {time}s</h3>
            </div>
            <button onClick={() => props.handleCart(props.cart)} className='btn-cart'>Add TO Cart</button>
        </div>
    );
};

export default DisplayCart;