import { Link } from '@material-ui/core'
import React from 'react'
import './Products.css'


function Products({product_image, price_dollar, price_cent, product_description, specials}) {
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

                <button className="cart-btn">Add to Cart</button>
                
            </div>
        </div>
    )
}


export default Products
