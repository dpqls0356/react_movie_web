import React from "react";
import { Link } from "react-router-dom";
function Movie({id,title,summary,rating,img,release}){
    return (
        <div className="movie">
            <div>
                <img src={img}></img>
                <span>{title}</span>
            </div>
            <div>
                <span>{rating}</span>
                <button><Link to={process.env.PUBLIC_URL +`/movie/${id}`}>More</Link></button>
            </div>
        </div>
    );
}
export default Movie;