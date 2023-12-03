import {FC, PropsWithChildren, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieSliceActions} from "../../../store/slices/MovieSlice";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    page: number
}
const Movies:FC<IProps> = ({page}) => {
    const {movies, genre, searchValue} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        searchValue ? dispatch(movieSliceActions.searchMovies({search: searchValue, page})) : dispatch(movieSliceActions.getAllMovies({page, genre}));
    }, [dispatch, page, genre, searchValue]);

    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export {Movies};