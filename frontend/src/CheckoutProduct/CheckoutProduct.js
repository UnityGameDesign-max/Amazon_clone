import React from 'react'
import './CheckoutProduct.css'
import { Link } from 'react-router-dom'

function CheckoutProduct({product_image, product_description, price_dollar, price_cent}) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={process.env.PUBLIC_URL + product_image} alt="checkout__img"/>

            <div className="checkoutProduct_info">
                <span className="checkoutProduct_description">{product_description}</span>
                <div className="gift_info">
                    <input className="checkbox" type="checkbox" />
                    <span className="gift_text">This is a gift</span>
                    {/* <Link to="">
                        <span className="learn_more">Learn more</span>
                    </Link> */}
                </div>
                
            </div>

            <span className="price">
                $
                <span className="price_dollar">
                    {price_dollar}
                </span>
                <sup className="price_cent">
                    {price_cent}
                </sup>
            </span>
            
        </div>
    )
}



export default CheckoutProduct
