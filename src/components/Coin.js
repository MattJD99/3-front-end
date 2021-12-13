import React from 'react';
import Favorites from './Favorites';

function Coin({ id, coin, name, price, image, priceChange, marketCap, fav, setFav, currentUser }) {

    return (
        <div key={id} className='coin-container'>
            <div className='coin-row'>
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <p className="coin-symbol">{coin}</p>
                    <p className="coin-name">{name}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className={`coin_percent ${priceChange < 0 ? "red" : "green"}`}>{priceChange}%</p>
                    <p className="coin-marketcap">Market Cap: ${marketCap.toLocaleString()}</p>
                    <Favorites
                        id={id}
                        coin={coin}
                        price={price}
                        image={image}
                        fav={fav}
                        setFav={setFav}
                        currentUser={currentUser} />
                </div>
            </div>
        </div>
    )
}

export default Coin;