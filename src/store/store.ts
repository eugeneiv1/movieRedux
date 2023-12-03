import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/MovieSlice";
import {movieDetailsReducer} from "./slices/MovieDetailsSlice";
import {genresReducer} from "./slices/GenresSlice";
import {themeReducer} from "./slices/ThemeSlice";

const store = configureStore({
    reducer:{
        movie: movieReducer,
        movieDetails: movieDetailsReducer,
        genres: genresReducer,
        theme: themeReducer
    }
})

export {
    store
}