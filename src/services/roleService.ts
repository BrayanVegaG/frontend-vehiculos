import { fetchAPI } from "./api";

const API_URL = '/roles/';

const getRoles = async () => {
    return await fetchAPI(API_URL);
};

const assignRole = async (userId: string, roleId: string) => {
    return await fetchAPI(API_URL + 'assign', {
        method: 'POST',
        body: JSON.stringify({ userId, roleId })
    });
};

const roleService = {
    getRoles,
    assignRole,
};

export default roleService;
