import React, { useState } from "react";

function Purchase({ price, id }) {
    const [purchase, setPurchase] = useState('')
    const profitLoss = (price - purchase).toFixed(2)

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/portfolio/${id}`, {
        // fetch("http://localhost:9292/portfolio", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                price_paid: purchase,
              }),
            })
              .then((r) => r.json())
        setPurchase(purchase)
        }
  
    function handleChange(event) {
            setPurchase(event.target.value)
        }
      
    return (
        <form className= "coin" onSubmit={handleSubmit}>
            <label>
                Purchase Price:
                    <input type="text" value={purchase} onChange={handleChange}/>
            </label>
                <input type="submit" value="Submit" />
                <p className={`coin_percent ${profitLoss < 0 ? "red" : "green"}`}>Profit/Loss: {profitLoss} </p>
        </form>
    )
}

export default Purchase;