import React from "react";
function MovieDetail({id,title,summary,rating,img,release}){
    return (
        <div className="movie-detail">
            <img className="movie-detail-img" src={img}></img>
            <div className="movie-detail-header">
                <p>{title}</p>
                <div>
                    <p>{release}</p>
                    <p>{rating}</p>
                </div>
            </div>
            <div>{summary}</div>
        </div>
    );
}
export default MovieDetail;