import {axiosService} from "./axios.service";
import {IGenreResponse} from "../interfaces/movie.interface";
import {urls} from "../configs/urls";
import {IGenreResult} from "../interfaces/genre.interface";

export const genreService = {
    getAll: () => axiosService.get<IGenreResponse>(urls.genres),
    getPagesByGenre: (with_genres: number, page: number) => axiosService.get<IGenreResult>(`${urls.movies}&with_genres=${with_genres}&page=${page}`),
}