import React from 'react'
import './Header.css'

const header = props => (
    <header className="header">
        <h1 className="h1">{ props.text }</h1>
    </header>
)

export default header