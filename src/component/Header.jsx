import {useState, useEffect} from 'react';
import axios from 'axios';

import image from "../Assets/pierre-borthiry-peiobty-vBCVcWUyvyM-unsplash.jpg"
import "./Header.css"

import Coin from './Coin';

const Header = () => {
    const [coin, setCoin] = useState([])
  
  const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

    useEffect(() => {
      axios.get(URL)
      .then((res)=>{
        console.log(res.data)
      })

      
    }, [])
    

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
    <Coin coins={coin}/>
  </section>
  )
}

export default Header