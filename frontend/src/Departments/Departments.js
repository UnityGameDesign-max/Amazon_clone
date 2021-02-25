import React from 'react'
import './Departments.css'

function Departments() {
    return (
        <div className="departments">
            <h3 className="departments_header">Departments</h3>
            <div className="checkboxes">
                <input type="checkbox" />
                Arts, Crafts & Sewing
            </div>
            <div className="checkboxes">
                <input type="checkbox" />
                Automative & Motorcycle
            </div>
            <div className="checkboxes">
                <input type="checkbox" />
                Baby
            </div>

            <div className="checkboxes">
                <input type="checkbox" />
                Baby and Clothings
            </div>

            <div className="checkboxes">
                <input type="checkbox" />
                Books
            </div>
            
            <div className="checkboxes">
                <input type="checkbox" />
                Boys' Fashion
            </div>

            <div className="checkboxes">
                <input type="checkbox" />
                Camera & Photo
            </div>

            <div className="checkboxes">
                <input type="checkbox" />
                Cell Phones & Accessories
            </div>


            <div className="checkboxes">
                <input type="checkbox" />
                Computers & Accessories
            </div>

            <div className="checkboxes">
                <input type="checkbox" />
                Costumes & Accessories
            </div>
            
            
            <div className="checkboxes">
                <input type="checkbox" />
                Electronics
            </div>

            <h3 className="departments_header">Deal Type</h3>
            <div className ="deal_types">
                <a className ="deal_types_link" href="#">Deal of the Day</a>
                <a className ="deal_types_link" href="#">Lightning Deals</a>
                <a className ="deal_types_link" href="#">Savings & Sales</a>
                <a className ="deal_types_link" href="#">Prime Early Access Deals</a>
            </div>

            <h3 className="price_header">Price</h3>
            <div className ="price_range">
                <a className ="price_range_link" href="#">Deal of the Day</a>
                <a className ="price_range_link" href="#">Lightning Deals</a>
                <a className ="price_range_link" href="#">Savings & Sales</a>
                <a className ="price_range_link" href="#">Prime Early Access Deals</a>
            </div>
        </div>
    )
}

export default Departments
