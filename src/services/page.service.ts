import {axiosService} from "./axios.service";
import {key, urls} from "../configs/urls";
import {IResponseMovie} from "../store/movie.slice";
import {IMovie} from "../interfaces/movie.interface";

export const pageService = {
    getAll: (page: number) => axiosService.get<IResponseMovie>(`${urls.pages}&page=${page}`),
    searchMovie: (query: string, page: number) => axiosService.get<IResponseMovie>(`${urls.search}&query=${query}&page=${page}`),
    getMovieById: (id: number) => axiosService.get<IMovie>(`${urls.movieDetails}/${id}${key}`)
}