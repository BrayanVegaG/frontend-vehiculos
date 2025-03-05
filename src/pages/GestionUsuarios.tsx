import React, { useState } from 'react';
import { Button, Input, Form, message, Card } from 'antd';
import axios from 'axios';

const GestionUsuarios: React.FC = () => {
    const [user, setUser] = useState<{ username: string, role: string } | null>(null);
    const [form] = Form.useForm();

    const handleLogin = async (values: { username: string, password: string }) => {
        try {
            const response = await axios.post('/api/login', values);
            setUser(response.data);
            message.success('Inicio de sesión exitoso');
        } catch (error) {
            message.error('Credenciales incorrectas');
        }
    };

    const handleRegister = async (values: { username: string, password: string }) => {
        try {
            await axios.post('/api/register', values);
            message.success('Registro exitoso');
        } catch (error) {
            message.error('Error en el registro');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 400 }}>
                <h1>Gestión de Usuarios y Roles</h1>
                {!user ? (
                    <div>
                        <h2>Iniciar Sesión</h2>
                        <Form form={form} onFinish={handleLogin}>
                            <Form.Item name="username" rules={[{ required: true, message: 'Por favor ingrese su usuario' }]}>
                                <Input placeholder="Usuario" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}>
                                <Input.Password placeholder="Contraseña" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>Iniciar Sesión</Button>
                            </Form.Item>
                        </Form>
                        <h2>Registrarse</h2>
                        <Form form={form} onFinish={handleRegister}>
                            <Form.Item name="username" rules={[{ required: true, message: 'Por favor ingrese su usuario' }]}>
                                <Input placeholder="Usuario" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}>
                                <Input.Password placeholder="Contraseña" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>Registrarse</Button>
                            </Form.Item>
                        </Form>
                    </div>
                ) : (
                    <div>
                        <h2>Bienvenido, {user.username}</h2>
                        <p>Rol: {user.role}</p>
                        {/* Aquí se implementará la lógica para gestionar usuarios y roles */}
                    </div>
                )}
            </Card>
        </div>
    );
};

export default GestionUsuarios;
