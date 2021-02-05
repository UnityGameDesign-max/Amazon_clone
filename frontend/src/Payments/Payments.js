import React, { useState, useEffect } from 'react'
import './Payments.css'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Reducer/Reducer'
import axios from '../Axios/axios'

function Payments() {

    const [{basket}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useStateValue(false);
    const [proccessing, setProccessing] = useStateValue("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() =>{
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?Total=${getBasketTotal(basket) * 100}`

            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    const handleSubmit = async (e) =>{
        //This is a function that handle the submitting of the form
        e.preventDefault();
        setProccessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({payment}) => {
            
        })
    }

    const handleChange = e =>{
        //This is a function that handle the Error when the user types in the form
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
    }

    return (
        <div className="payments">
            <h2 className="checkout_title">Checkout (<span className="items">{basket.length} items</span>)</h2>
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_address_title">
                        <h3 className="address_title">Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        <p className="payment_details">user12@gmail.com</p>
                        <p className="payment_details">217 Ramokonopi East</p>
                        <p className="payment_details">Katlehong, Germiston</p>
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) =>(
                                        <>
                                            <p className="subtotal_currency">
                                                <h3>Order Total: <strong>{value}</strong></h3>
                                            </p>
                                        </>

                                    )}
                                    decimalScale={2}
                                    value= {getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandsSeparator={true}
                                    prefix={"$"}
                                />

                                <button className="payment_processing-btn" disabled={proccessing || disabled || succeeded}>
                                    <span>{proccessing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default Payments

