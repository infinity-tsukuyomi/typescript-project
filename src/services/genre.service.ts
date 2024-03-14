import {axiosService} from "./axios.service";
import {Genre} from "../interfaces/movie.interface";
import {urls} from "../configs/urls";

export const genreService = {
    getAll: () => axiosService.get<Genre>(urls.genres).then(value => value.data)
}