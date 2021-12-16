import React, { useState, useEffect } from "react";
import Search from "./Search";
import Portfolio from "./Portfolio";

function App() {
  
  const [coins, setCoins] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [fav, setFav] = useState([])
  const [currentUser, setCurrentUser] = useState("guest")

  useEffect(() => {
    fetch("http://localhost:9292/coins")
    .then(response => response.json())
    .then(data => setCoins(data))
  }, [])

  useEffect(() => {
      fetch("http://localhost:9292/portfolio")
      .then(response => response.json())
      .then(data => setPortfolio(data))
    }, [fav])


    return (   
      <div className="App">
      <Search coins={coins} fav={fav} setFav={setFav} currentUser={currentUser} />
      <Portfolio portfolio={portfolio} fav={fav} setFav={setFav} currentUser={currentUser} />
      </div>
    )
}

export default App