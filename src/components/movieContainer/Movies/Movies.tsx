import {FC, PropsWithChildren, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieSliceActions} from "../../../store/slices/MovieSlice";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    page: number
}
const Movies:FC<IProps> = ({page}) => {
    const {movies} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieSliceActions.getAllMovies({page}))
    }, [dispatch, page]);
    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export {Movies};