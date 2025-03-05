import { Vehiculo } from "../types/types";
import { fetchAPI } from "./api";

export const vehiculoService = {

    findAll: async (): Promise<Vehiculo[]> => {
        return await fetchAPI('/vehiculo');
    },

    findById: async (id: number): Promise<Vehiculo> => {
        return await fetchAPI(`/vehiculo/${id}`);
    },

    create: async (data: Partial<Vehiculo>): Promise<Vehiculo> => {
        const { marca, modelo, año, numeroPlaca, color, tipo, odometro, estado } = data || {};
        return await fetchAPI('/vehiculo', {
            method: 'POST',
            body: JSON.stringify({ marca, modelo, año, numeroPlaca, color, tipo, odometro, estado }),
        });
    },

    update: async (id: number, data: Partial<Vehiculo>): Promise<Vehiculo> => {
        const { marca, modelo, año, numeroPlaca, color, tipo, odometro, estado } = data;
        return await fetchAPI(`/vehiculo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ marca, modelo, año, numeroPlaca, color, tipo, odometro, estado }),
        });
    },

    delete: async (id: number): Promise<void> => {
        await fetchAPI(`/vehiculo/${id}`, {
            method: 'DELETE',
        });
    },

    asignarRegistroServicio: async (idVehiculo: number, idRegistroServicio: number): Promise<Vehiculo> => {
        return await fetchAPI(`/vehiculo/${idVehiculo}/registro-servicio/${idRegistroServicio}`, {
            method: 'POST',
            body: JSON.stringify({}),
        });
    },

    removerRegistroServicio: async (idVehiculo: number, idRegistroServicio: number): Promise<Vehiculo> => {
        return await fetchAPI(`/vehiculo/${idVehiculo}/registro-servicio/${idRegistroServicio}`, {
            method: 'DELETE',
        });
    },

};