import React from "react";

function Favorites({ id, coin, image, price, fav, setFav, currentUser }) {

function handleClick(){
    fetch("http://localhost:9292/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin_id: id,
        coin: coin,
        price: price,
        image: image,
        user_id: currentUser.id
      }),
    })
      .then((r) => r.json())
      setFav([...fav, id])
    }
                                                         //isFav ? 'Remove from Portfolio' :
    return (
        <div id="favbutton">                          
            <button onClick={handleClick} value={coin}>{'Add to Portfolio'}</button>
        </div>
    )
}

export default Favorites;