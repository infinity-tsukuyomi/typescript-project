const baseUrl = "https://api.themoviedb.org/3"
export const key = "?api_key=7d06294e736c8928b49cb2537d120e9f"

export default baseUrl;
export const urls = {
    movies: `/discover/movie${key}`,
    search: `/search/movie${key}`,
    pages: `/movie/popular${key}`,
    movieDetails: `/movie`,
    genres: `/genre/movie/list${key}`
}