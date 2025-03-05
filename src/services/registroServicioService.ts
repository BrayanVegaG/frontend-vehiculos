import { RegistroServicio, Taller, Vehiculo } from "../types/types";
import { fetchAPI } from "./api";

export const registroServicioService = {

    findAll: async (): Promise<RegistroServicio[]> => {
        return await fetchAPI('/registro-servicio');
    },

    findById: async (id: number): Promise<RegistroServicio> => {
        return await fetchAPI(`/registro-servicio/${id}`);
    },

    findTalleres: async (): Promise<Taller[]> => {
        return await fetchAPI('/taller');
    },

    findVehiculos: async (): Promise<Vehiculo[]> => {
        return await fetchAPI('/vehiculo');
    },

    create: async (data: Partial<RegistroServicio>): Promise<RegistroServicio> => {
        const { fechaServicio, descripcion, costo, tipoServicio, kilometraje, documentos, vehiculo, taller } = data || {};
        return await fetchAPI('/registro-servicio', {
            method: 'POST',
            body: JSON.stringify({ fechaServicio, descripcion, costo, tipoServicio, kilometraje, documentos, vehiculo, taller }),
        });
    },

    update: async (id: number, data: Partial<RegistroServicio>): Promise<RegistroServicio> => {
        const { fechaServicio, descripcion, costo, tipoServicio, kilometraje, documentos, vehiculo, taller } = data;
        return await fetchAPI(`/registro-servicio/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ fechaServicio, descripcion, costo, tipoServicio, kilometraje, documentos, vehiculo, taller }),
        });
    },

    delete: async (id: number): Promise<void> => {
        await fetchAPI(`/registro-servicio/${id}`, {
            method: 'DELETE',
        });
    },

};