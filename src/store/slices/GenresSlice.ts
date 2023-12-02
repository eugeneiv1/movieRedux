import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const GenresSlice = createSlice({
    name: 'GenresSlice',
    initialState,
    reducers: {

    },
    extraReducers:builder =>
        builder
})

const {reducer:genresReducer, actions} = GenresSlice;

const genresActions = {
    ...actions
}

export {
    genresReducer,
    genresActions
}