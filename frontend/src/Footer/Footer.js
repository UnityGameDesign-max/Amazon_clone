import { Link } from '@material-ui/core'
import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="footer_links">
                <h3>Get To Know Us</h3>
                <span>Careers</span>
                <span>Blog</span>
                <span>About Amamzon</span>
                <span>Amazon Devices</span>
            </div>

            <div className="footer_links">
                <h3>Make Money with us</h3>
                <span>Sell on Amazon</span>
                <span>Sell on Amazon Business</span>
                <span>Sell your apps on Amazon</span>
                <span>Become an Affiliate</span>
                <span>Advertise Your Products</span>
                <span>Sell-Publish with Us</span>
                <span>Host an Amazon Hub</span>
            </div>

            <div className="footer_links">
                <h3>Amazon Payment Products</h3>
                
                <span>Amazon Business Card</span>
                
                <span>Shop with Points</span>
                <span>Reload your Balance</span>
                <span>Amazon Currency Converter</span>
            </div>


            <div className="footer_links">
                <h3>Let Us Help You</h3>
                <span>Your Orders</span>
                <span>Shipping Rates & Policies</span>
                <span>Returns & Replacements</span>
                <span>Amazon Currency Converter</span> 
            </div>
            
            
            
        </div>
    )
}

export default Footer

