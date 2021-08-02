import axios from 'axios';


const authApi = axios.create({
    baseURL: 'https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com/test'
})


export const isLogged = (): boolean => {
    return !!localStorage.getItem('token');
}

export const logout = (): void => {
    localStorage.removeItem('token');
}

export default authApi;