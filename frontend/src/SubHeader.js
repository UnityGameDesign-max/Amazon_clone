import React from 'react'
import './SubHeader.css'
import MenuIcon from '@material-ui/icons/Menu';

function SubHeader() {
    return (
        <div className="sub_header">
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
    )
}

export default SubHeader
