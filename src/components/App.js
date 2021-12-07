import React, {useState, useEffect} from "react";
// import Login from "./Login";
import Search from "./Search";
import Portfolio from "./Portfolio";

function App() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page&sparkline=false")
    .then(response => response.json())
    .then(data => setCoins(data))
  }, [])

  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    // fetch("https://project-2-cryptoco.herokuapp.com/favorites")
    fetch("http://localhost:9292/portfolios")
    .then(response => response.json())
    .then(data => setPortfolio(data))
  }, [portfolio])

    return (   
      <div className="App">
      {/* <Login changeUser={changeUser} /> */}
      <Search coins={coins} />
      <Portfolio portfolio={portfolio}/>
      </div>
    )
}

export default App
