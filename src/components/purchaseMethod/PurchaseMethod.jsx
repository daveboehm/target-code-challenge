import React from 'react'
import './PurchaseMethod.css'

const purchaseMethod = props => (
    <div className="purchaseMethod__container">
        <button type="button" className="button__pickup">PICK UP IN STORE</button>
        <button type="button" className="button__online">ADD TO CART</button>
    </div>
)

export default purchaseMethod