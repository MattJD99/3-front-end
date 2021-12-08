import React, { useState, useEffect } from "react";

function Favorites({ id, coin, image, price }) {
    const [favorites, setFavorites] = useState([])
    const [isFav, setIsFav] = useState(true)

    useEffect(() => {
      fetch("http://localhost:9292/portfolio")
      .then(response => response.json())
      .then(data => setFavorites(data))
    }, [])

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
        image: image
      }),
    })
      .then((r) => r.json())
      setFavorites([...favorites, coin])
    }

    return (
        <div id="favbutton">
            <button onClick={handleClick} value={coin}>{!isFav ? 'Remove from Portfolio' : 'Add to Portfolio'}</button>
        </div>
    )

}

export default Favorites;