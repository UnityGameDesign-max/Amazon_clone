import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider'
import { getBasketTotal } from '../Reducer/Reducer'


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p className="subtotal_currency">
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /><span className="subtotal_gift_text">This order contains a gift</span>
                        </small>
                    </>

                )}
                decimalScale={2}
                value= {getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />

            <button className="btn-checkout">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal