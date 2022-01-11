import React, { useEffect, useState} from 'react'
import './Orders.css'

import {useStateValue} from '../StateProvider/StateProvider'
import {db} from '../Firebase/firebase'

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const[orders, setOrders] = useState([]);

    useEffect(() =>{
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
            setOrders(snapshot.doc.map(doc =>({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className="order">
            <h2>Your Orders</h2>
        </div>
    )
}

export default Orders
