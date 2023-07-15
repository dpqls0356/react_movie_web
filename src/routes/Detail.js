import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail(){
    const {id} = useParams();
    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getMovie();
    },[]);
    const getMovie =async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=1&sort_by=year`)
            ).json();
        const findmovie = json.data.movies.find(item=>String(item.id)===String(id));
        setMovie(findmovie);
        setLoading(false);
        console.log(findmovie);
    }

    return (
        <div>
            {loading?
                <div>Loading...</div>
                :<MovieDetail                    
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                rating={movie.rating}
                img={movie.medium_cover_image}
                release={movie.year}
            />}
        </div>
    );

}

export default Detail;