import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
function App() {
 return <Router>
  <Routes>
    <Route path={process.env.PUBLIC_URL +"/movie/:id"} element={<Detail/>}/>
    <Route path={process.env.PUBLIC_URL +"/"} element={<Home/>} />
  </Routes>
 </Router>
}

export default App;
