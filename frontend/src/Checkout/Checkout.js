import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <h1 className="checkout_left_title">Shopping Cart</h1>
                <p className="checkout_pricer_border">Price</p>

                <span>All Total products will go here!</span>
            </div>      

            <div className="checkout_right">
                <Subtotal />    
            </div> 
        </div>
    )
}

export default Checkout;

