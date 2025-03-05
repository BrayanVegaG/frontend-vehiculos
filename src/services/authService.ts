import { fetchAPI } from "./api";

const API_URL = '/auth/';

const login = async (username: string, password: string) => {
    const response = await fetchAPI(API_URL + 'login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    });
    if (response.accessToken) {
        localStorage.setItem('user', JSON.stringify(response));
    }
    return response;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
};

const authService = {
    login,
    logout,
    getCurrentUser,
};

export default authService;
