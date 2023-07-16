import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home(){
    const readHighRatingMovieList = async ()=>{
        const highRating = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=rating`)
            ).json();
        setHighRatingMovieList(highRating.data.movies);
    }
    const readManyDownloadMovieList = async ()=>{
        const manyDownload = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count`)
            ).json();
        setManyDownloadMovieList(manyDownload.data.movies);
    }
    const readDocumentaryMovieList = async ()=>{
        const documentary = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=Documentary&sort_by=rating`)
        ).json();
        console.log(documentary);
        setDocumentaryMovieList(documentary.data.movies);
    }
    const readThrillerMovieList = async ()=>{
        const thriller = await( 
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=Thriller&sort_by=rating`)
        ).json();
        setThrillerMovieList(thriller.data.movies);
    }
    const readActionMovieList = async ()=>{
        const action = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=Action&sort_by=rating`)
        ).json();
        setActionMovieList(action.data.movies);
        setLoading(false);
    }

    
    const [highRatingMovieList,setHighRatingMovieList] = useState([]); 
    const [documentaryMovieList,setDocumentaryMovieList] = useState([]);
    const [thrillerMovieList,setThrillerMovieList] = useState([]);
    const [actionMovieList,setActionMovieList] = useState([]);
    const [manyDownloadMovieList,setManyDownloadMovieList] = useState([]);
    const [loading,setLoading] = useState(true);

    
    useEffect(()=>{
        readHighRatingMovieList();
        readManyDownloadMovieList();
        readDocumentaryMovieList();
        readThrillerMovieList();
        readActionMovieList();

    },[]);
    
    return(
        <div>
            <header className="header">S<span>ee</span>&nbsp;M<span>ovie</span>&nbsp;I<span>nformation</span></header>
            {loading?
                <div className="loading">Loading...</div>
                :
                <div className="MovieList ">
                    <div className="ManyDownload">
                        <h1 className="MovieList-header">Many Download</h1>
                        <div className="MovieList-component">
                            {manyDownloadMovieList.map((movie)=><Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            img={movie.medium_cover_image}
                            />)}
                        </div>
                    </div>
                    <div className="HighRating">
                        <h1 className="MovieList-header">High Rating</h1>
                        <div className="MovieList-component">
                            {highRatingMovieList.map((movie)=><Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            img={movie.medium_cover_image}
                            />)}
                        </div>
                    </div>
                    <div className="Action"> 
                        <h1 className="MovieList-header">Action</h1>
                        <div className="MovieList-component">
                            {actionMovieList.map((movie)=><Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            img={movie.medium_cover_image}
                            />)}
                        </div>
                    </div>
                    <div className="Documentary"> 
                        <h1 className="MovieList-header">Documentary</h1>
                        <div className="MovieList-component">
                            {documentaryMovieList.map((movie)=><Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            img={movie.medium_cover_image}
                            />)}
                        </div>
                    </div>
                    <div className="Thriller">
                        <h1 className="MovieList-header">Thriller</h1>
                        <div className="MovieList-component">
                            {thrillerMovieList.map((movie)=><Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            img={movie.medium_cover_image}
                            />)}
                        </div>
                    </div>
                </div>
            }
        </div>
    )

}
export default Home;