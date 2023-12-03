import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Rating} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieDetailsActions} from "../../store/slices/MovieDetailsSlice";
import {Genre} from "../Genre/Genre";
import css from './MovieDetails.module.css'
import {Cast} from "../Cast/Cast";

const MovieDetails = () => {
    const {movieDetails} = useAppSelector(state => state.movieDetails);
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const movieId = +pathname.split('/')[2];

    useEffect(() => {
        dispatch(movieDetailsActions.getMovieDetails({movieId}))
    }, [dispatch, movieId]);
    return (
        <div>
            {movieDetails && <div className={css.movieDetailsWrapper}>
                <div className={css.imageWrapper}>
                    <img src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt="" className={css.posterImage}/>
                </div>
                <h2 className={css.title}>{movieDetails.title}</h2>
                <p className={css.overview}>{movieDetails.overview}</p>
                <div>
                    <h4>Rating</h4>
                    <Rating name="read-only" value={movieDetails.vote_average} max={10} readOnly precision={0.1}/>
                </div>
                <div>
                    <h4>Genres:</h4>
                    <ul>
                        {movieDetails.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                    </ul>
                </div>
                <p>Release date: {movieDetails.release_date}</p>
                <p>Duration: {movieDetails.runtime} min</p>
                <div className={css.castWrapper}>
                    <h4>Main cast:</h4>
                    <Cast movieId={{movieId}}/>
                </div>
            </div>}
        </div>
    );
};

export {MovieDetails};