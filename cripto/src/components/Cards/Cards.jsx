
import './Cards.css'


export default function Cards({ cripto }) {
    let currencvalue = cripto.changePercent24Hr
    let backgroundStyle = { backgroundColor: currencvalue > 0 ? "#1abc7b" : "red" }


    return (
        <div className='Card'>
            <div >
                <img src="https://incrypto.merku.love/static/media/eth.eff505c58201f1f25718f1ef047c8a67.svg" alt="" />
                <span className='title'> {cripto.name}</span>
                <span className='price'>{parseFloat(cripto.priceUsd).toFixed(2)}</span>
            </div>
            <div>
                <span className="changePersont" style={backgroundStyle}>{parseFloat(cripto.changePercent24Hr).toFixed(2)}%</span>
            </div>
        </div>
    )
}
