import React from 'react'

export default function Wallet() {
    return (
        <div className='wallet'>
            <img src="https://incrypto.merku.love/static/media/mountains.480723aab737044962d47a4b8ea75afb.svg" alt="" />
            <img className='wallet2' src="https://incrypto.merku.love/static/media/wallet.438f370c1c5a7e7244ae.webp" alt="" />
            <span className='assest'>Total Assest</span>
            <h4 className='total'>4960.01</h4>
            <select className='currenc'>
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">GPB</option>
                <option value="">AUD</option>
            </select>
            <span className='mybit'>0.234156</span>
            <span className='btc'>BTC</span>
        </div>
    )
}
