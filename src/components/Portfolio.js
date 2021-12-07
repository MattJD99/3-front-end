import React from "react";

function Portfolio({ portfolio, setPortfolio }) {
    // const [portfolio, setPortfolio] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:9292/portfolios")
    //     .then(response => response.json())
    //     .then(data => setPortfolio(data))
    //   }, [portfolio])
      
    function handleRemove(event) {
        // const deletePortfolio = portfolio.filter((coin) => coin.name !== coin);
        // setPortfolio(deletePortfolio);
        fetch(`http://localhost:9292/portfolios/${event.target.value}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        // body: JSON.stringify({ coin: coin, price: price, image: image, id: coin })
        })
        // console.log(event.target.value)
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
            
            </div>
         </div>
        </div>
    ))} 
    </div>
    )
}

export default Portfolio;
