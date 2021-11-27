import React, { useState, useEffect } from "react";

function Favorites({ id, coin, image, price }) {
    const [favorites, setFavorites] = useState([])
    const [isFav, setIsFav] = useState(true)

    useEffect(() => {
      fetch("https://project-2-cryptoco.herokuapp.com/favorites")
      .then(response => response.json())
      .then(data => setFavorites(data))
    }, [favorites])

    function handleClick(){
        setIsFav(!isFav)

        if(isFav){
        fetch("https://project-2-cryptoco.herokuapp.com/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify({ coin: coin, image: image, price: price, id: coin })
        })
        setFavorites([...favorites, coin])

        }
        else {
        fetch(`https://project-2-cryptoco.herokuapp.com/favorites/${id}`, {
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