import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Actor} from "./Actor/Actor";
import {movieDetailsActions} from "../../store/slices/MovieDetailsSlice";



interface IProps {
    movieId: { movieId: number }
}

const Cast:FC<IProps> = ({movieId}) => {
    const {movieId:id} = movieId;
    const {cast}  =useAppSelector(state => state.movieDetails)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieDetailsActions.getCast({movieId:id}))
    }, [id, dispatch]);

    return (
        <div>
            {cast.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </div>
    );
};

export {Cast};