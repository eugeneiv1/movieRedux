import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import {Movies} from "../components/movieContainer/Movies/Movies";

import css from './moviesPagination.module.css'
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieSliceActions} from "../store/slices/MovieSlice";

const MoviesPage = () => {
    const {page} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(movieSliceActions.setPage(value));
    };
    return (
        <Stack spacing={2}>
            <Movies page={page}/>
            <Pagination count={10}
                        page={page}
                        onChange={handleChange}
                        showFirstButton={true}
                        showLastButton={true}
                        className={css.moviesPagination}
            />
        </Stack>
    );
};

export {MoviesPage};