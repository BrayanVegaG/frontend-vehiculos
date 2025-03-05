import { Taller } from "../types/types";
import { fetchAPI } from "./api";

export const tallerService = {

    findAll: async (): Promise<Taller[]> => {
        return await fetchAPI('/taller');
    },

    findById: async (id: number): Promise<Taller> => {
        return await fetchAPI(`/taller/${id}`);
    },

    create: async (data: Partial<Taller>): Promise<Taller> => {
        const { nombre, direccion, telefono, correo, horariosAtencion, especialidades } = data || {};
        return await fetchAPI('/taller', {
            method: 'POST',
            body: JSON.stringify({ nombre, direccion, telefono, correo, horariosAtencion, especialidades }),
        });
    },

    update: async (id: number, data: Partial<Taller>): Promise<Taller> => {
        const { nombre, direccion, telefono, correo, horariosAtencion, especialidades } = data;
        return await fetchAPI(`/taller/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ nombre, direccion, telefono, correo, horariosAtencion, especialidades }),
        });
    },

    delete: async (id: number): Promise<void> => {
        await fetchAPI(`/taller/${id}`, {
            method: 'DELETE',
        });
    },
};