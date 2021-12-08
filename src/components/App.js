import React, {useState, useEffect} from "react";
// import Login from "./Login";
import Search from "./Search";
import Portfolio from "./Portfolio";

function App() {

  const [coins, setCoins] = useState([])
 
  useEffect(() => {
    // fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page&sparkline=false")
    fetch("http://localhost:9292/coins")
    .then(response => response.json())
    .then(data => setCoins(data))
  }, [])

    return (   
      <div className="App">
      {/* <Login changeUser={changeUser} /> */}
      <Search coins={coins} />
      <Portfolio />
      </div>
    )
}

export default App
