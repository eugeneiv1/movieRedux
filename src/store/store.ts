import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/MovieSlice";

const store = configureStore({
    reducer:{
        movie: movieReducer
    }
})

export {
    store
}