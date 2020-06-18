import axios from 'axios';
import * as Config from '../ConfigAPI';



export default async function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    })
};