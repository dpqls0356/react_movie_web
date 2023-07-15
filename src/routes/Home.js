import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home(){
    const readMovieList = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=1&sort_by=year`)
            ).json();
        setMovieList(json.data.movies);
        setLoading(false);
        console.log(json);
    }
    const [movieList,setMovieList] = useState([]); 
    useEffect(()=>{
        readMovieList();
    },[]);
    const [loading,setLoading] = useState(true);
    return(
        <div>
            <header>See Movie Information</header>
            {loading?
                <div className="loading">Loading...</div>
                :<div className="MovieList">{movieList.map((movie)=><Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    rating={movie.rating}
                    img={movie.medium_cover_image}
                />)}</div>
            }
        </div>
    )

}
export default Home;