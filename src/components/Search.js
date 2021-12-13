import React, { useState } from "react";
import Coin from "./Coin";

function Search({ coins, fav, setFav, currentUser }) {
    const [search, setSearch] = useState('')

    function handleChange(event) {
      setSearch(event.target.value)
    }

    function handleSubmit(event) {
      event.preventDefault()
      setSearch(search)
      setSearch('')
    }

      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )

      return ( 
          <div className="coin-search">
            <h1 className="coin-text">CryptoCo</h1>
            <form onSubmit={handleSubmit}>
              <input className="coin-input" type="text" value={search} placeholder="Search for a Currency" onChange={handleChange}/>
              <input type="submit" value="Reset" />
            </form>
          {filteredCoins.map((coin) => (
          <Coin
            key={coin.name}
            id={coin.name}
            coin={coin.name}
            price={coin.price}
            image={coin.image}
            symbol={coin.symbol}
            priceChange={coin.price_change_percentage_24hr}
            marketCap={coin.market_cap}
            fav={fav}
            setFav={setFav}
            currentUser={currentUser}
           />
         ))}
        </div>
      )
}

export default Search;