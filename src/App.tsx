import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Info } from './pages/Info'
import { Inicio } from './pages/Inicio'
import { Vehiculos } from './pages/Vehiculo'
import {Dashboard} from './pages/Dashboard'
import { Talleres } from './pages/Taller'
import { RegistroServicios } from './pages/RegistroServicios'
import { Reportes } from './pages/Reportes'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-m-4">
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/vehiculos" element={<Vehiculos/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/talleres" element={<Talleres/>} />
          <Route path="/registro-servicio" element={<RegistroServicios />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App