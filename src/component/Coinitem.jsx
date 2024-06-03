import React from 'react'
import "./coin.css"
const Coinitem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image}/>
            <p>{props.coins.symbol}</p>
        </div>
        <p>{props.coins.price_change_24h}</p>
        <p>{props.coins.total_volume}</p>
        <p>{props.coins.market_cap}</p>
        <p>86532894709</p>
    </div>
  )
}

export default Coinitem