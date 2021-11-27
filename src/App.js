import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./Search";
import Coin from "./Coin";
import NavBar from './NavBar';

function App() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    .then(data => setCoins(data))
  }, [])

  const allCoins = coins.map(({ id, name, symbol, current_price, image, price_change_percentage_24h, market_cap }) => {
    return (
    <div key={id}>
        <Coin    
            name={name}
            symbol={symbol}
            price={current_price}
            image={image}
            priceChange={price_change_percentage_24h.toFixed(2)}
            marketCap={market_cap}
        />
    </div>
  )})

    return (
      
      <div className="App">
      <NavBar />
      <Search coins={coins} />
      <h1 className="coin-text">CryptoCo</h1>
            {allCoins}
      </div>
      
    )
}

export default App
