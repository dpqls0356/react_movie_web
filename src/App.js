import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [price,setPrice] = useState();
  const [investment,setInvestment] = useState(0);
  const [purchase,setPurchase] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>response.json()).then((json)=>{
      setCoins(json);
      setLoading(false);
      setPrice(json[0].quotes.USD.price)
    });
  },[])
  const Transducer = () => {
    setPurchase((current)=>parseInt(investment)/parseInt(price));
  }
  useEffect(()=>{
    if(investment===""){
      setPurchase(0);
    }
    else Transducer();
  },[investment]);

  useEffect(Transducer,[price]);
  const onChange =(event)=> {
    setInvestment((current)=>isNaN(event.target.value)?0:event.target.value);
  }
  const onChangeOption=(event)=>{
    setPrice(event.target.options[event.target.selectedIndex].children[0].innerText);
  }
  return (
    <div>
      <h1>The Coins! {coins.length}</h1>
      {loading?<strong>Loading</strong>:      
      <div>
        <label>Investment</label>
        <input onChange={onChange} value={investment} type='text' placeholder="write your investment"></input>
        <div>Amount available for purchase {purchase}
        </div>
        <select onChange={onChangeOption}>
          {coins.map((item)=><option key={item.id}>{item.name} ({item.symbol}) : <span>{item.quotes.USD.price}</span>USD</option>)}
        </select></div>}
    </div>
  );
}

export default App;
