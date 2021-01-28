import React from 'react'
import './SubHeader.css'

function SubHeader() {
    return (
        <div className="sub_header">
            <div className="sub_header_option1">
                <a><span className="item1">All</span></a>
            </div>

            <div className="sub_header_option2">
                <a><span className="item2">Today's Deals</span></a>
            </div>

            <div className="sub_header_option3">
                <a><span className="item3">Customer Service</span></a>
            </div>

            <div className="sub_header_option4">
                <span className="item4">Gift Cards</span>
            </div>

            <div className="sub_header_option5">
                <span className="item5">Sell</span>
            </div>

            <div className="sub_header_option6">
                <span className="item6">Register</span>
            </div>
        </div>
    )
}

export default SubHeader
