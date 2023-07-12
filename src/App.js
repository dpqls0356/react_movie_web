import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
function App() {
 return <Router>
  <Routes>
    <Route path="/movie" element={<Detail/>}/>
    <Route path="/" element={<Home/>} />
  </Routes>
 </Router>
}

export default App;
