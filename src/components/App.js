import React, { useState, useEffect } from "react";
import Login from "./Login";
import Search from "./Search";
import Portfolio from "./Portfolio";

function App() {
  
  const [coins, setCoins] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [fav, setFav] = useState([])
  const [currentUser, setCurrentUser] = useState("guest")

  const changeUser = (user) => {
    setCurrentUser(user)
    console.log(currentUser.id)
  }

  useEffect(() => {
    // fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page&sparkline=false")
    fetch("http://localhost:9292/coins")
    .then(response => response.json())
    .then(data => setCoins(data))
  }, [])

  useEffect(() => {
      // fetch(`http://localhost:9292/portfolio/${currentUser.id}`)
      fetch("http://localhost:9292/portfolio")
      .then(response => response.json())
      .then(data => setPortfolio(data))
    // }, [fav, currentUser.id])
    }, [fav])


    return (   
      <div className="App">
      <Login changeUser={changeUser} currentUser={currentUser} />
      <Search coins={coins} fav={fav} setFav={setFav} currentUser={currentUser} />
      <Portfolio portfolio={portfolio} fav={fav} setFav={setFav} currentUser={currentUser} />
      </div>
    )
}

export default App