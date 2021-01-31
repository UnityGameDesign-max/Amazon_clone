import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header_one">
                <Link to="/">
                    <img className="header_logo" alt="amazon_img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>
                
                <Link>
                    <div className="header_option">
                        <small><span className="header_option_1">Deliver to</span></small>
                        <span className="header_option_2"><LocationOnOutlinedIcon  className="locationIcon"/>South Africa</span>    
                    </div>
                </Link>
                

                <div className="header_search">
                    <input className="header_search_input" type="text" />
                    <SearchIcon className="header_searchIcon"/>
                </div>

                
                <div className="header_right_nav">
                    <Link to="/login">
                        <div className="header_option_right">
                            <small><span className="header_option_right_1">Hello, Sign in</span></small>
                            <span className="header_option_right_2">Account & Lists</span>
                        </div>
                    </Link>
                    
                    <Link to="">
                        <div className="header_option_right">
                            <small><span className="header_option_right_3">Returns</span></small>
                            <span className="header_option_right_4">& Orders</span>
                        </div>
                    </Link>
                    

                    <div className="header_option_right_cart">
                        <ShoppingBasketOutlinedIcon className="shopping_cart" />
                        <span className="shopping_cart_number">0</span>
                    </div>
                </div>
            </div>

            <div className="header_two">

                <div className="sub_header_links1">
                    <Link>
                        <div className="sub_header_option1">
                            <MenuIcon className="ham_menu"/>
                            <span className="item1">All</span>
                        </div>
                    </Link>
                    

                    <Link to ="/deals">
                        <div className="sub_header_option2">
                            <span className="item2">Today's Deals</span>
                        </div>
                    </Link>
                    
                    <Link to="">
                        <div className="sub_header_option3">
                            <span className="item3">Customer Service</span>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="sub_header_option4">
                            <span className="item4">Gift Cards</span>
                        </div>
                    </Link>
                    
                    <Link to="">
                        <div className="sub_header_option5">
                            <span className="item5">Sell</span>
                        </div>

                    </Link>
                    
                    <Link to="">
                        <div className="sub_header_option6">
                            <span className="item6">Register</span>
                        </div>
                    </Link>
                    
                </div>

                <div className="sub_header_links2">
                    <Link to="">
                        <div className="sub_header_option7">
                            <span className="item7">Amazon's response to COVID-19</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
