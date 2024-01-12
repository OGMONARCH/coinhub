import React from 'react'
import "./coin.css"
import Coinitem from './Coinitem'
const Coin = () => {
  return (
    <div className='container'>
        <h1>Authorized Coins with current rate</h1>
        <div className='heading'>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>Mkt Cap</p>
        </div>
        <Coinitem />
    </div>
  )
}

export default Coin