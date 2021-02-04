import React from 'react'
import './Payments.css'
import { useStateValue } from '../StateProvider/StateProvider'
import { getBasketTotal } from '../Reducer/Reducer'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Payments() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="payments">
            <h2 className="checkout_title">Checkout (<span className="items">{basket.length} items</span>)</h2>
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_address_title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        <p>user12@gmail.com</p>
                        <p>217 Ramokonopi East</p>
                        <p>Katlehong, Germiston</p>
                    </div>
                </div>
            

                <div className="payment_section">
                    <h3>Review items and delivery</h3>

                    <div className="payment_item">
                        {basket.map(item =>(
                            <CheckoutProduct 
                                id= {item.id}
                                product_image= {item.product_image}
                                price_dollar= {item.price_dollar}
                                price_cent= {item.price_cent}
                                product_description= {item.product_description}
                            />
                        ))}
                    </div>
                    
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3> 
                    </div>

                    <div className="payment_details">
                        {/* Stripe */}
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default Payments

