import React from 'react'
import './Catergories.css'

function Catergories({card_header, image, card_link}) {
    return (
        <div className="catergories">
            <div className="catergories_info">
                <h2 className="card_header">{card_header}</h2>
            </div>
            <img alt="" src={image}/>
            <a className="shop_now" href="#">{card_link}</a>
        </div>
    )
}
export default Catergories
