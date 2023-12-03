import {useEffect} from "react";

import css from './Genres.module.css';
import {Genre} from "../Genre/Genre";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genresActions} from "../../store/slices/GenresSlice";


const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genresActions.getGenres());
    }, [dispatch]);

    return (
        <div className={css.genreWrapper}>
            {genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};