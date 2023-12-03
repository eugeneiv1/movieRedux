import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const genresService = {
    getAllGenres: ()=> axiosService.get(urls.genre.allGenres)
}

export {
    genresService
}