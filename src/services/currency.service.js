import {axiosService} from "./axios.service";
import baseURL from '../config/urls';

export const currencyService = {
    getCurrentRates: () => axiosService.get(baseURL, {
        params: {
            json: 'json',
            exchange: 'exchange',
            coursid: 5
        }
    }).then(response => response.data)
}