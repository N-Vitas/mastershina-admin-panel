import axios from 'axios';
import config from '../config';

const queryApi = token => axios.create({
    baseURL: config.BASE_URL,
    withCredentials: true,
    headers: {
        'X-Key': token,
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

export default queryApi;