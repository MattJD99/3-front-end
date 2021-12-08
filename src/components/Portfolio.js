import React, { useState, useEffect } from "react";
import Purchase from "./Purchase";

function Portfolio() {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/portfolio")
        .then(response => response.json())
        .then(data => setPortfolio(data))
      }, [portfolio])
      
    function handleRemove(event) {
        fetch(`http://localhost:9292/portfolio/${event.target.value}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
      };

return (
    <div className="portfolio">
      <h1 className="coin-text">Portfolio</h1>
    {portfolio.map((coin) => (
        <div key={coin.id} className='coin-container'>
        <div className='coin-row'>
            <div id={coin.name} className="coin">
                <img src={coin.image} alt='crypto' />
                <p className="coin-symbol">{coin.coin}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${coin.price}</p>
                <button onClick={handleRemove} value={coin.id} className="remove button">Remove from Portfolio!!</button>
                <Purchase price={coin.price} />
            </div>
         </div>
        </div>
    ))} 
    </div>
    )
}

export default Portfolio;
