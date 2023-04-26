import axios from 'axios'

const AxiosInstanse = axios.create({
    timeout: 50000,
});

export const api = {
    get: <T>(url: string, params?: object) => AxiosInstanse.get<T>(url, {...params}),
    post: <T>(url: string, data: any) => AxiosInstanse.post<T>(url, data),
    patch: <T>(url: string, data: any) => AxiosInstanse.patch<T>(url, data),
    delete: <T>(url: string, data: any) => AxiosInstanse.delete<T>(url, data),
}