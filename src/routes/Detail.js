import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail(){
    const {category,id} = useParams();
    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);
    const readHighRatingMovieList = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=rating`)
            ).json();
        const findmovie = json.data.movies.find(item=>String(item.id)===String(id));
        setMovie(findmovie);
        setLoading(false);
    }
    const readManyDownloadMovieList = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count`)
            ).json();
        const findmovie = json.data.movies.find(item=>String(item.id)===String(id));
        setMovie(findmovie);
        setLoading(false);
    }
    const readDocumentaryMovieList = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=Documentary&sort_by=rating`)
        ).json();
        const findmovie = json.data.movies.find(item=>String(item.id)===String(id));
        setMovie(findmovie);
        setLoading(false);
    }
    const readThrillerMovieList = async ()=>{
        const json = await( 
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=Thriller&sort_by=rating`)
        ).json();
        const findmovie = json.data.movies.find(item=>String(item.id)===String(id));
        setMovie(findmovie);
        setLoading(false);
    }
    const readActionMovieList = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=Action&sort_by=rating`)
        ).json();
        const findmovie = json.data.movies.find(item=>String(item.id)===String(id));
        setMovie(findmovie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    const getMovie = async()=>{
        if(category==='ManyDownload'){
            readManyDownloadMovieList();
        }
        else if(category==='HighRating'){
            readHighRatingMovieList();
        }
        else if(category==="Documentary"){
            readDocumentaryMovieList();
        }
        else if(category==='Thriller'){
            readThrillerMovieList();
        }
        else{
            readActionMovieList();
        }
    }

    return (
        <div>
            <header className="header">S<span>ee</span>&nbsp;M<span>ovie</span>&nbsp;I<span>nformation</span>
                <Link to={process.env.PUBLIC_URL+`/`}></Link>            
            </header>            
            {loading?
                    <div className="loading">
                    <p>&nbsp;</p>
                    <p>Loading...</p></div>
                :<MovieDetail                    
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                rating={movie.rating}
                genres={movie.genres}
                img={movie.medium_cover_image}
                release={movie.year}
            />}
        </div>
    );

}

export default Detail;