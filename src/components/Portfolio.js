import React from "react";
import Purchase from "./Purchase";

function Portfolio({ portfolio, fav, setFav, currentUser }) {

    function handleRemove(event) {
        fetch(`http://localhost:9292/portfolio/${event.target.value}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        setFav([fav])
      };

// if(currentUser.id === owner)
return (
    <div className="portfolio">
      <h1 className="coin-text">{currentUser === "guest" ? "guest" : currentUser.username}'s Portfolio</h1>
    {portfolio.map((coin) => (
        <div key={coin.id} className='coin-container'>
        <div className='coin-row'>
            <div id={coin.name} className="coin">
                <h4>Portfolios userID: {coin.user_id === null ? "guest" : coin.user_id}</h4>
                <img src={coin.image} alt='crypto' />
                <p className="coin-symbol">{coin.coin}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${coin.price}</p>
                <button onClick={handleRemove} value={coin.id} className="remove button">Remove from Portfolio</button>
                <Purchase price={coin.price} id={coin.id}/>
            </div>
         </div>
        </div>
    ))} 
    </div>
    )
}

export default Portfolio;
