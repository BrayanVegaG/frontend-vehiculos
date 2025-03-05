import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const navigate = useNavigate(); // Hook de React Router DOM para navegar entre rutas
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi-pi-home',
            command: () => navigate('/Dashboard')
        },
        {
            label: 'Vehículos',
            icon: 'pi-pi-car',
            command: () => navigate('/vehiculos')
        },
        {
            label: 'Talleres',
            icon: 'pi-pi-wrench',
            command: () => navigate('/talleres')
        },
        {
            label: 'Registros de Servicio',
            icon: 'pi-pi-book',
            command: () => navigate('/registro-servicio')
        },
        {
            label: 'Reportes',
            icon: 'pi-pi-chart-line',
            command: () => navigate('/reportes')
        },
        {
            label: 'Configuración',
            icon: 'pi-pi-cog',
            command: () => navigate('/configuracion')
        },
        {
            label: 'Perfil de Usuario',
            icon: 'pi-pi-user',
            command: () => navigate('/perfil')
        }
    ];

    return <Menubar model={items} />;
};