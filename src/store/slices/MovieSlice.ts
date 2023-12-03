import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {IPagination} from "../../interfaces/paginationInterface";

interface IState {
    movies: IMovie[],
    page: number,
    genre: number,
    totalPages: number,
    totalResults: number,
    searchValue:string
}

const initialState:IState = {
    movies: [],
    page: 1,
    genre: null,
    totalPages: null,
    totalResults: null,
    searchValue: null
}

const getAllMovies = createAsyncThunk<IPagination, { page: number , genre?:number}>(
    'getAllMovies/movieSlice',
    async ({page,genre }, {rejectWithValue}) => {
        try {
            const {data} = genre ? await movieService.getAllMovies(page, genre): await movieService.getAllMovies(page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const searchMovies = createAsyncThunk<IPagination, {search: string, page: number}>(
    'searchMovies/moviesSlice',
    async ({search, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(search, page);
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setGenre: (state, action) => {
            state.genre = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    },
    extraReducers:builder =>
        builder
            // .addCase(getAllMovies.fulfilled, (state, action) => {
            //     state.movies = action.payload.results;
            //     state.page = action.payload.page;
            //     state.totalPages = action.payload.total_pages;
            //     state.totalResults = action.payload.total_results;
            // })
            // .addCase(searchMovies.fulfilled, (state, action) => {
            //     state.movies = action.payload.results
            // })
            .addMatcher(isFulfilled(getAllMovies, searchMovies), (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results;
            })
})

const {reducer:movieReducer, actions} = movieSlice;

const movieSliceActions = {
    ...actions,
    getAllMovies,
    searchMovies
}

export {
    movieReducer,
    movieSliceActions
}