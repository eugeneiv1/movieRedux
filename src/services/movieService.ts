import {IPagination} from "../interfaces/paginationInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";

const movieService = {
    getAllMovies: (page?:number, with_genres?:number):IRes<IPagination> => axiosService.get(urls.movies.allMovies, {params: {page, with_genres}}),
    getMovieById:(id:number) => axiosService.get(urls.movies.byId(id)),
    getMovieCast:(id:number) => axiosService.get(urls.movies.cast(id)),
    searchMovies: (query:string, page:number) => axiosService.get(urls.search, {params: {query, page}})
}

export {
    movieService
}