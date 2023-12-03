import React, {FC, PropsWithChildren} from "react";
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import css from './Movie.module.css';
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {movieDetailsActions} from "../../../store/slices/MovieDetailsSlice";
interface IProps extends PropsWithChildren{
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const showDetails = () => {
        dispatch(movieDetailsActions.resetMovieDetails());
        navigate(`/movieDetails/${id}`);
    }

    return (
        <div className={css.Movie} onClick={showDetails}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster"/>
            </div>
            <Rating name="read-only" value={vote_average} max={10} readOnly precision={0.1}/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};