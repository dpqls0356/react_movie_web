import { useEffect, useState } from "react";
import Button from "./button";
import styles from "./App.module.css";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword,setKeyword] = useState('');
  // console.log("i run all the time..");
  //특정코드 한 번만 실행시키기
  const iRunOnlyOne=()=>{
    console.log('first render');
  }
  useEffect(iRunOnlyOne,[]);
  //버튼 클릭시 값 올리기
  function onClick(){
    setCounter((current)=>current+1);
  }
  //input에 변화가 있을때
  function onChange(event){
    setKeyword(event.target.value);
  }
  //keyword가 변화할 때 실행
  useEffect(()=>{
    if(keyword!=="")
      console.log("Search for",keyword);
  },[keyword]);
  return (
    <div >
      <input value={keyword} type="text" onChange={onChange} placeholder="Search here..."></input>
     <h1 className={styles.header}>{counter}</h1> 
     <Button onClick={onClick} text={"Click"}/>
    </div>
  );
}

export default App;
