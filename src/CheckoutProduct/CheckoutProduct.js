import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider/StateProvider'


function CheckoutProduct({id , product_image, product_description, price_dollar, price_cent}) {


    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //delete items into the dataLayer
        
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
                product_image: product_image,
                price_dollar: price_dollar,
                price_cent: price_cent,
                product_description: product_description
            }
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={process.env.PUBLIC_URL + product_image} alt="checkout__img"/>

            <div className="checkoutProduct_info">
                <span className="checkoutProduct_description">{product_description}</span>
                <div className="gift_info">
                    <input className="checkbox" type="checkbox" />
                    <span className="gift_text">This is a gift</span>
                    
                    <span className="learn_more">Learn more</span>
 
                </div>
                
                <a href="" className="delete_btn" onClick={removeFromBasket}>Delete</a>
            
                
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
