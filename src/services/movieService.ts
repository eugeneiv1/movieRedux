import {IPagination} from "../interfaces/paginationInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";

const movieService = {
    getAllMovies: (page?:number):IRes<IPagination> => axiosService.get(urls.movies.allMovies, {params: {page}})
}

export {
    movieService
}