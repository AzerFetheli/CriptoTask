import React from 'react'
import './Right.css'

export default function Right({ coins }) {
    return (
        <div className='rightCard'>
            <div>
            <span className='rankr'>{coins.rank}</span>
            <p className='titler'>{coins.title}</p>
            </div>
            <div>
            <p className='walinc'>Wallet increase:</p>
            <span className='increaser'>{coins.walletIncrase}</span>
            </div>
            
            
        </div>
    )
}
