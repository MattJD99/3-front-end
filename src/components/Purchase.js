import React, { useState, useEffect } from "react";

function Purchase({ price }) {
    const [purchase, setPurchase] = useState('')
    let profitLoss = price - purchase

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/portfolio/${event.target.value}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                price_paid: profitLoss,
              }),
            })
              .then((r) => r.json())
        

        setPurchase(purchase)
        //subtract purchase from price
        //save result as variable
        //put variable in portfolio use css to make green or red
        // setPurchase('')
        console.log(purchase)
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
                <p className={`coin_percent ${profitLoss < 0 ? "red" : "green"}`}>Profit/Loss: {profitLoss.toFixed(2)}</p>
        </form>
    )
}

export default Purchase;