import {axiosService} from "./axios.service";
import {IGenreResponse} from "../interfaces/movie.interface";
import {urls} from "../configs/urls";

export const genreService = {
    getAll: () => axiosService.get<IGenreResponse>(urls.genres).then(value => value.data)
}