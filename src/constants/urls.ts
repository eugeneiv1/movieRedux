const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie'
const discover ='/discover';
const genre = '/genre';
const search = '/search';

const urls = {
    movies: {
        allMovies: `${discover}${movie}`,
        byId: (id: number): string => `${movie}/${id}`,
        cast: (id: number): string => `${movie}/${id}/credits`
    },
    genre: {
        allGenres: `${genre}${movie}/list`
    },
    search: `${search}${movie}`
}

export {
    baseURL,
    urls
}