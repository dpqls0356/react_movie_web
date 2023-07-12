import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
// 매개변수를 movie로 했을 때와 {movie}로 했을 때 차이점
// movie로 한 경우에 movie내용이 {movie{id,title,...}}안에 들어가져 넘어옴
// {movie}로 한경우 {title,id,...}로 들어와짐
function Movie({coverImg,title,summary,genres,id}){
    return(
        <div>
          <h2><Link to={process.env.PUBLIC_URL +`/movie/${id}`}>{title}</Link></h2>
          <img src={coverImg} alt={title}></img>
          <p>{summary}</p>
          {genres&&genres.map((genres) => (
          <li key={genres}>{genres}</li>
        ))}
        </div> 
    )
}
Movie.propTypes={
    id:PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;