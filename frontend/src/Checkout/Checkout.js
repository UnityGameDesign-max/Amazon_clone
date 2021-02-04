import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { getBasketTotal } from '../Reducer/Reducer'
 

function Checkout() {

    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout_left">
                <h1 className="checkout_left_title">Shopping Cart</h1>
                <p className="checkout_pricer_border">Price</p>

                {/* <CheckoutProduct product_image="/amazon_pics/gaming_headphones.jpg" price_dollar="122" price_cent= "23" product_description = "test checkout product" /> */}

            
                {basket.map(item =>(
                    <CheckoutProduct 
                    id= {item.id}
                    product_image= {item.product_image}
                    price_dollar= {item.price_dollar}
                    price_cent= {item.price_cent}
                    product_description= {item.product_description}
                    />
                ))}


                <h1 className="checkout_left_subtotal">Subtotal({basket.length} items): $ {getBasketTotal(basket)} </h1>     
            </div>

            <div className="checkout_right">
                <Subtotal />    
            </div>
            
        </div>
    )
}

export default Checkout;

