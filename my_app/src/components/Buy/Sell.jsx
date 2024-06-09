import React from 'react'
import StyleSell from './Sell.module.css'
import { Link } from 'react-router-dom'

function Sell({ id, name, price, image }) {
    return (
        <div>
            <div>
                <button><Link to='/catalog'>Back</Link></button>
            </div>
            <div className={StyleSell.md}>
                <div className={StyleSell.card}>
                    <span>{name}</span>
                </div>
            </div>
        </div>
    )
}

export default Sell