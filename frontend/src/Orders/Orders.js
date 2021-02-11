import React, { useState} from 'react'
import './Orders.css'
import moment from 'moment'


function Orders() {
    
    const[orders, setOrders] = useState([]);


    return (
        <div className="order">
            <h2>Your Orders</h2>
        </div>
    )
}

export default Orders
