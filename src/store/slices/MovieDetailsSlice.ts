import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieDetails} from "../../interfaces/movieDetailsInterface";
import {movieService} from "../../services/movieService";
import {IActor} from "../../interfaces/actorInterface";

interface IState {
    movieDetails: IMovieDetails,
    cast: IActor[]
}

const initialState:IState = {
    movieDetails: null,
    cast: []
}

const getMovieDetails = createAsyncThunk<IMovieDetails, {movieId: number}>(
    'getMovieDetails/MovieDetailsSlice',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(movieId);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const getCast = createAsyncThunk<IActor[], {movieId: number}>(
    'getCast/MovieDetailsSlice',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data:{cast}} = await movieService.getMovieCast(movieId);
            return cast;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const MovieDetailsSlice = createSlice({
    name: 'MovieDetailsSlice',
    initialState,
    reducers: {
        resetMovieDetails: state => {
            state.movieDetails = null;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })
            .addCase(getCast.fulfilled, (state, action) => {
                state.cast = action.payload.slice(0, 16);
            })
})

const {reducer:movieDetailsReducer, actions} = MovieDetailsSlice;

const movieDetailsActions = {
    ...actions,
    getMovieDetails,
    getCast
}

export {
    movieDetailsActions,
    movieDetailsReducer
}