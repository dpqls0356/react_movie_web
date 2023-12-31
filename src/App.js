import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from './routes/Home';
import Detail from "./routes/Detail";
function App(){
    return (
        <Router>
            <Routes>
                <Route path={process.env.PUBLIC_URL+`/`} element={<Home/>}></Route>
                <Route path={process.env.PUBLIC_URL+`/movie/:category/:id`} element={<Detail/>}></Route>
            </Routes>
        </Router>
    );
}
// hover  , slide0356
export default App;