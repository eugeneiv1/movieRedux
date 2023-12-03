import {createSlice} from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('theme')) ?? false;

const ThemeSlice = createSlice({
    name: 'ThemeSlice',
    initialState,
    reducers: {
        toggleTheme: state => {
            const nextState = !state;

            localStorage.setItem('theme', JSON.stringify(nextState));

            return nextState;
        }
    }
})

const {reducer:themeReducer, actions} = ThemeSlice;

const themeActions = {
    ...actions
}

export {
    themeActions,
    themeReducer
}