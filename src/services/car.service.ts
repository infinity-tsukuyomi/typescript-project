import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {ICar} from "../interfaces/car.interface";

export const carService = {
    getAll: () => axiosService.get<ICar[]>(urls.cars),
    create: (car: ICar) => axiosService.post<ICar>(urls.cars, car)
}