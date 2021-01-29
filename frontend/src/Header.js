import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header_one">
                <img className="header_logo" alt="amazon_img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

                <div className="header_option">
                    <small><span className="header_option_1">Deliver to</span></small>
                    <span className="header_option_2"><LocationOnOutlinedIcon  className="locationIcon"/>South Africa</span>
                </div>

                <div className="header_search">
                    <input className="header_search_input" type="text" />
                    <SearchIcon className="header_searchIcon"/>
                </div>

                <div className="header_right_nav">
                    <div className="header_option_right">
                        <small><span className="header_option_right_1">Hello, Sign in</span></small>
                        <span className="header_option_right_2">Account & Lists</span>

                    </div>

                    <div className="header_option_right">
                        <small><span className="header_option_right_3">Returns</span></small>
                        <span className="header_option_right_4">& Orders</span>
                    </div>

                    <div className="header_option_right_cart">
                        <ShoppingBasketOutlinedIcon className="shopping_cart" />
                        <span className="shopping_cart_number">0</span>
                    </div>
                </div>
            </div>

            <div className="header_two">

                <div className="sub_header_links1">
                    <div className="sub_header_option1">
                        <MenuIcon className="ham_menu"/>
                        <a href="#"><span className="item1">All</span></a>
                    </div>

                    <div className="sub_header_option2">
                        <a href="#"><span className="item2">Today's Deals</span></a>
                    </div>

                    <div className="sub_header_option3">
                        <a href="#"><span className="item3">Customer Service</span></a>
                    </div>

                    <div className="sub_header_option4">
                        <a href="#"><span className="item4">Gift Cards</span></a>
                    </div>

                    <div className="sub_header_option5">
                        <a href="#"><span className="item5">Sell</span></a>
                    </div>

                    <div className="sub_header_option6">
                        <a href="#"><span className="item6">Register</span></a>
                    </div>
                </div>

                <div className="sub_header_links2">
                    <div className="sub_header_option7">
                        <a href="#"><span className="item7">Amazon's response to COVID-19</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
