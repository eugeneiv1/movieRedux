import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterface";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";
import {IPagination} from "../../interfaces/paginationInterface";

interface IState {
    movies: IMovie[],
    page: number,
    totalPages: number,
    totalResults: number,
}

const initialState:IState = {
    movies: [],
    page: 1,
    totalPages: null,
    totalResults: null,
}

const getAllMovies = createAsyncThunk<IPagination, { page: number }>(
    'getAllMovies/movieSlice',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results;
            })
})

const {reducer:movieReducer, actions} = movieSlice;

const movieSliceActions = {
    ...actions,
    getAllMovies
}

export {
    movieReducer,
    movieSliceActions
}