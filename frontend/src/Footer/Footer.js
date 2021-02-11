import { Link } from '@material-ui/core'
import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="footer_links">
                <h3 >Get To Know Us</h3>
                <span className="footer_links_text">Careers</span>
                <span className="footer_links_text">Blog</span>
                <span className="footer_links_text">About Amamzon</span>
                <span className="footer_links_text">Amazon Devices</span>
            </div>

            <div className="footer_links">
                <h3>Make Money with us</h3>
                <span className="footer_links_text">Sell on Amazon</span>
                <span className="footer_links_text">Sell on Amazon Business</span>
                <span className="footer_links_text">Sell your apps on Amazon</span>
                <span className="footer_links_text">Become an Affiliate</span>
                <span className="footer_links_text">Advertise Your Products</span>
                <span className="footer_links_text">Sell-Publish with Us</span>
                <span className="footer_links_text">Host an Amazon Hub</span>
            </div>

            <div className="footer_links">
                <h3>Amazon Payment Products</h3>
                
                <span className="footer_links_text">Amazon Business Card</span>
                
                <span className="footer_links_text">Shop with Points</span>
                <span className="footer_links_text">Reload your Balance</span>
                <span className="footer_links_text">Amazon Currency Converter</span>
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

