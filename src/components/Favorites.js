import React, { useState, useEffect } from "react";

function Favorites({ id, coin, image, price }) {
    const [favorites, setFavorites] = useState([])
    const [isFav, setIsFav] = useState(true)

    useEffect(() => {
      fetch("http://localhost:9292/portfolios")
      .then(response => response.json())
      .then(data => setFavorites(data))
    }, [favorites])

    function handleClick(){
        setIsFav(!isFav)

        if(isFav){
        fetch("http://localhost:9292/portfolios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // user_id: user_id,
                coin_id: id,
                coin: coin,
                price: price,
                image: image
            })
        })
        .then((r) => r.json())
        setFavorites([...favorites, coin])

        }
        else {
        fetch(`http://localhost:9292/portfolios/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        }
    }

    return (
        <div id="favbutton">
            <button onClick={handleClick} value={coin}>{!isFav ? 'Remove from Portfolio' : 'Add to Portfolio'}</button>
        </div>
    )

}

export default Favorites;