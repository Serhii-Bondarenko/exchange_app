import {axiosService} from "./axios.service";
import baseURL from "../config/urls";

export const currencyService = {
    getCurrentRates: () => axiosService.get(baseURL)
        .then(response => response.data)
}