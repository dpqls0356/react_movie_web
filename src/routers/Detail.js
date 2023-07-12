import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [movie,setMovie] = useState();
    const [loading,setLoading] = useState(true);
    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setLoading(false);
        setMovie(json.data.movie);
    }
    useEffect(()=>{
        getMovie();
    },[])

    return (<div>
        {loading?
            <div>Loading...</div>:
            <div>{movie.title}</div>}
        </div>)
}
export default Detail;