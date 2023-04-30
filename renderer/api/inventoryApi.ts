import axios from 'axios';

const inventoryApi = axios.create({
    baseURL: '/api'
})

export default inventoryApi;