import {FC} from "react";
import {useNavigate} from "react-router-dom";


import css from './Genre.module.css'
import {IGenre} from "../../interfaces/genreInterface";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {movieSliceActions} from "../../store/slices/MovieSlice";

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const showMovies = () => {
        dispatch(movieSliceActions.setGenre(id));
        navigate('../movies');
    }

    return (
        <div className={css.genreWrapper} onClick={showMovies}>
            {name}
        </div>
    );
};

export {
    Genre
};