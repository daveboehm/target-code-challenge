import React, { Component } from 'react'
import './QuantitySelector.css'

class quantitySelector extends Component {
    state = {
        quantity: 0
    }

    incQty = () => {
        let newQty = this.state.quantity + 1
        return this.setState({
            quantity: newQty
        })
    }
    decQty = () => {
        let newQty = this.state.quantity > 0 ? this.state.quantity - 1 : 0
        return this.setState({
            quantity: newQty
        })
    }

    render() {
        return (
            <div className="quantitySelector">
                <label>quantity:</label>
                <div className="quantitySelector__adjusters">
                    <svg className="icon icon-circle-with-minus" onClick={ this.decQty }>
                        <use href="#icon-circle-with-minus"></use>
                    </svg>

                    <span>{this.state.quantity}</span>

                    <svg className="icon icon-circle-with-plus" onClick={ this.incQty }>
                        <use href="#icon-circle-with-plus"></use>
                    </svg>
                </div>
            </div>
        )
    }
    
}

export default quantitySelector