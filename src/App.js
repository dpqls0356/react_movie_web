import { useEffect, useState } from "react";
import Button from "./button";
import styles from "./App.module.css";
function Hello(){
  useEffect(()=>{
    console.log("create");
    return () => console.log("destroyed");
  },[]);
  return (
    <h1>Hello</h1>
  );
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () =>setShowing((current)=> !current);
  return (
    <div >
      {showing?<Hello/>:null}
      <Button showing={showing} onClick={onClick}/>
    </div>
  );
}

export default App;
