import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Movie({id,title,rating,img,category}){
    const imgRef = useRef(null);
    const [height,setHeight] = useState(0);
    const [width,setWidth] = useState(0);
    const setSize = () => {
            setWidth(imgRef.current?.offsetWidth)
            setHeight(imgRef.current?.offsetHeight)
    }
    useEffect(setSize,[])
      const [state, setState] = useState('firstHidden');
    const onMouseEnter = ()=>{
        setState("show-more");
        setWidth(imgRef.current?.offsetWidth)
        setHeight(imgRef.current?.offsetHeight)
    }
    const onMouseLeave = () =>{
        setState("hidden")
        setWidth(imgRef.current?.offsetWidth)
        setHeight(imgRef.current?.offsetHeight)
    }
    return (
        <div className="movie">
            <div className="movie-show" >
                <img src={img }  onMouseEnter={onMouseEnter} ref={imgRef}></img>
                <span>{title}</span>
            </div>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  className={`hide-part ${state}`} style={{width:width,height:height}}>
                    <span>{rating}</span>
                    <button><Link to={process.env.PUBLIC_URL +`/movie/${category}/${id}`}>More</Link></button>
                </div>
        
        </div>
    );
}
export default Movie;