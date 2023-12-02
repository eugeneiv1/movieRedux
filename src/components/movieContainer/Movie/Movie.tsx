import React, {FC, PropsWithChildren} from "react";
import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces/movieInterface";
import css from './Movie.module.css';
interface IProps extends PropsWithChildren{
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {title, poster_path, vote_average} = movie
    return (
        <div className={css.Movie}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster"/>
            </div>
            <Rating name="read-only" value={vote_average} max={10} readOnly precision={0.1}/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};