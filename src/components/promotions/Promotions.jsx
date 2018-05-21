import React from 'react'
import './Promotions.css'

const promotions = props => {
    return props.promos.map( (desc, i) => {
        return (
            <li key={i} className="promotion__item">
                <svg className="icon icon-tag">
                    <use href="#icon-tag"></use>
                </svg>{ desc.Description[0].shortDescription }
            </li>
        )
    })
}

export default promotions