import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home(){
    const [genre, setGenre] = useState(['ManyDownload','HighRating','Action','Documentary','Thriller'])
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
    const [MDTrans, setMDTrans] = useState(0);
    const [HRTrans, setHRTrans] = useState(0);
    const [ACTTrans, setACTTrans] = useState(0);
    const [DOCUTrans, setDOCUTrans] = useState(0);
    const [THRTrans, setTHRTrans] = useState(0);
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
        console.log(genre);

    },[]);
    
    const slideLeft = (wherePart) =>{
        if(wherePart==='MDTrans'){
            if (MDTrans >= 0) {
                return;
              }
            setMDTrans(current => current + 290);
        }
        else if(wherePart==='HRTrans'){
            if (HRTrans >= 0) {
                return;
              }
            setHRTrans(current => current + 290);
        }
        else if(wherePart==='ACTTrans'){
            if (ACTTrans >= 0) {
                return;
              }
            setACTTrans(current => current + 290);
        }
        else if(wherePart==='DOCUTrans'){
            if (DOCUTrans >= 0) {
                return;
              }
            setDOCUTrans(current => current + 290);
        }
        else{
            if (THRTrans >= 0) {
                return;
              }
            setTHRTrans(current => current + 290); 
        }
    }

    const slideRight = (wherePart)=>{
        console.log(MDTrans);
          if(wherePart==='MDTrans'){
            if (MDTrans<=-4930) {
                return;
              }
            setMDTrans(current => current - 290);
        }
        else if(wherePart==='HRTrans'){
            if (HRTrans<=-4930) {
                return;
              }
            setHRTrans(current => current - 290);
        }
        else if(wherePart==='ACTTrans'){
            if (ACTTrans<=-4930) {
                return;
              }
            setACTTrans(current => current - 290);
        }
        else if(wherePart==='DOCUTrans'){
            if (DOCUTrans<=-4930) {
                return;
              }
            setDOCUTrans(current => current - 290);
        }
        else{
            if (THRTrans<=-4930) {
                return;
              }
            setTHRTrans(current => current - 290); 
        }
    }
    return(
        <div>
            <header className="header">S<span>ee</span>&nbsp;M<span>ovie</span>&nbsp;I<span>nformation</span></header>
            {loading?
                <div className="loading">
                    <p>&nbsp;</p>
                    <p>Loading...</p></div>
                :
                <div className="MovieList">                   
                    <div className="ManyDownload slide-btn-parents">
                        <button className="slide-button-l" onClick={()=>slideLeft('MDTrans')}>
                                    {/* <FontAwesomeIcon icon={faArrowLeft}/> */}
                        </button>
                        <h1 className="MovieList-header">Many Download</h1>
                        <div className="MovieList-component">
                            <div className="MovieList-slide" style={{
                                    transform: `translateX(${MDTrans}px)`
                            }}>
                                {manyDownloadMovieList.map((movie)=><Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                rating={movie.rating}
                                img={movie.medium_cover_image}
                                category={genre[0]}
                                />)}
                            </div>
                        </div>
                        <button className="slide-button-r" onClick={()=>slideRight('MDTrans')}>
                                {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                            </button>
                    </div>
                    <div className="HighRating  slide-btn-parents">
                        <button className="slide-button-l" onClick={()=>slideLeft('HRTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowLeft}/> */}
                        </button>
                            <h1 className="MovieList-header">High Rating</h1>
                            <div className="MovieList-component">
                                <div className="MovieList-slide" style={{
                                        transform: `translateX(${HRTrans}px)`
                                }}>
                                {highRatingMovieList.map((movie)=><Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                rating={movie.rating}
                                img={movie.medium_cover_image}
                                category={genre[1]}
                                />)}
                                </div>
                            </div>
                        <button className="slide-button-r" onClick={()=>slideRight('HRTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                        </button>
                    </div>
                    <div className="Action slide-btn-parents"> 
                        <button className="slide-button-l" onClick={()=>slideLeft('ACTTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowLeft}/> */}
                        </button>
                            <h1 className="MovieList-header">Action</h1>
                            <div className="MovieList-component">
                                <div className="MovieList-slide" style={{
                                        transform: `translateX(${ACTTrans}px)`
                                }}>
                                {actionMovieList.map((movie)=><Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                rating={movie.rating}
                                img={movie.medium_cover_image}
                                category={genre[2]}
                                />)}
                                </div>
                            </div>
                        <button className="slide-button-r" onClick={()=>slideRight('ACTTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                        </button>
                    </div>
                    <div className="Documentary slide-btn-parents"> 
                        <button className="slide-button-l" onClick={()=>slideLeft('DOCUTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowLeft}/> */}
                        </button>
                            <h1 className="MovieList-header">Documentary</h1>
                            <div className="MovieList-component">
                                <div className="MovieList-slide" style={{
                                        transform: `translateX(${DOCUTrans}px)`
                                }}>
                                {documentaryMovieList.map((movie)=><Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                rating={movie.rating}
                                img={movie.medium_cover_image}
                                category={genre[3]}
                                />)}
                                </div>
                            </div>
                        <button className="slide-button-r" onClick={()=>slideRight('DOCUTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                        </button>
                    </div>
                    <div className="Thriller slide-btn-parents">
                        <button className="slide-button-l" onClick={()=>slideLeft('THRTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowLeft}/> */}
                        </button>
                            <h1 className="MovieList-header">Thriller</h1>
                            <div className="MovieList-component">
                                <div className="MovieList-slide" style={{
                                        transform: `translateX(${THRTrans}px)`
                                }}>
                                {thrillerMovieList.map((movie)=><Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                rating={movie.rating}
                                img={movie.medium_cover_image}
                                category={genre[4]}
                                />)}
                                </div>
                            </div>
                        <button  className="slide-button-r" onClick={()=>slideRight('THRTrans')}>
                            {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                        </button>
                    </div>
                </div>
            }
        </div>
    )

}
export default Home;