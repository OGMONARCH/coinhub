import React from 'react'

import image from "../Assets/pierre-borthiry-peiobty-vBCVcWUyvyM-unsplash.jpg"
import "./Header.css"

import Coin from './Coin';

const Header = () => {
  return (
  <section id='header'>
    <div className='header container'>
      <div className='header-left'>
        <h1>
        <span>
        BLOCK CHAIN WEBSITE
        </span>
        <span className='xs-font'>
        A PLATFORM WHERE
      </span>
      <span className='xs-font'>
        YOU CAN TRADE
      </span>
      <span className='xs-font'>
        ALL COINS
      </span>
      </h1>
      </div>
      <div className='header-right'>
        <img class="header-img" src={image}></img>
      </div>
    </div>
    <Coin/>
  </section>
  )
}

export default Header