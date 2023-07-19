import React from "react";
function MovieDetail({id,title,summary,rating,genres,img,release}){
    return (
        <div className="movie-detail">
            <img className="movie-detail-img" src={img}></img>
            <div className="movie-detail-header">
                <div>
                    <p>{title}</p>
                    <p>{release}</p>
                </div>
                <div>
                    <div>
                        <span>Category : </span> 
                        {genres&&genres.map((genres) => (
                            <span key={genres}>{genres}&nbsp;&nbsp;</span>)
                        )}
                    </div>
                    <p>Rating : {rating}</p>
                </div>
            </div>
            <div className="summary">{summary}</div>
        </div>
    );
}
export default MovieDetail;