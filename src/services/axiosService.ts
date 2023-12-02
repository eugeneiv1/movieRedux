import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(request => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc0YjE5YjE4MTgxYzU5MmZmMTY0YjlkOWQ0M2M1OSIsInN1YiI6IjYzODllNTVjZjNiNDlhMDA4NDJlMjI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UnQy8UaIDjuUkHCSRP6QxHwE6C6VXtSH47olTyTrmQc';
    request.headers.Authorization = `Bearer ${token}`;

    return request
})

export {
    axiosService
}