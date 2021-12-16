import React from "react";

function Favorites({ id, coin, image, price, fav, setFav, currentUser }) {

function handleClick(){
    fetch("http://localhost:9292/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin: coin,
        price: price,
        image: image,
        coin_id: id
      }),
    })
      .then((r) => r.json())
      setFav([...fav, id])
    }

    return (
        <div className="favbutton">                          
            <button onClick={handleClick} value={coin}>{'Add to Portfolio'}</button>
        </div>
    )
}

export default Favorites;