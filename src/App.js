import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>response.json()).then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  },[])
  return (
    <div>
      <h1>The Coins! {coins.length}</h1>
      {loading?<strong>Loading</strong>:null}
      <ul>
        {coins.map((item)=><li key={item.id}>{item.name} ({item.symbol}) : {item.quotes.USD.price}USD</li>)}
      </ul>
    </div>
  );
}

export default App;
