import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces/genreInterface";
import {genresService} from "../../services/genresService";

interface IState {
    genres: IGenre[],
    hide: boolean,
}

const initialState:IState = {
    genres: [],
    hide: true,
}

const getGenres = createAsyncThunk<IGenre[], void>(
    'getGenres/GenresSlice',
    async (__, {rejectWithValue}) => {
        try {
            const {data:{genres}} = await genresService.getAllGenres();
            return genres;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const GenresSlice = createSlice({
    name: 'GenresSlice',
    initialState,
    reducers: {
        toggleHide: state => {
            state.hide = !state.hide;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
})

const {reducer:genresReducer, actions} = GenresSlice;

const genresActions = {
    ...actions,
    getGenres
}

export {
    genresReducer,
    genresActions
}