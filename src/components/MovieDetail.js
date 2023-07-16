import React from "react";
function MovieDetail({id,title,summary,rating,genres,img,release}){
    return (
        <div className="movie-detail">
            <img className="movie-detail-img" src={img}></img>
            <div className="movie-detail-header">
                <p>{title}</p>
                <div>
                    {genres&&genres.map((genres) => (
                        <span key={genres}>{genres}&nbsp;&nbsp;</span>)
                    )}
                    <p>{release}</p>
                    <p>{rating}</p>
                </div>
            </div>
            <div>{summary}</div>
        </div>
    );
}
export default MovieDetail;