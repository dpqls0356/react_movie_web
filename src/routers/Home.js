import { useEffect, useState } from "react";
import Movie from "../components/Move";
function Home(){
    const [loading,setLoading] = useState(true);
    const [movieList,setMovieList] = useState([]);
    const getMovies=async() =>{
      // const response = fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
      // const json = await response.json();
      const json = await(
          await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        ).json();
      setLoading(false);
      setMovieList(json.data.movies);
    }
    useEffect(()=>{
      // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year").then((repsonse)=>repsonse.json()).then((json)=>{
      //   setLoading(false);
      //   setMovieList(json.data.movies);
      // });
      getMovies();
    },[])
    return (
      <div>
        {loading?<h1>Loading...</h1>:      
        <div>
          {movieList.map((movie)=><Movie 
            key={movie.id} 
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />)}
        </div>
        }
      </div>
    );
}
export default Home;