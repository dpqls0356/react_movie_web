import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Movie({id,title,rating,img}){
    const imgRef = useRef(null);
    const [height,setHeight] = useState(0);
    const [width,setWidth] = useState(0);
    const setSize = () => {
        setTimeout(()=>{
            setWidth(imgRef.current.offsetWidth)
            setHeight(imgRef.current.offsetHeight)
          }, 120);
    }
    useEffect(setSize,[])
    const [isHidden,setIsHidden] = useState(true);
    const onMouseEnter = ()=>{
        setIsHidden(false);
        setWidth(imgRef.current.offsetWidth)
        setHeight(imgRef.current.offsetHeight)
    }
    const onMouseLeave = () =>{
        setIsHidden(true);
    }
    return (
        <div className="movie">
            <div className="movie-show" onMouseEnter={onMouseEnter}>
                <img src={img }  ref={imgRef}></img>
                <span>{title}</span>
            </div>
            <div onMouseLeave={onMouseLeave} className={`movie-hidden ${isHidden?'hidden':''}`} style={{width:width,height:height}}>
                <span>{rating}</span>
                <button><Link to={process.env.PUBLIC_URL +`/movie/${id}`}>More</Link></button>
            </div>
        </div>
    );
}
export default Movie;