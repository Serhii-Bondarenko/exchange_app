import { axiosService } from './axios.service';
import baseURL from '../config/urls';

export const currencyService = {
    getCurrentRates: (coursid) => axiosService.get(baseURL, {
        params: {
            json: 'json',
            exchange: 'exchange',
            coursid
        }
    }).then(response => response.data)
}