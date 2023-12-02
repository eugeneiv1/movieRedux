import {IMovie} from "./movieInterface";

export interface IPagination {
    "page": number
    "results": IMovie[]
    "total_pages": number
    "total_results": number
}