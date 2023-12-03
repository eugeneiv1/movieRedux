import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import React from "react";

import {MoviesPage} from "./pages/MoviesPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";
import {SearchPage} from "./pages/SearchPage/SearchPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'} />
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: '/movieDetails/:id',
                element: <MovieDetailsPage />
            },
            {
                path: 'search', element: <SearchPage/>
            }
        ]
    }
])

export {
    router
}