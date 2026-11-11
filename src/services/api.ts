import axios from 'axios';

export const storeApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_UR,
});
