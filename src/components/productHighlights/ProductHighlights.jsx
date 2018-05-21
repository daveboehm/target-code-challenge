import React, { Component } from 'react'
import './ProductHighlights.css'

class productHighlights extends Component {
    
    render() {
        let renderItems = this.props.highlights.map( (hl,i) => {
            
            // Not a fan of dangerouslySetInnerHTML, but the data provided comes with markup.
            return <li key={i} className="productHighlights__item" dangerouslySetInnerHTML={{__html: hl}}></li>
        })

        return (
            <div className="productHighlights">
                <h2 className="productHighlights__h2">product highlights</h2>
                <ul className="productHighlights__ul">
                    { renderItems }
                </ul>
            </div>
        )
    }
}
    
export default productHighlights