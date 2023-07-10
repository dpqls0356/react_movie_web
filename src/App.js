import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState();
  const [toDos,setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo===""){
      return;
    }
    else{
      setToDos((currentArray) => [toDo,...currentArray]);
      setToDo("");
    }
  };
  const onClickAndRemove = (index) =>{
    // event.target.parentElement.remove();
    // index와 todoIndex가 같지않으면 return
    // setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    setToDos((curToDos)=>curToDos.filter((item,toDoIndex)=> toDoIndex!==index));
  }
  return (
    <div >
      <h1>MY TODO LIST [ {toDos.length} ]</h1>
      <form onSubmit={onSubmit}>
        <input onChange = {onChange} value={toDo || ""} type="text" placeholder="Wirte your to do.."></input>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index)=><li key={index}>{item}<button onClick={()=>onClickAndRemove(index)}>x</button></li>)}
      </ul>
    </div>
  );
}

export default App;
