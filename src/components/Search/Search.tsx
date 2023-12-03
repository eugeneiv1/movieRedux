import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {useNavigate} from "react-router-dom";

import {movieSliceActions} from "../../store/slices/MovieSlice";
import {IQuery} from "../../interfaces/queryInterface";
import css from './Search.module.css'

const Search = () => {
    const{register, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const searchMovie:SubmitHandler<IQuery> = async ({search}) =>{
        dispatch(movieSliceActions.setSearchValue(search));
        navigate('../movies');
    }

    return (
        <form onSubmit={handleSubmit(searchMovie)}>
            <div className={css.inputWrapper}>
                <label className={css.inputLabel}>
                    <input type="text" {...register('search')} />
                    <span>Search Movie</span>
                </label>
                <button className={css.searchButton}>Search</button>
            </div>
        </form>
    );
};

export {Search};