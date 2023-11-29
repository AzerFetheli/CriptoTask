import React from 'react'
import './LeftBitcoins.css'



export default function LeftBitcoins({ bit }) {


    return (
        <div className='Leftb'>
            <div className='LeftBitcoins'>
                <div>
                <img src={bit.img} alt="" />
                <p className='titlep'>{bit.title}</p>
                <p className='shotitle'>{bit.shotTitle}</p>
                </div>
                <div className='values'>
                <p>{bit.walletPrice} Usd</p>
                <p className='addprice'>{bit.addPrice}</p>
            </div>
            </div>
            
        </div>

    )
}
