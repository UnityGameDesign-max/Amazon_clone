import { Link } from '@material-ui/core'
import React from 'react'
import './Products.css'
import { useStateValue } from '../StateProvider/StateProvider'


function Products({id, product_image, price_dollar, price_cent, product_description, specials}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () =>{ 
        //dispatch the items into the dataLayer
        
        dispatch({
            type: 'ADD_TO_BASKET',
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
        <div className="products">
            
            <div className="product_info">
                <img alt="photos" className="product_img" src={process.env.PUBLIC_URL + product_image} />
                <p>{specials}</p>
                <span>
                    $
                    <span className="price_dollar">
                        {price_dollar}
                    </span>
                    <sup className="price_cent">
                        {price_cent}
                    </sup>
                </span>
                <Link>
                    <span className="product_description">{product_description}</span>
                </Link>

                <span></span>

                <button className="cart-btn" onClick={addToBasket}>Add to Cart</button> 
                
            </div>
        </div>
    )
}


export default Products
